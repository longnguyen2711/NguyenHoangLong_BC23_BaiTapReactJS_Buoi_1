import React, { Component } from 'react'
import Body_Banner from './Body_Banner'
import Body_Item from './Body_Item'

export default class Body extends Component {
  render() {
    return (
      <div id="body">
          <Body_Banner />
          <Body_Item />
      </div>
    )
  }
}
