// Create objects with name of region and code.
// regionCode: { name: '' }
export function normalizeRegions({ values, valueTexts }) {
  return values.reduce((obj, val, index) => {
    return { ...obj, [val]: valueTexts[index] };
  }, {});
}

// Get result in the form of year: { value: '',  region: '' }.
export function groupByYear(values) {
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
export function getRowWithHighestTurnout(data) {
  const sortedByValue = data.sort((a, b) => {
    return +a.value > +b.value ? -1 : 1;
  });

  const row = sortedByValue[0];

  const allRows = data.filter(el => el.value === row.value);

  return allRows;
}
