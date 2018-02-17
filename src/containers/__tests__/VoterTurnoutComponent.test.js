import React from 'react';
import { shallow } from 'enzyme';
import VoterTurnoutComponent from '../VoterTurnoutComponent';
import getVoterTurnout from '../../services/getVoterTurnout';

jest.mock('../../services/getVoterTurnout');

it('should call getVoterTurnout on mount', () => {
  shallow(<VoterTurnoutComponent />);
  expect(getVoterTurnout).toHaveBeenCalled();
});

it('should set isFetching to false when done', async () => {
  const list = shallow(<VoterTurnoutComponent />);
  await getVoterTurnout();
  expect(list.state().isFetching).toEqual(false);
});
