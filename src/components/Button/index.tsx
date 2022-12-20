import React, { useRef } from 'react';

import { useHover } from '../../hooks/useHover';

import { ButtonProps, Palette, Dimension, SpinnerStyle } from '../../types';
import Spinner from '../Spinner';

import { Container } from './styles';

const styles = {
  spinner: ({ isHovered, palette, size }: SpinnerStyle) => ({
    '-webkit-transition': 'box-shadow 0.55s ease-out',
    '-moz-transition': 'box-shadow 0.55s ease-out',
    '-o-transition': 'box-shadow 0.55s ease-out',
    transition: 'box-shadow 0.55s ease-out',
    'box-shadow': `inset ${isHovered ? size.width : 0} 0 0 0 ${isHovered ? palette.secondary : palette.primary}`,

    '& > div': {
      'border-color': `${isHovered ? palette.primary : palette.secondary} transparent transparent transparent`,
    },
  }),
};

const Button: React.FC<ButtonProps<Palette, Dimension>> = ({
  isLoading = false,
  title,
  palette,
  size,
  spinnerPalette,
  spinnerSize,
  sx,
  ...rest
}) => {
  const hoverRef = useRef(null);
  const isHovered = useHover(hoverRef);

  return (
    <Container ref={hoverRef} palette={palette} size={size} {...rest}>
      {!isLoading ? (
        title
      ) : (
        <Spinner
          sx={styles.spinner({ isHovered, palette: spinnerPalette, size: spinnerSize })}
          palette={spinnerPalette}
          size={spinnerSize}
        />
      )}
    </Container>
  );
};

export default Button;
