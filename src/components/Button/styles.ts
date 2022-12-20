import styled, { css } from 'styled-components';

import { Palette, Dimension } from '../../types';

interface ButtonsxProps {
  palette: Palette;
  size: Dimension;
}

const Container = styled.button<ButtonsxProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 4px;

  font-weight: bold;
  -webkit-transition: ease-out 0.5s;
  -moz-transition: ease-out 0.5s;
  transition: ease-out 0.5s;
  outline: 0;

  ${(props) =>
    css`
      border: 1px solid ${props.palette.secondary};
      color: ${props.palette.tertiary};
      width: ${props.size.width};
      height: ${props.size.height};
      box-shadow: inset 0 0 0 0 ${props.palette.primary};
    `};

  &:hover {
    ${(props) =>
      css`
        color: ${props.palette.primary};
        border: 1px solid ${props.palette.secondary};
        box-shadow: inset ${props.size.width} 0 0 0 ${props.palette.secondary};
      `};
  }
`;

export { Container };
