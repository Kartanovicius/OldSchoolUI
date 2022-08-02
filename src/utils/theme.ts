import { Theme } from '@emotion/react'

const white = '#fff'
const black = '#000'

const palette: Theme['palette'] = {
  common: {
    black,
    white,
  },
  primary: {
    main: '#04008A',
    light: '#4A449D',
    contrastText: '#F8F8F8',
  },
  surface: {
    main: '#BDBDBD',
    light: '#F2F2F2',
    hover: '#CCCCCC',
    contrastText: '#222222',
  },
  error: {
    main: '#b62b28',
    light: '#fad7d6',
    contrastText: white,
  },
  text: {
    main: '#222222',
    disabled: '#a8a8a8',
    link: '#0000FF',
  },
  grey: {
    50: '#F7F7F7',
    100: '#EFEFEF',
    200: '#DFDFDF',
    300: '#cacaca',
    400: '#a8a8a8',
    500: '#878787',
    600: '#6d6d6d',
    700: '#5F5F5F',
    800: '#4A4A4A',
    900: '#3D3D3D',
  },
  blue: {
    50: '#eaeef8',
    100: '#d6ddf1',
    200: '#acbce4',
    300: '#839ad6',
    400: '#5979c9',
    500: '#3057bb',
    600: '#264696',
    700: '#1d3470',
    800: '#13234b',
    900: '#0a1125',
  },
  red: {
    50: '#fcebeb ',
    100: '#fad7d6',
    200: '#f4afad',
    300: '#ef8684',
    400: '#e95e5b',
    500: '#e43632',
    600: '#b62b28',
    700: '#89201e',
    800: '#5b1614',
    900: '#2e0b0a',
  },
  green: {
    50: '#F0F5E7',
    100: '#E2EBCE',
    200: '#C4D79D',
    300: '#A7C26C',
    400: '#89AE3B',
    500: '#6C9A0A',
    600: '#567B08',
    700: '#415C06',
    800: '#2B3E04',
    900: '#161F02',
  },
  orange: {
    50: '#fef1ea',
    100: '#fee3d5',
    200: '#fdc8aa',
    300: '#fbac80',
    400: '#fa9155',
    500: '#f9752b',
    600: '#c75e22',
    700: '#95461a',
    800: '#642f11',
    900: '#321709',
  },
  yellow: {
    50: '#fffee6',
    100: '#fffdcc',
    200: '#fffb99',
    300: '#fffa67',
    400: '#fff834',
    500: '#fff601',
    600: '#ccc501',
    700: '#999401',
    800: '#666200',
    900: '#333100',
  },
}

const typography = {
  fontFamily:
    "'Jost', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Ubuntu, 'Helvetica Neue', sans-serif",
}

export const theme = {
  palette,
  typography,
}
