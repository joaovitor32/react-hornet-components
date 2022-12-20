/* eslint-disable no-restricted-syntax */
import React from 'react';

import { Meta, Story } from '@storybook/react';

import Spinner from '.';

export default {
  title: 'Components/Spinner',
  component: Spinner,
} as Meta;

const Template: Story<any> = (args) => <Spinner {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  palette: {
    primary: 'red',
    secondary: 'blue',
  },
  size: {
    width: '80px',
    height: '80px',
  },
};
