import { shallow } from 'enzyme';
import WeekContainer from '../WeekContainer';

describe("Testing Weekcontainer", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<WeekContainer />);
  });
  it('Unit Test: check ComponentDidMount', async () => {
    const instance = wrapper.instance();
    jest.spyOn(instance, 'fetchingWeatherData');
    instance.componentDidMount();
    expect(instance.fetchingWeatherData).toHaveBeenCalledTimes(1);
  });
})
