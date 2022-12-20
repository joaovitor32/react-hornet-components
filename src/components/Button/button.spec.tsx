import React from 'react';

import '@testing-library/jest-dom';

import { render } from '@testing-library/react';

import Button from '.';

describe('<Button />', () => {
  it('should render correctly, --success case', () => {
    const { container } = render(
      <Button
        title=""
        size={{ width: '', height: '' }}
        palette={{ primary: '', secondary: '', tertiary: '' }}
        spinnerPalette={{ primary: '', secondary: '', tertiary: '' }}
        spinnerSize={{ width: '', height: '' }}
      />
    );

    expect(container.querySelector('button')).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
