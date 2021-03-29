import * as Gatsby from 'gatsby';
import React from 'react';
import renderer from 'react-test-renderer';

import Home from '../index';

describe('Homepage', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly', () => {
    const useStaticQuery = jest.spyOn(Gatsby, 'useStaticQuery');
    useStaticQuery.mockImplementation(() => ({
      site: {
        siteMetadata: {
          author: 'Barthap',
          description: 'My description',
          title: 'My Title',
        },
      },
    }));

    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
