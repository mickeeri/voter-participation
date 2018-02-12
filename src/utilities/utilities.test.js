import {
  normalizeRegions,
  groupByYear,
  getRowWithHighestTurnout,
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

describe('groupByYear', () => {
  const mockData = [
    { key: ['0014', '1998'], values: ['98.5'] },
    { key: ['0014', '1999'], values: ['87.5'] },
    { key: ['0115', '1998'], values: ['99.5'] },
    { key: ['0115', '1999'], values: ['96.6'] },
  ];

  it('should group values by year', () => {
    expect(groupByYear(mockData)).toEqual({
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

describe('getRowWithHighestTurnout', () => {
  const mockData = [
    { value: '87.5', region: '0014' },
    { value: '77.6', region: '0119' },
    { value: '96.6', region: '0115' },
    { value: '99.5', region: '0117' },
  ];

  it('should only return element with highest value', () => {
    expect(getRowWithHighestTurnout(mockData)).toEqual({
      value: '99.5',
      region: '0117',
    });
  });
});
