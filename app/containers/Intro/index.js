import React from 'react';
import {View, Text, Image} from 'react-native'
import AppIntroSlider from 'react-native-app-intro-slider';
import App from '../App';

const slides = [
    {
        key: 'somethun',
        title: 'Title 1',
        text: 'Description.\nSay something cool',
        image: require('./assets/1.jpg'),
        backgroundColor: '#59b2ab',
    },
    {
        key: 'somethun-dos',
        title: 'Title 2',
        text: 'Other cool stuff',
        image: require('./assets/2.jpg'),
        backgroundColor: '#febe29',
    },
    {
        key: 'somethun1',
        title: 'Rocket guy',
        text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
        image: require('./assets/3.jpg'),
        backgroundColor: '#22bcb5',
    }
];

class Intro extends React.Component {
    state = {
        showRealApp: false
    };

    _renderItem = (item) => {
        return (
            <View style={styles.slide}>
                <Text style={styles.title}>{item.title}</Text>
                <Image source={item.image} />
                <Text style={style.text}>{item.text}</Text>
            </View>
        );
    };
    _onDone = () => {
        this.setState({ showRealApp: true });
    };
    render() {
        if (this.state.showRealApp) {
            return <App />;
        } else {
            return <AppIntroSlider renderItem={this._renderItem} slides={slides} onDone={this._onDone}/>;
        }
    }
}

export default Intro;
