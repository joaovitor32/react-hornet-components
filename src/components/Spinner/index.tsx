import * as React from 'react';

import { Palette, Dimension, SpinnerProps } from '../../types';

import { Container } from './styles';

const Spinner = ({ palette, size, sx }: SpinnerProps<Palette, Dimension>) => (
  <Container palette={palette} size={size} sx={sx}>
    <div />
    <div />
    <div />
  </Container>
);

export default Spinner;
