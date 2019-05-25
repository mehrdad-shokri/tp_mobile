import React from 'react';
import {Text, View} from 'react-native';
import TabBarIcon from '../../components/TabBarIcon';

export default class Settings extends React.Component {
    static navigationOptions = {
        tabBarIcon: TabBarIcon('settings')
    };

    render(){
        return (
            <View>
                <Text>settings goes here</Text>
            </View>
        )
    }
}
