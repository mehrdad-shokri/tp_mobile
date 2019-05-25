import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {FAB} from 'react-native-paper';
import i18n from 'i18n-js';
import TabBarIcon from "../../components/TabBarIcon";

export default class Tasks extends React.Component {
    static navigationOptions = {
        tabBarIcon: TabBarIcon('check')
    };

    render() {
        return (
            <View style={styles.container}>
                <FAB
                    style={styles.fab}
                    small
                    icon="add"
                    onPress={() => console.log('Pressed')}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
    }
});
