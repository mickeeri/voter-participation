import regions from './regions.json';
import turnoutResult from './turnoutResult.json';

export async function fetchMetaData() {
  return regions;
}

export async function fetchVoterTurnout() {
  return turnoutResult;
}
