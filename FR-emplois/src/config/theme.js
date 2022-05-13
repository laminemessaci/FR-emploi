import {DefaultTheme, configureFonts} from 'react-native-paper'

const fontConfig = {
  default: {
    ...DefaultTheme.fonts,
    regular: {
      fontFamily: 'OpenSans-Regular',
      fontWeight: '400',
    },
    medium: {
      fontFamily: 'OpenSans-SemiBold',
      fontWeight: '500',
    },
    light: {
      fontFamily: 'OpenSans-Light',
      fontWeight: '300',
    },
    thin: {
      fontFamily: 'OpenSans-Light',
      fontWeight: '100',
    },
  },
}

export const theme = {
  ...DefaultTheme,
  fonts: configureFonts(fontConfig),
  colors: {
    ...DefaultTheme.colors,
    fadeOut: opacity => `rgba(255,255,255,${opacity})`,
    primary: 'tomato',
    accent: '#86BB24',
    background: '#F5F5F5',
    black: '#000000',
    white: '#FFFFFF',
    yellow: '#FFD400',
    grey: {
      1: '#969696',
      2: '#53555A',
      3: '#63666A',
      4: '#74777A',
      5: '#97999A',
      6: '#A7A7AA',
      7: '#BABBBB',
      8: '#D0D0CD',
    },
    orange: '#F39100',
    red: '#E30512',
    blue: {
      1: '#031E41',
      2: '#012168',
      3: '#005487',
      4: '#0076A7',
      5: '#00A3E0',
      6: '#61B4E4',
      7: '#A0DCFF',
    },
    lightGreen: {
      1: '#004E58',
      2: '#007680',
      3: '#0097A9',
      4: '#6EC1B4',
      5: '#9DD3CE',
      6: '#DDEEE7',
    },
    darkGreen: {
      1: '#2B5134',
      2: '#036A37',
      3: '#009A44',
      4: '#43B02A',
      5: '#86BB24',
      6: '#C4D600',
      7: '#E3E38D',
      8: '#7AB408',
    },
  },
}
