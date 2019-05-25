import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import i18n from 'i18n-js';
import TabBarIcon from "../../components/TabBarIcon";

const shuffleSeed = require('shuffle-seed');

export default class Tasks extends React.Component {
    state = {
        gifsArray: [1, 2, 3, 4, 5],
        currentGifIndex: 1,
        inputValue: '1',
    };


    componentDidMount() {
        setInterval(() => {
            this.setState({currentGifIndex: (this.state.currentGifIndex % 5) + 1});
        }, 5000);
    }


    static navigationOptions = {
        tabBarIcon: TabBarIcon('check')
    };

    onSaveButtonPressed = () => {
        //shuffle array
        const shuffled = shuffleSeed.shuffle(this.state.gifsArray, this.state.inputValue);
        console.log('result', shuffled);
        this.setState({gifArray: shuffled})
    };

    onTextInputChange = (value) => {
        this.setState({inputValue: value})
    };

    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Image source={require(`../../assets/gifs/${this.state.currentGifIndex}`)}/>
                </View>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.textInput} multiline={false}
                               onChangeText={this.onTextInputChange}
                               value={this.state.inputValue}
                               keyboardType={'numeric'}
                               placeholder={'Enter a number'} mode={'outlined'}/>
                </View>

                <View style={styles.inputContainer}>
                    <Button style={styles.buttons} mode={'contained'} color={'white'}
                            onPress={this.onSaveButtonPressed}> Save</Button>
                    <Button style={styles.buttons} mode={'contained'} color={'orange'}>Randomise</Button>
                </View>
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
