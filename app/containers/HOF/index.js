import React from 'react';
import {BackHandler, Text, View} from 'react-native';
import TabBarIcon from '../../components/TabBarIcon';

export default class HOF extends React.Component {
    static navigationOptions = {
        tabBarIcon: TabBarIcon('emotsmile')
    };

    constructor(props) {
        super(props);
        this._didFocusSubscription = props.navigation.addListener('didFocus', payload =>
            BackHandler.addEventListener('hardwareBackPress', this.onBackButtonPressAndroid)
        );
    }

    componentDidMount() {
        this._willBlurSubscription = this.props.navigation.addListener('willBlur', payload =>
            BackHandler.removeEventListener('hardwareBackPress', this.onBackButtonPressAndroid)
        );
    }

    onBackButtonPressAndroid = () => {
        this.props.navigation.navigate('Welcome');
        return true;
    };

    componentWillUnmount() {
        this._didFocusSubscription && this._didFocusSubscription.remove();
        this._willBlurSubscription && this._willBlurSubscription.remove();
    }

    render() {
        return (
            <View>
                <Text>HOF goes here</Text>
            </View>
        )
    }
}
