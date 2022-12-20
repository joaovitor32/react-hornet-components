import React, { InputHTMLAttributes, ButtonHTMLAttributes } from 'react';

import { SimpleInterpolation } from 'styled-components';

export interface Palette {
  primary?: string;
  secondary?: string;
  tertiary?: string;
  error?: string;
}

export interface Dimension {
  width: string;
  height: string;
}

export interface HookColors<T, U> {
  names: T;
  values: U;
}

export interface SpinnerProps<T, U> {
  palette: T;
  size: U;
  sx?: SimpleInterpolation;
}

export interface ButtonProps<T, U> extends ButtonHTMLAttributes<HTMLButtonElement> {
  palette: T;
  size: U;
  title: string;

  spinnerPalette: T;
  spinnerSize: U;

  isLoading?: boolean;
  sx?: SimpleInterpolation;
}

export interface InputProps<T, U> extends InputHTMLAttributes<HTMLInputElement> {
  palette: T;
  dimensions: U;

  label: string;

  sx?: SimpleInterpolation;
}

export interface SpinnerStyle {
  isHovered: boolean;
  palette: Palette;
  size: Dimension;
}
