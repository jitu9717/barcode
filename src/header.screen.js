import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, AsyncStorage } from 'react-native';

const STORAGE_LOGIN = '@BarCode:login';

export default class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showSignOut:false,
            user:'Guest'
        }
    }

    async logOut() {
        try {
            await AsyncStorage.removeItem(STORAGE_LOGIN);
            this.setState({showSignOut:false,user:'Guest'});
        } catch (error) {
            console.log("Error",error.message);
        }
    }

    async componentDidMount() {
        console.log('componentDidMount called Header');
        try {
            let login = await AsyncStorage.getItem(STORAGE_LOGIN);
            if (login !== null){
                let userDetail = JSON.parse(login);

                if(userDetail && userDetail.loggedIn){
                    const user = userDetail.name && userDetail.name.split(' ')[0];
                    this.setState({showSignOut:true,user:user});

                }
            }
        } catch (error) {
            console.log("Error at Initial Load",error);
        }
    }

    render() {
        const { navigate } = this.props.navigation;
        //console.log("Props",this.props);
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Welcome, {this.state.user}</Text>
                { this.state.showSignOut ?
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText} onPress={() => this.logOut()}>Sign out</Text>
                    </TouchableOpacity> : null
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
        justifyContent:'flex-end',
        marginBottom:-40
    },
    text: {
        color: 'black',
        marginRight:10
    },
    button:{
        width: 100,
        height: 20,
        backgroundColor: '#4197f4',
        alignItems: 'center',
        justifyContent: 'flex-end',
        borderRadius: 10,
        marginLeft:10
    },
    buttonText: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 15,
    }
});
