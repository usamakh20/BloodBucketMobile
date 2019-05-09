/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Image, Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { createStackNavigator, createAppContainer} from 'react-navigation';

const bloodRed = '#D23E3E';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
        padding: 10,
    },
    input: {
        backgroundColor: bloodRed,
        color: 'white',
        height: 40,
        borderRadius: 15,
        padding: 10,
        marginBottom: 10,
    },
    text: {
        color: bloodRed,
        alignSelf: 'center',
        margin: 10,
    },
});

class SignInScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image
                    style={{ flex: 1, alignSelf: 'center' }}
                    resizeMode="contain"
                    source={require('./logo.png')}
                />
                <View style={styles.container}>
                    <TextInput
                        style={styles.input}
                        placeholder="Email or Username"
                        placeholderTextColor="white"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        placeholderTextColor="white"
                        secureTextEntry={true}
                    />
                    <Button color={bloodRed} title="Log in" />

                    <Text
                        style={[
                            styles.text,
                            { fontSize: 15, textDecorationLine: 'underline' },
                        ]}>
                        Forgot Password?
                    </Text>
                </View>

                <Text style={[styles.text, { fontSize: 20 }]}>OR</Text>
                <Button
                    color={bloodRed}
                    title="Register"
                    onPress={() =>
                        this.props.navigation.navigate('Register' )
                    } />
            </View>
        );
    }
}

class RegisterScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Details Screen</Text>
            </View>
        );
    }
}

const AppNavigator = createStackNavigator(
    {
        SignIn: {
            screen: SignInScreen,
            navigationOptions: { header: null }
        },
        Register: {
            screen: RegisterScreen,
            navigationOptions:{ header: null }
        },
    },
    {
        initialRouteName: 'SignIn'
    }
);

const App = createAppContainer(AppNavigator);
export default App;
