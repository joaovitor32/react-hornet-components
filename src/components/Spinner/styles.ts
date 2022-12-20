import styled, { css } from 'styled-components';

import { Palette, Dimension, SpinnerProps } from '../../types';

type SpinnerType = SpinnerProps<Palette, Dimension>;

const Container = styled.div<SpinnerType>`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  position: relative;

  ${(props) =>
    css`
      width: ${props.size.width};
      height: ${props.size.height};
      background-color: ${props.palette.primary};
    `};

  & > div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 80%;
    height: 80%;
    margin: 8px;

    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;

    ${(props) =>
      !!props.palette &&
      css`
        border: 4px solid ${props.palette.secondary};
        border-color: ${props.palette.secondary} transparent transparent transparent;
      `};

    :nth-child(1) {
      animation-delay: -0.45s;
    }

    :nth-child(2) {
      animation-delay: -0.3s;
    }

    :nth-child(3) {
      animation-delay: -0.15s;
    }

    @keyframes lds-ring {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }

  ${({ sx }) =>
    !!sx &&
    css`
      ${sx}
    `}
`;

export { Container };
