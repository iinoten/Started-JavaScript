import React, { Component } from 'react';
import './App.css';

import FeedlTitle from "./json";

class App extends Component {
  render() {
    return (
      <div className="App">
        <FeedlTitle url="http://query.yahooapis.com/v1/public/yql?callback=?"  target="http://uraway.hatenablog.com/feed" />
      </div>
    );
  }
}

export default App;
