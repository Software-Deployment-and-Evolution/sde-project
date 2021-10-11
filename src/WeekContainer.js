import React from 'react';
import DayCard from './DayCard';
import DegreeToggle from './DegreeToggle';

class WeekContainer extends React.Component {
    state = {
        fullData: [],
        dailyData: [],
        degreeType: "fahrenheit"
    }

    componentDidMount = () => {
        const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
        const weatherURL =
            `http://api.openweathermap.org/data/2.5/forecast?zip=11102&units=imperial&APPID=${API_KEY}`;
        this.fetchingWeatherData(weatherURL);
    }
    fetchingWeatherData = (weatherURL) => {
        fetch(weatherURL)
        .then(res => res.json())
        .then(data => {
            console.log("Data List Loaded", data.list)
            const dailyData = data.list.filter(reading => {
                    return reading.dt_txt.includes("18:00:00")
                }
            )
            this.setState({
                fullData: data.list,
                dailyData: dailyData
            }, () => console.log(this.state))
        });
        
    }
    
    updateForecastDegree = event => {
        this.setState({
            degreeType: event.target.value
        }, () => console.log(this.state))
    }

    formatDayCards = () => {
        return this.state.dailyData.map((reading, index) => <DayCard reading={reading} key={index} degreeType={this.state.degreeType} />)
    }

    render() {
        return (
            <div className="container">
                <h1 className="display-1 jumbotron">4-Day Forecast.</h1>
                <h5 className="display-5 text-muted">New York, US</h5>
                <DegreeToggle degreeType={this.state.degreeType} updateForecastDegree={this.updateForecastDegree} />
                <div className="row justify-content-center">
                    {this.formatDayCards()}
                </div>
            </div>
        )
    }
}

export default WeekContainer;