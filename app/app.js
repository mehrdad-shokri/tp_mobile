import React from 'react';
import {Provider as StoreProvider} from 'react-redux';
import {Provider as PaperProvider} from 'react-native-paper';
import initialiseStore from './store/config/index';
import App from './containers/App';
import theme from './utils/theme';
const store = initialiseStore();


export default () => (
    <StoreProvider store={store}>
        <PaperProvider theme={theme}>
            <App/>
        </PaperProvider>
    </StoreProvider>
);
