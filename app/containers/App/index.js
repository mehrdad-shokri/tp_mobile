import React from 'react';
import {StyleSheet} from 'react-native'
import {createAppContainer} from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import i18n from 'i18n-js';
import Tasks from '../Tasks';
import Settings from '../Settings';
import setupIntl from "../../utils/i18n";
import en from "../../../translations/en";
import fa from "../../../translations/fa";

setupIntl({en, fa});
const bottomTabBarNavigator = createMaterialBottomTabNavigator({
    [i18n.t('navigation.tasks')]: Tasks,
    [i18n.t('navigation.settings')]: Settings
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

export default createAppContainer(bottomTabBarNavigator)
