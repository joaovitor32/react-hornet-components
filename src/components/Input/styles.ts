import styled, { css, SimpleInterpolation } from 'styled-components';

import { Palette, Dimension } from '../../types';

interface DivsxProps {
  palette: Palette;
  dimensions: Dimension;
  sx?: SimpleInterpolation;
}

const Container = styled.div<DivsxProps>`
  position: relative;

  ${(props) =>
    css`
      width: ${props.dimensions.width};
      height: ${props.dimensions.height};
    `};

  label {
    position: absolute;
    font-family: inherit;
    font-size: 1rem;
    font-weight: 400;
    line-height: inherit;
    left: 8px;
    top: 12px;
    padding: 0px 4px 0px 0px;
    transition: all 0.3s ease;

    ${(props) =>
      css`
        color: ${props.palette.primary};
        background: ${props.palette.tertiary};
      `};
  }

  input {
    outline: none;
    position: absolute;
    font-family: inherit;
    font-size: 16px;
    font-weight: 400;
    line-height: inherit;
    top: 0;
    left: 0;
    z-index: 1;
    resize: none;
    width: 100%;
    height: auto;
    padding: 12px 16px;
    border-radius: 4px;
    background: transparent;
    transition: all 0.2s ease-in-out;

    ${(props) =>
      css`
        border: 1px solid ${props.palette.primary};
        color: ${props.palette.primary};
      `};

    &::placeholder {
      opacity: 0;
      visibility: hidden;
      color: transparent;
    }

    &:focus {
      outline: none;

      ${(props) =>
        css`
          border: 1px solid ${props.palette.secondary};
          color: ${props.palette.secondary};
        `};

      & ~ label {
        padding-left: 4px;
        top: -6px;
        left: 8px;
        z-index: 5;
        font-size: 12px;
        font-weight: 500;
        transition: all 0.3s ease-in-out;

        ${(props) =>
          css`
            color: ${props.palette.secondary};
          `};
      }
    }

    &:not(:placeholder-shown) {
      outline: none;
      &:not(:focus) {
        & ~ label {
          padding-left: 4px;
          left: 8px;
          top: -6px;
          z-index: 12;
          font-size: 12px;
          font-weight: 300;
          transition: all 0.3s ease-in-out;
        }
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
