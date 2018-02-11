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
