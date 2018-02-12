import React, { Component } from 'react';
import VoterTurnoutList from './containers/VoterTurnoutList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Valdeltagandet från 1973 och fram till senaste riksdagsval</h1>
        <VoterTurnoutList />
      </div>
    );
  }
}

export default App;
