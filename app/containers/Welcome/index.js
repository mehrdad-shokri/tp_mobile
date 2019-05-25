import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import i18n from 'i18n-js';
import TabBarIcon from "../../components/TabBarIcon";

export default class Tasks extends React.Component {
    state = {
        inputValue: null
    };

    static navigationOptions = {
        tabBarIcon: TabBarIcon('check')
    };

    shuffleArray = () => {

    };

    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Image source={require('../../assets/gifs/2.gif')} />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.textInput} multiline={false} onChangeText={(value)=> this.setState({inputValue: value})} placeholder={'Enter a number'}  mode={'outlined'}/>
                </View>

                <View style={styles.inputContainer}>
                    <Button style={styles.buttons} mode={'contained'} color={'white'} onPress={this.shuffleArray}> Save</Button>
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
