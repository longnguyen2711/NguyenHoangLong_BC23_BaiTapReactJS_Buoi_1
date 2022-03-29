import React, { Component } from "react";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

export default class Layout extends Component {
  render() {
    return (
      <div id="layout">
        <Header />
        <Body />
        <Footer />
      </div>
    );
  }
}
