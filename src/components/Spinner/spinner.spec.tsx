import React from 'react';

import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import Spinner from '.';

describe('<Spinner />', () => {
  it('should render correctly, --success case', () => {
    const { container } = render(
      <Spinner size={{ width: '', height: '' }} palette={{ primary: '', secondary: '', tertiary: '' }} />
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
