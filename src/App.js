import React, { Component } from 'react';
import VoterTurnoutComponent from './containers/VoterTurnoutComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Högsta valdeltagandet från 1973</h1>
        <VoterTurnoutComponent />
      </div>
    );
  }
}

export default App;
