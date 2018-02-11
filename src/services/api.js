// @flow

import fetch from 'so-fetch-js';
import {
  normalizeRegions,
  getYearlyResult,
  getElementWithHighest,
} from '../utilities';

const BASE_URI = 'http://api.scb.se/OV0104/v1/doris/sv/ssd/START';
const REGIONS_URI = 'ME/ME0104/ME0104D/ME0104T4';

async function makeGETRequest(path: string) {
  const response = await fetch(`${BASE_URI}/${path}`);

  if (response.isError) {
    throw new Error({ status: response.status });
  }

  return response.data;
}

async function makePOSTRequest(path: string, body: {}) {
  const response = await fetch(`${BASE_URI}/${path}`, {
    method: 'POST',
    body: JSON.stringify(body),
  });

  if (response.isError) {
    throw new Error({ status: response.status });
  }

  return response.data;
}

export async function fetchRegions() {
  return makeGETRequest(REGIONS_URI);
}

export async function fetchParticipation() {
  return makePOSTRequest(REGIONS_URI, {});
}

export async function fethRegionsAndParticipations() {
  const response = await fetchRegions();
  const regionVariables = response.variables[0];
  const regionsObj = normalizeRegions(regionVariables);

  const values = regionVariables.values;

  const postQuery = {
    query: [
      {
        code: 'Region',
        selection: {
          filter: 'vs:RegionKommun07+BaraEjAggr',
          values: values,
        },
      },
      {
        code: 'ContentsCode',
        selection: {
          filter: 'item',
          values: ['ME0104B8'],
        },
      },
    ],
    response: {
      format: 'json',
    },
  };

  const participationResponse = await makePOSTRequest(REGIONS_URI, postQuery);

  const resultByYear = getYearlyResult(participationResponse.data);

  const withHighestResult = Object.keys(resultByYear).reduce((obj, key) => {
    const currentObj = resultByYear[+key];

    return {
      ...obj,
      [key]: getElementWithHighest(currentObj),
    };
  }, {});

  console.log(withHighestResult);
}
