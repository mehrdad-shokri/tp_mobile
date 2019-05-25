import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import i18n from 'i18n-js';
import TabBarIcon from "../../components/TabBarIcon";
import {randomShuffle, seeder} from '../../utils/shuffle';

export default class Tasks extends React.Component {
    gifsIndexReference = [1, 2, 3, 4, 5];
    state = {
        inputValue: '1',
        gifPathIndex: 1,
        gifSource: require('../../assets/gifs/1.gif'),
    };


    componentDidMount() {
        setInterval(() => {
            this.setState({gifPathIndex: (this.state.gifPathIndex % 5) + 1}, () => {
                this.setState({
                    gifSource: (()=>{
                        /*DYNAMIC REQUIRE STATEMENT DECLARATION DOES NOT WORK WTH IMAGE INPUT*/
                        switch (this.state.gifPathIndex) {
                            case 1:
                                return require('../../assets/gifs/1.gif');
                            case 2:
                                return require('../../assets/gifs/2.gif');
                            case 3:
                                return require('../../assets/gifs/3.gif');
                            case 4:
                                return require('../../assets/gifs/4.gif');
                            case 5:
                                return require('../../assets/gifs/5.gif')
                        }
                    })(),
                })
            });
        }, 5000);
    }


    static navigationOptions = {
        tabBarIcon: TabBarIcon('check')
    };

    onSaveButtonPressed = () => {
        console.log('save pressed', seeder);
        console.log('2');
        // const seeder = seeder();
        // seeder.set(this.gifsIndexReference.length);
        // console.log('result', randomShuffle(this.gifsIndexReference, seeder.get()));
        // console.log('result', randomShuffle(this.gifsIndexReference, seeder.get()));
    };

    onTextInputChange = (value) => {
        this.setState({inputValue: value})
    };

    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Image source={this.state.gifSource}/>
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
