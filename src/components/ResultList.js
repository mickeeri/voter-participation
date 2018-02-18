import React from 'react';
import { array, shape, object } from 'prop-types';
import styled from 'styled-components';
import ListItem from './ListItem';
import Tab from './Tab';

const Wrapper = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const Year = styled.strong`
  margin-right: 10px;
`;

const ResultList = ({ turnout: { years, results, regions } }) => {
  function renderItem(year) {
    const yearsResult = results[year];

    return (
      <ListItem key={year}>
        <Year>{year}</Year>
        {yearsResult.map(({ value, region }) => (
          <Tab key={value + region}>
            {regions[region]} {value}%
          </Tab>
        ))}
      </ListItem>
    );
  }

  return (
    <Wrapper id="ResultList">{years.map(year => renderItem(year))}</Wrapper>
  );
};

ResultList.propTypes = {
  turnout: shape({
    regions: object.isRequired,
    years: array.isRequired,
    results: object.isRequired,
  }).isRequired,
};

export default ResultList;
