// @flow

// Create objects with name of region and code.
export function normalizeRegions({
  values,
  valueTexts,
}: {
  values: Array<string>,
  valueTexts: Array<string>,
}): {
  [string]: { name: string },
} {
  return values.reduce((obj, val, index) => {
    return { ...obj, [val]: { name: valueTexts[index] } };
  }, {});
}

// Get result in the form of year: { value: '',  region: '' }.
export function groupByYear(
  values: Array<{ key: [string, string], values: [string] }>
): { [number]: Array<{ value: string, region: string }> } {
  return values.reduce((obj, curr) => {
    const { key, values } = curr;
    const [region, year] = key;

    const newObj = { value: values[0], region };

    if (obj && obj[year]) {
      return { ...obj, [year]: [...obj[year], newObj] };
    }

    return {
      ...obj,
      [year]: [newObj],
    };
  }, {});
}

// Filters out all the rows except the one with the highest turnout.
export function getRowWithHighestTurnout(
  data: Array<{ value: string, region: string }>
) {
  const sortedByValue = data.sort((a, b) => {
    return +a.value > +b.value ? -1 : 1;
  });

  return sortedByValue[0];
}
