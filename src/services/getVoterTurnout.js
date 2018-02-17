import { get, post } from './api';
import {
  groupByYear,
  getRowWithHighestTurnout,
  normalizeRegions,
} from '../utilities';

function getQuery(regions, contentsCode) {
  return {
    query: [
      {
        code: 'Region',
        selection: {
          filter: 'vs:RegionKommun07+BaraEjAggr',
          values: regions,
        },
      },
      {
        code: 'ContentsCode',
        selection: {
          filter: '1',
          values: [contentsCode],
        },
      },
    ],
    response: {
      format: 'json',
    },
  };
}

export default async function getVoterTurnOut() {
  const tableContent = await get();

  const [regions, content, time] = tableContent.variables;

  const contentsCode = content.values[0];
  const years = time.values.sort((a, b) => (+a < +b ? 1 : -1));

  const regionCodes = regions.values;

  const turnoutContent = await post(getQuery(regionCodes, contentsCode));

  const turnoutData = turnoutContent.data;

  const groupedByYear = groupByYear(turnoutData);

  const results = years.reduce((obj, year) => {
    const turnoutPerYear = groupedByYear[year];
    const rowWithHighestTurnout = getRowWithHighestTurnout(turnoutPerYear);

    return { ...obj, [year]: rowWithHighestTurnout };
  }, {});

  return {
    years,
    results,
    regions: normalizeRegions(regions),
  };
}
