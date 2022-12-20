import React from 'react';

import { Palette, Dimension, InputProps } from '../../types';

import { Container } from './styles';

const Input: React.FC<InputProps<Palette, Dimension>> = ({ label, name, palette, dimensions, sx, ...rest }) => (
  <Container dimensions={dimensions} palette={palette} sx={sx}>
    <input name={name} {...rest} />
    <label htmlFor={name}>{label}</label>
  </Container>
);

export default Input;
