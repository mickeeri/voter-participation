import React, { Component } from 'react';
import RegionsList from './containers/RegionsList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Valdeltagandet från 1973 och fram till senaste riksdagsval</h1>
        <RegionsList />
      </div>
    );
  }
}

export default App;
