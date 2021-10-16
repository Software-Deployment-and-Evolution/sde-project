import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import  App from '../../../../App'

describe('Snapshot Testing: App component', () => {
  it('renders without crashing with the save snapshot', () => {
    const wrapper = shallow( <App /> )
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})