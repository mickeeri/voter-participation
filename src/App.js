import React, { Component } from 'react';
import VoterTurnoutContainer from './containers/VoterTurnoutContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Högsta valdeltagandet från 1973</h1>
        <VoterTurnoutContainer />
      </div>
    );
  }
}

export default App;
