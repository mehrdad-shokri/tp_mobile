import React from 'react';
import {BackHandler, Text, View, StyleSheet, FlatList, Image} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Appbar} from 'react-native-paper';
import TabBarIcon from '../../components/TabBarIcon';
import BackHandlerHOC from '../BackHandlerHOC';
import i18n from 'i18n-js';
import {fetchActorsListRequest} from "../../store/action/hof";

class HOF extends BackHandlerHOC {
    static navigationOptions = {
        tabBarIcon: TabBarIcon('list')
    };

    componentDidMount() {
        this.props.fetchActorsList();
    }

    render() {
        return (
            <View>
                <Appbar>
                    <Text style={styles.appBarTitle}>{i18n.t('hof.title')}</Text>
                </Appbar>
                {this.props.loading ? <ActivityIndicator /> : null}
                <FlatList data={this.props.actors}
                          renderItem={({item})=> {
                              return (
                                  <View style={styles.actorsListItem}>
                                      <Image style={styles.actorImage} source={{uri: item.url}}/>
                                  </View>
                              )
                          }}/>
            </View>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchActorsList: fetchActorsListRequest }, dispatch);
}

function mapStateToProps(state) {
    const {hof} = state;
    return { actors: hof.actorsList, loading: hof.loading }
}

const styles  = StyleSheet.create({
    appBarTitle: {
        color: 'white',
        fontSize: 18
    },
    actorImage: {
        width: '100%',
        minHeight: 300
    },
    actorsListItem: {
        marginTop: 10,
        marginBottom: 10
    }
});


export default connect(mapStateToProps, mapDispatchToProps)(HOF);
