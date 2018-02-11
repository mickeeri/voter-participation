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
export function getYearlyResult(
  values: Array<{ key: [string, string], values: [string] }>,
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

export function byHighestParticipation(
  a: { value: string },
  b: { value: string },
) {
  return Number(a.value) < Number(b.value) ? 1 : -1;
}

// Filter out everything but the one with the highest value.
export function filterOutLower(element, index, array) {
  const lastElement = array[index - 1];
  const firstElement = array[0];

  if (index === 0) {
    return +element.value > +array[1].value;
  }

  return (
    +element.value > +lastElement.value && +element.value > +firstElement.value
  );
}

export function getElementWithHighest(
  data: Array<{ value: string, region: string }>,
) {
  const sortedByValue = data.sort((a, b) => {
    return +a.value > +b.value ? -1 : 1;
  });

  return sortedByValue[0];
}
