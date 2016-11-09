import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import sinon from 'sinon'
import { pick, map, extend, filter } from 'lodash'

export default class Application extends Component {
  render() {
    return (
      <div>
        <h1>Hello World!</h1>
      </div>
    )
  }
}
