import { normalizeRegions } from './index';

const valueTexts = ['Upplands Väsby', 'Vallentuna', 'Österåker'];
const values = ['0014', '0115', '0117'];

const mockVariables = { values, valueTexts };

describe('normalizeRegions', () => {
  it.only('should normalize response', () => {
    expect(normalizeRegions(mockVariables)).toEqual({
      ['0014']: { name: 'Upplands Väsby' },
      ['0115']: { name: 'Vallentuna' },
      ['0117']: { name: 'Österåker' },
    });
  });
});
