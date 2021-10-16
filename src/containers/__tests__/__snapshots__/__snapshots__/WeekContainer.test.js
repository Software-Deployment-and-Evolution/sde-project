import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import  WeekContainer from '../../../../WeekContainer'
import DegreeToggle from '../../../../DegreeToggle';

describe('Snapshot Testing: WeekContainer', () => {
  it('renders without crashing with the save snapshot', () => {
    const wrapper = shallow( <WeekContainer /> )
    expect(toJson(wrapper)).toMatchSnapshot()
  });
  it('Snapshot Testing: expect the `degreeType` prop on the DegreeToggle component is the same as default', () => {
    const defaultDegreeType = "farenheit";
    // Query for the DegreeToggle component in the rendered output
    const wrapper = shallow( <WeekContainer /> )
    const DegreeToggleComponent = wrapper.find(DegreeToggle);
    expect(DegreeToggleComponent.props().degreeType).toBe(defaultDegreeType);
  })
})
