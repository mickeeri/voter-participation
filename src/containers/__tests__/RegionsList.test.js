import React from 'react';
import { shallow } from 'enzyme';
import RegionsList from '../RegionsList';
import { fetchRegions } from '../../services/api';

jest.mock('../../services/api');

it('renders without crashing', () => {
  shallow(<RegionsList />);
});

// it('should call fetchRegions on mount', () => {
//   shallow(<RegionsList />);
//   expect(fetchRegions).toHaveBeenCalled();
// });

// it('fetchRegions should set isFetching to false when done', async () => {
//   const list = shallow(<RegionsList />);
//   await fetchRegions();
//   expect(list.state().isFetching).toEqual(false);
// });
