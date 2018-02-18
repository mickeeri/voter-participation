import React from 'react';
import { shallow, mount } from 'enzyme';
import VoterTurnoutContainer from '../VoterTurnoutContainer';
import getVoterTurnout from '../../services/getVoterTurnout';
import ResultList from '../../components/ResultList';

jest.mock('../../services/getVoterTurnout');

it('should call getVoterTurnout on mount', () => {
  shallow(<VoterTurnoutContainer />);
  expect(getVoterTurnout).toHaveBeenCalled();
});

it('should set isFetching to false when done', async () => {
  const container = shallow(<VoterTurnoutContainer />);
  await getVoterTurnout();
  expect(container.state().isFetching).toEqual(false);
});

it('should render result list after fetching', async () => {
  const container = mount(<VoterTurnoutContainer />);
  await getVoterTurnout();
  expect(container.contains(ResultList)).toBe(true);
});
