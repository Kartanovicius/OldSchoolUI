declare module '@emotion/react' {
  export interface Theme {
    palette: {
      common: { black: string; white: string }
      primary: { main: string; light: string; contrastText: string }
      surface: { main: string; light: string; hover: string; contrastText: string }
      error: { main: string; light: string; contrastText: string }
      text: { main: string; disabled: string; link: string }
      grey: {
        50: string
        100: string
        200: string
        300: string
        400: string
        500: string
        600: string
        700: string
        800: string
        900: string
      }
      blue: {
        50: string
        100: string
        200: string
        300: string
        400: string
        500: string
        600: string
        700: string
        800: string
        900: string
      }
      red: {
        50: string
        100: string
        200: string
        300: string
        400: string
        500: string
        600: string
        700: string
        800: string
        900: string
      }
      green: {
        50: string
        100: string
        200: string
        300: string
        400: string
        500: string
        600: string
        700: string
        800: string
        900: string
      }
      orange: {
        50: string
        100: string
        200: string
        300: string
        400: string
        500: string
        600: string
        700: string
        800: string
        900: string
      }
      yellow: {
        50: string
        100: string
        200: string
        300: string
        400: string
        500: string
        600: string
        700: string
        800: string
        900: string
      }
    }
    typography: {
      fontFamily: string
    }
  }
}
