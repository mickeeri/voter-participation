import { get, post } from '../api';
import expectedResult from './expectedResult.json';
import getVoterTurnout from '../getVoterTurnout';

jest.mock('../api');

it('should return expected result', async () => {
  const voterTurnout = await getVoterTurnout();
  expect(voterTurnout).toEqual(expectedResult);
});
