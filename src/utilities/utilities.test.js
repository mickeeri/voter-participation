import {
  normalizeRegions,
  getYearlyResult,
  byHighestParticipation,
  filterOutLower,
  getElementWithHighest,
} from './index';

const valueTexts = ['Upplands Väsby', 'Vallentuna', 'Österåker'];
const values = ['0014', '0115', '0117'];

const mockVariables = { values, valueTexts };

describe('normalizeRegions', () => {
  it('should normalize response', () => {
    expect(normalizeRegions(mockVariables)).toEqual({
      ['0014']: { name: 'Upplands Väsby' },
      ['0115']: { name: 'Vallentuna' },
      ['0117']: { name: 'Österåker' },
    });
  });
});

describe('get yearly data', () => {
  const mockData = [
    { key: ['0014', '1998'], values: ['98.5'] },
    { key: ['0014', '1999'], values: ['87.5'] },
    { key: ['0115', '1998'], values: ['99.5'] },
    { key: ['0115', '1999'], values: ['96.6'] },
  ];

  it('should group values by year', () => {
    expect(getYearlyResult(mockData)).toEqual({
      1999: [
        { value: '87.5', region: '0014' },
        { value: '96.6', region: '0115' },
      ],
      1998: [
        { value: '98.5', region: '0014' },
        { value: '99.5', region: '0115' },
      ],
    });
  });
});

describe('sort by highest participation', () => {
  const mockData = [
    { value: '87.5', region: '0014' },
    { value: '99.5', region: '0117' },
    { value: '96.6', region: '0115' },
  ];

  const sortedData = [
    { value: '99.5', region: '0117' },
    { value: '96.6', region: '0115' },
    { value: '87.5', region: '0014' },
  ];

  expect(mockData.sort(byHighestParticipation)).toEqual(sortedData);
});

describe('filter, only leave the one with highest', () => {
  const mockData = [
    { value: '87.5', region: '0014' },
    { value: '77.6', region: '0119' },
    { value: '96.6', region: '0115' },
    { value: '99.5', region: '0117' },
  ];

  expect(getElementWithHighest(mockData)).toEqual({
    value: '99.5',
    region: '0117',
  });
});
