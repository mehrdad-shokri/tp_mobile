import React from 'react';
import {BackHandler} from 'react-native';

class BackHandlerHOC extends React.Component {
    _didFocusSubscription;
    _willBlurSubscription;

    constructor(props) {
        super(props);
        this.state = {
            lastBackPressedTimeStamp: null
        };
        this._didFocusSubscription = props.navigation.addListener('didFocus', payload =>
            BackHandler.addEventListener('hardwareBackPress', this.onBackButtonPressAndroid)
        );
    }
    componentDidMount() {
        this._willBlurSubscription = this.props.navigation.addListener('willBlur', payload =>
            BackHandler.removeEventListener('hardwareBackPress', this.onBackButtonPressAndroid)
        );
    }
    componentWillUnmount() {
        this._didFocusSubscription && this._didFocusSubscription.remove();
        this._willBlurSubscription && this._willBlurSubscription.remove();
    }

    onBackButtonPressAndroid = () => {
        const {navigation} = this.props;
        console.log(new Date().getTime() - this.state.lastBackPressedTimeStamp);
        if(this.state.lastBackPressedTimeStamp && (new Date().getTime() - this.state.lastBackPressedTimeStamp < 5000)){
            return false;
        }
        this.setState({lastBackPressedTimeStamp: new Date().getTime()});
        switch (navigation.state.key) {
            case 'Welcome':
                this.props.navigation.navigate('HOF');
                return true;
            case 'HOF':
                this.props.navigation.navigate('Welcome');
                return true;
            default:
                return false
        }
    };

}

export default BackHandlerHOC;
