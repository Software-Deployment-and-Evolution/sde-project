import React from 'react';

const DegreeToggle = ({ degreeType, updateForecastDegree }) => {
  return (
    <React.Fragment>
        <div className="form-check form-check-inline">
            <input
                className="form-check-input"
                type="radio"
                name="degree-type"
                id="celsius"
                value="celsius"
                checked={degreeType === "celsius"}
                onChange={updateForecastDegree}
            />
            <label className="form-check-label" htmlFor="celsius">Celsius</label>
        </div>
        <div className="form-check form-check-inline">
            <input
                className="form-check-input"
                type="radio"
                name="degree-type"
                id="farenheit"
                value="farenheit"
                checked={degreeType === "farenheit"}
                onChange={updateForecastDegree}
            />
            <label className="form-check-label" htmlFor="farenheit">Farenheit</label>
        </div>
    </React.Fragment>
  )
}

export default DegreeToggle;