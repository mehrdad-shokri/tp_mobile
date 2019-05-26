import React from 'react';
import {StyleSheet} from 'react-native'
import {createAppContainer} from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import i18n from 'i18n-js';
import Welcome from '../Welcome';
import HOF from '../HOF';
import setupIntl from "../../utils/i18n";
import en from "../../../translations/en";
import fa from "../../../translations/fa";

setupIntl({en, fa});
const bottomTabBarNavigator = createMaterialBottomTabNavigator({
    [i18n.t('navigation.welcome')]: Welcome,
    [i18n.t('navigation.hallOfFame')]: HOF
}, {
    shifting: true,
    labeled: true,
    activeColor: '#6200ee',
    inactiveColor: '#828792',
    barStyle: {
        backgroundColor: '#f8f7f9',
        borderTopWidth: StyleSheet.hairlineWidth,
        borderStyle: 'solid',
        borderColor: '#d0cfd0',
    },
});
console.log('bottomTabBarNavigator', bottomTabBarNavigator);



export default createAppContainer(bottomTabBarNavigator)
