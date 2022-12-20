import React from 'react';

import { Meta, Story } from '@storybook/react';

import Input from '.';

export default {
  title: 'Components/Input',
  component: Input,
} as Meta;

const Template: Story<any> = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  palette: {
    primary: 'green',
    secondary: 'purple',
    tertiary: 'white',
  },
  dimensions: {
    height: '24px',
    width: '240px',
  },
  label: 'texto input',
  name: 'texto input',
  placeholder: 'none',
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => console.log(e),
};
