import React from 'react';
import {Provider as StoreProvider} from 'react-redux';
import {Provider as PaperProvider} from 'react-native-paper';
import initialiseStore from './store/config/index';
import theme from './utils/theme';
import App from './containers/App'
const store = initialiseStore();

export default () => (
    <StoreProvider store={store}>
        <PaperProvider theme={theme}>
            <App/>
        </PaperProvider>
    </StoreProvider>
);
