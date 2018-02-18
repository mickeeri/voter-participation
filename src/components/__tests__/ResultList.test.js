import React from 'react';
import ResultList from '../ResultList';
import { shallow, mount } from 'enzyme';
import ListItem from '../ListItem';

const turnout = {
  regions: {
    ['0014']: 'Upplands Väsby',
    ['0115']: 'Vallentuna',
    ['0117']: 'Österåker',
  },
  years: ['2014', '2010', '2006'],
  results: {
    ['2014']: [{ region: '0014', value: '99.2' }],
    ['2010']: [{ region: '0015', value: '99.8' }],
    ['2006']: [
      { region: '0014', value: '96.2' },
      { region: '0115', value: '96.2' },
    ],
  },
};

it('should contain one row per year', () => {
  const list = shallow(<ResultList turnout={turnout} />);
  expect(list.children().length).toBe(turnout.years.length);
});

it('each row should show year, region and value', () => {
  const list = mount(<ResultList turnout={turnout} />);

  expect(
    list
      .find(ListItem)
      .first()
      .text()
  ).toBe('2014Upplands Väsby 99.2%');
});

it('should be able to render multiple regions on same year', () => {
  const list = mount(<ResultList turnout={turnout} />);
  const lastRow = list
    .find(ListItem)
    .last()
    .text();

  expect(lastRow).toContain('Upplands Väsby');
  expect(lastRow).toContain('Vallentuna');
});
