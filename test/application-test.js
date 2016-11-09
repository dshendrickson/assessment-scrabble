import React from 'react'
import { shallow, mount } from 'enzyme'
import { expect } from 'chai'
import locus from 'locus'
import Application from '../lib/components/Application'

const sinon = require('sinon')

describe('Application', () => {
  it('should mount without props', () => {
    const application = mount(<Application />)
    expect(application).to.have.length(1)
  })
})
