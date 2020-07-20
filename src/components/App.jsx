import React, { Component } from 'react';

import DataFetch from './DataFetch';
import TestImage from '../assets/svg/dev-test-img.svg';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="left-side"></div>
        <div className="right-side">
          <img src={TestImage} alt="test svg" />
          <DataFetch />
        </div>
      </div>
    )
  }
};

export default App;
