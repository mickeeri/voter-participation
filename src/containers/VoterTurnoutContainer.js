import React, { Component } from 'react';
import getVoterTurnout from '../services/getVoterTurnout';

import ErrorMessage from '../components/ErrorMessage';
import ResultList from '../components/ResultList';

class VoterTurnoutContainer extends Component {
  state = {
    isFetching: true,
    turnout: null,
    errorMessage: '',
  };

  async componentDidMount() {
    const { state } = this;

    try {
      const turnout = await getVoterTurnout();
      this.setState({ ...state, isFetching: false, turnout });
    } catch (error) {
      this.setState({
        ...state,
        isFetching: false,
        errorMessage: `Ett fel uppstod. ${
          error.status ? `Status: ${error.status}` : ''
        }`,
      });
    }
  }

  render() {
    const { errorMessage, isFetching, turnout } = this.state;

    return (
      <div id="VoterTurnoutContainer">
        {isFetching && <div>Hämtar ...</div>}
        {errorMessage && (
          <ErrorMessage>
            <span>{errorMessage}</span>
          </ErrorMessage>
        )}
        {turnout && <ResultList turnout={turnout} />}
      </div>
    );
  }
}

export default VoterTurnoutContainer;
