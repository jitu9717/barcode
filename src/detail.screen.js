import React, { Component } from 'react';

import {
    Text,
    View,
    StyleSheet,
    Image
} from 'react-native';

import Header from './header.screen';

export default class Detail extends Component {

    constructor (props) {
        super(props);
    }

    render() {
        const { data }  = this.props.navigation.state.params;
        return (
            <View style={styles.container}>
                <Header navigation = {this.props.navigation}/>
                <View style={{flex: 9}}>
                    <View style={{flex: 8, justifyContent: 'center', alignItems: 'center', borderBottomColor: 'black', borderBottomWidth: 1}}>
                        <Image source={{uri: 'https://sociobiology.files.wordpress.com/2013/07/strassmann-queller-qr-code.jpg'}} style={{width: 180, height: 180}}>
                        </Image>
                        <Text style={{fontSize: 12, fontWeight: '300', marginTop: 10}}>{data.date}</Text>
                        <Text style={{fontSize: 25, fontWeight: 'bold', marginTop: 10}}>{data.title}</Text>
                    </View>
                    <View style={{flex: 5, flexDirection: 'row', marginTop: 10}}>
                        <View style={{flex: 4, alignItems: 'flex-end'}}>
                            <Text style={styles.dataKey}>Name  </Text>
                            <Text style={styles.dataKey}>Email  </Text>
                            <Text style={styles.dataKey}>Company  </Text>
                            <Text style={styles.dataKey}>State  </Text>
                            <Text style={styles.dataKey}>Country  </Text>
                        </View>
                        <View style={{flex: 7}}>
                            <Text style={styles.dataValue}>{data.name}</Text>
                            <Text style={styles.dataValue}>{data.email}</Text>
                            <Text style={styles.dataValue}>{data.company}</Text>
                            <Text style={styles.dataValue}>{data.state}</Text>
                            <Text style={styles.dataValue}>{data.country}</Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ecf0f1'
    },
    header: {
        flex: 1,
        width: '100%',
        backgroundColor: '#f4d942',
        justifyContent: 'center',
        alignItems: 'center'
    },
    dataKey: {
        fontSize: 15,
        marginTop: 10
    },
    dataValue: {
        fontSize: 15,
        fontWeight: 'bold',
        marginTop: 10
    }
});