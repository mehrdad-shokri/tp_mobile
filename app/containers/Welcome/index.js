import React from 'react';
import {StyleSheet, View, Image, BackHandler} from 'react-native';
import {Button, TextInput, Snackbar} from 'react-native-paper';
import i18n from 'i18n-js';
import TabBarIcon from "../../components/TabBarIcon";

const shuffleSeed = require('shuffle-seed');


export default class Tasks extends React.Component {
    static navigationOptions = {
        tabBarIcon: TabBarIcon('home')
    };

    gifsArrayReference = [1, 2, 3, 4, 5];

    images =  {
        '1': require('../../assets/gifs/1.gif'),
        '2': require('../../assets/gifs/2.gif'),
        '3': require('../../assets/gifs/3.gif'),
        '4': require('../../assets/gifs/4.gif'),
        '5': require('../../assets/gifs/5.gif'),
    };

    state = {
        gifsArray: [1, 2, 3, 4, 5],
        currentGifIndex: 0,
        inputValue: '1',
        showInputValueError: false
    };

    componentDidMount() {
        setInterval(() => {
            this.setState({currentGifIndex: (++this.state.currentGifIndex % 5)});
        }, 5000);
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
    }

    componentWillUnmount(){
        BackHandler.removeEventListener('hardwareBackPress')
    }

    handleBackButton = ()=>{
        console.log('on back press', this.props);
        this.props.navigation.navigate('HOF');
        return true;
    };

    onSaveButtonPressed = () => {
        if(!this.state.inputValue)
        {
            this.setState({showInputValueError: true});
            return;
        }
        this.shuffleArray(Number(this.state.inputValue));

    };

    onRandomisePressed = () => {
        const randomNumber = parseInt(Math.random() * 9 + 1);
        this.shuffleArray(randomNumber);
    };
    shuffleArray = (input) => {
        const shuffled = shuffleSeed.shuffle(this.gifsArrayReference, input);
        this.setState({gifsArray: shuffled, currentGifIndex: 0})
    };

    onTextInputChange = (value) => {
        this.setState({inputValue: value})
    };

    onInputValueErrorSnackbarDismiss = () => (this.setState({showInputValueError: false}));

    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Image source={this.images[this.state.gifsArray[this.state.currentGifIndex]]}/>
                </View>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.textInput} multiline={false}
                               onChangeText={this.onTextInputChange}
                               value={this.state.inputValue}
                               keyboardType={'numeric'}
                               placeholder={i18n.t('welcome.inputPlaceholder')} mode={'outlined'}/>
                </View>

                <View style={styles.inputContainer}>
                    <Button style={styles.buttons} mode={'contained'} color={'white'}
                            onPress={this.onSaveButtonPressed}>{i18n.t('welcome.save')}</Button>
                    <Button style={styles.buttons} mode={'contained'} color={'orange'} onPress={this.onRandomisePressed}>{i18n.t('welcome.randomise')}</Button>
                </View>
                <Snackbar visible={this.state.showInputValueError} onDismiss={this.onInputValueErrorSnackbarDismiss} >
                    {i18n.t('welcome.inputValueRequired')}
                </Snackbar>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    inputContainer: {
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: 15,
        marginTop: 15,
    },
    textInput: {
        flex: 1
    },
    buttons: {
        flex: .4
    }
});
