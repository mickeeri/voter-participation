import regions from './regions.json';
import turnoutResult from './turnoutResult.json';

export async function get() {
  return regions;
}

export async function post() {
  return turnoutResult;
}
