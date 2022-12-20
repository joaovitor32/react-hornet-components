import React from 'react';

import { Meta, Story } from '@storybook/react';

import Button from '.';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

const Template: Story<any> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  palette: {
    primary: '#D1E9FC',
    secondary: '#091A7A',
    tertiary: '#061B64',
  },
  size: {
    height: '40px',
    width: '160px',
  },

  spinnerSize: {
    height: '28px',
    width: '28px',
  },

  spinnerPalette: {
    primary: 'white',
    secondary: '#091A7A',
    tertiary: '#061B64',
  },

  title: 'Teste',
};
