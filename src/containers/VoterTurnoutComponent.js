import React, { Component } from 'react';
import getVoterTurnout from '../services/getVoterTurnout';

import ErrorMessage from '../components/ErrorMessage';
import ResultList from '../components/ResultList';

class VoterTurnoutComponent extends Component {
  state = {
    isFetching: true,
    result: null,
    errorMessage: '',
  };

  async componentDidMount() {
    const { state } = this;

    try {
      const result = await getVoterTurnout();

      this.setState({ ...state, isFetching: false, result });
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
    const { errorMessage, isFetching, result } = this.state;

    return (
      <div id="VoterTurnoutComponent">
        {isFetching && <div>Hämtar ...</div>}
        {errorMessage && (
          <ErrorMessage>
            <span>{errorMessage}</span>
          </ErrorMessage>
        )}
        {result && <ResultList result={result} />}
      </div>
    );
  }
}

export default VoterTurnoutComponent;
