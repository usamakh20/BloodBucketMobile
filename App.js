/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';
import RadioForm from 'react-native-simple-radio-button';
import { CheckBox, Button } from 'react-native-elements';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';

const bloodRed = '#D23E3E';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    input: {
        backgroundColor: bloodRed,
        color: 'white',
        height: 40,
        padding: 10,
        marginBottom: 10,
    },
    text: {
        fontSize: 14,
        color: bloodRed,
        alignSelf: 'center',
    },
    button: {
        backgroundColor: bloodRed,
        borderRadius: 15,
    },
});

class SplashScreen extends Component {
    constructor(props) {
        super(props);

        setTimeout(() => this.props.navigation.navigate('SignIn'), 1000);
    }
    render() {
        return (
            <View style={styles.container}>
                <Image
                    style={{ height: 300, resizeMode: 'contain' }}
                    source={require('./logo_subtitle.png')}
                />
            </View>
        );
    }
}

class SignInScreen extends Component {
    render() {
        return (
            <View style={[styles.container, { alignItems: 'stretch' }]}>
                <Image
                    style={{ flex: 1, alignSelf: 'center' }}
                    resizeMode="contain"
                    source={require('./logo.png')}
                />
                <View style={[styles.container, { alignItems: 'stretch' }]}>
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
                    <Button buttonStyle={styles.button} title="Log in" />

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
                    buttonStyle={styles.button}
                    title="Register"
                    onPress={() => this.props.navigation.navigate('Register')}
                />
            </View>
        );
    }
}

let radio_props = [
    {label: 'Individual', value: 1},
    {label: 'Organization', value: 0},
];

class RegisterScreen extends Component {
    state = {
        checked: false,
    };
    render() {
        return (
            <View
                style={[
                    styles.container,
                    { alignItems: 'stretch', justifyContent: 'flex-end' },
                ]}>
                <TextInput
                    style={styles.input}
                    placeholder="Full Name"
                    placeholderTextColor="white"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Email or Phonenumber"
                    placeholderTextColor="white"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    placeholderTextColor="white"
                    secureTextEntry={true}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Confirm Password"
                    placeholderTextColor="white"
                    secureTextEntry={true}
                />
                <RadioForm
                    buttonColor={bloodRed}
                    labelColor={bloodRed}
                    selectedButtonColor={bloodRed}
                    radio_props={radio_props}
                    labelStyle={{ marginRight: 15 }}
                    formHorizontal={true}
                    onPress={value => {
                        this.setState({ value: value });
                    }}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Contact no."
                    placeholderTextColor="white"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Address"
                    placeholderTextColor="white"
                />
                <CheckBox
                    title="By registering, you agree to our Terms of use"
                    checked={this.state.checked}
                    onPress={() => this.setState({ checked: !this.state.checked })}
                    textStyle={{ color: bloodRed, fontSize: 13 }}
                    checkedColor={bloodRed}
                />
                <Button
                    buttonStyle={[styles.button, { marginBottom: 40 }]}
                    title="Create Account"
                />

                <Text style={styles.text}>Already have an account ?</Text>

                <Button
                    buttonStyle={styles.button}
                    title="Sign In"
                    onPress={() => this.props.navigation.navigate('SignIn')}
                />
            </View>
        );
    }
}

const AppNavigator = createSwitchNavigator(
    {
        SignIn: {
            screen: SignInScreen,
            navigationOptions: { header: null },
        },
        Register: {
            screen: RegisterScreen,
            navigationOptions: { header: null },
        },
        Splash: {
            screen: SplashScreen,
            navigationOptions: { header: null },
        },
    },
    {
        initialRouteName: 'Splash',
    }
);

const App = createAppContainer(AppNavigator);
export default App;
