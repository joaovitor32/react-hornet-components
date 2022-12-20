import React from 'react';

import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import Input from '.';

describe('<Input />', () => {
  it('should render correctly, --success case', () => {
    const { container } = render(
      <Input
        title=""
        label="name"
        dimensions={{ width: '', height: '' }}
        palette={{ primary: '', secondary: '', tertiary: '' }}
      />
    );

    expect(container.querySelector('input')).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
