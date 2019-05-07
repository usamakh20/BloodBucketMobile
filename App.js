/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Image, Button, StyleSheet, Text, TextInput, View} from 'react-native';

const bloodRed = 'red';

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        padding: 10
    },
    input: {
        backgroundColor: bloodRed,
        color: 'white',
        height: 40,
        borderRadius:15
    }
});

export default class SignIn extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image
                    style={{width:300,height: 300}}
                    resizeMode="contain"
                    source={require('./logo.png')}
                />
                <TextInput
                    style = {styles.input}
                    placeholder="Email or Username"
                    placeholderTextColor = 'white'/>
                <TextInput
                    style = {styles.input}
                    placeholder="Password"
                    placeholderTextColor = 'white'
                    secureTextEntry={true}/>
                <Button
                    color={bloodRed}
                    title="Log in"
                />

                <Text style={{color: bloodRed}}>Forgot Password?</Text>
                <Text style={{color: bloodRed}}>OR</Text>

                <Button
                    color={bloodRed}
                    title="Register"
                />

            </View>
        );
    }
}