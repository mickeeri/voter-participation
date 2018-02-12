// @flow

import React, { Component } from 'react';
import getVoterTurnout from '../services/getVoterTurnout';

import ErrorMessage from '../components/ErrorMessage';

type Props = {};

type State = { isFetching: boolean, regions: Array<any>, errorMessage: string };

class RegionsList extends Component<Props, State> {
  state = {
    isFetching: true,
    regions: [],
    errorMessage: '',
  };

  async componentDidMount() {
    const { state } = this;

    try {
      const response = await getVoterTurnout();
      this.setState({ ...state, isFetching: false });
    } catch (error) {
      console.error(error);
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
    const { errorMessage, isFetching } = this.state;

    return (
      <div id="RegionsList">
        {isFetching && <div className="loader">Hämtar ...</div>}
        {errorMessage && <ErrorMessage errorMessage={errorMessage} />}
      </div>
    );
  }
}

export default RegionsList;
