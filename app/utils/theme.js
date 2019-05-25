import {DefaultTheme} from 'react-native-paper';

function configureTheme() {
  return {
    ...DefaultTheme,
    // roundness: 2,
    colors: {
      ...DefaultTheme.colors,
      primary: '#3498db',
      accent: '#f1c40f',
    },
  };
}

export default configureTheme();
