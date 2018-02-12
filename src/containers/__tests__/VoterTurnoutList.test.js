import React from 'react';
import { shallow } from 'enzyme';
import VoterTurnoutList from '../VoterTurnoutList';
import getVoterTurnout from '../../services/getVoterTurnout';

jest.mock('../../services/getVoterTurnout');

it('should call getVoterTurnout on mount', () => {
  shallow(<VoterTurnoutList />);
  expect(getVoterTurnout).toHaveBeenCalled();
});

it('should set isFetching to false when done', async () => {
  const list = shallow(<VoterTurnoutList />);
  await getVoterTurnout();
  expect(list.state().isFetching).toEqual(false);
});
