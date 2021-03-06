import fetch from 'so-fetch-js';

const API_URI =
  'https://api.scb.se/OV0104/v1/doris/sv/ssd/START/ME/ME0104/ME0104D/ME0104T4';

export async function fetchMetaData() {
  const response = await fetch(API_URI);

  if (response.isError) {
    throw new Error({ status: response.status });
  }

  return response.data;
}

export async function fetchVoterTurnout(body) {
  const response = await fetch(API_URI, {
    method: 'POST',
    body: JSON.stringify(body),
  });

  if (response.isError) {
    throw new Error({ status: response.status });
  }

  return response.data;
}
