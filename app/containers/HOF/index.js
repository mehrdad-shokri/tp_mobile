import React from 'react';
import {BackHandler, Text, View} from 'react-native';
import {NavigationActions} from 'react-navigation';
import TabBarIcon from '../../components/TabBarIcon';

export default class HOF extends React.Component {
    static navigationOptions = {
        tabBarIcon: TabBarIcon('settings')
    };

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress');
    }

    handleBackButton = () => {
        console.log('on back press', this.props.navigation);
        this.props.navigation.navigate('HOF');
        return true;
    };

    render() {
        return (
            <View>
                <Text>HOF goes here</Text>
            </View>
        )
    }
}
