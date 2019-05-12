/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
    FlatList,
    Image,
    StyleSheet,
    Text,
    TextInput,
    View,
} from 'react-native';
import RadioForm from 'react-native-simple-radio-button';
import { Button, SearchBar } from 'react-native-elements';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { Appbar, Checkbox, FAB } from 'react-native-paper';

const bloodRed = '#D23E3E';
const bloodRedBackground = 'rgba(210, 62, 62,0.1)';

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
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
        backgroundColor: bloodRed,
    },
    searchContainer: {
        backgroundColor: 'transparent',
        borderBottomColor: 'transparent',
        borderTopColor: 'transparent',
    },
    appBar: {
        backgroundColor: bloodRed,
        justifyContent: 'flex-end',
    },
    subtitleView: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'stretch',
        marginTop: 10,
        marginBottom: 10,
    },
    subtitleText: {
        flex:1,
        textAlign:'center',
        marginRight: 10,
        color: 'white',
        backgroundColor: bloodRed,
        padding:5,
    },
    listView: {
        backgroundColor: bloodRedBackground,
        margin: 10,
        padding: 10,
    },
    titleText: {
        color: bloodRed,
        fontSize:20,
    },
});

const list = [
    {
        key: '1',
        name: 'Usama Khalid',
        contact: '0335-2437814',
        location: 'Lahore',
        type: 'A+',
    },
    {
        key: '2',
        name: 'Usama Khalid',
        contact: '0335-2437814',
        location: 'Lahore',
        type: 'A+',
    },
    {
        key: '3',
        name: 'Usama Khalid',
        contact: '0335-2437814',
        location: 'Lahore',
        type: 'A+',
    },
    {
        key: '4',
        name: 'Usama Khalid',
        contact: '0335-2437814',
        location: 'Lahore',
        type: 'A+',
    },
    {
        key: '5',
        name: 'Usama Khalid',
        contact: '0335-2437814',
        location: 'Lahore',
        type: 'A+',
    },
    {
        key: '6',
        name: 'Usama Khalid',
        contact: '0335-2437814',
        location: 'Lahore',
        type: 'A+',
    },
    {
        key: '7',
        name: 'Usama Khalid',
        contact: '0335-2437814',
        location: 'Lahore',
        type: 'A+',
    },
];

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
                    source={require('./assets/logo_subtitle.png')}
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
                    source={require('./assets/logo.png')}
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
                    <Button
                        buttonStyle={styles.button}
                        title="Log in"
                        onPress={() => this.props.navigation.navigate('Home')}
                    />

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
    { label: 'Individual', value: 1 },
    { label: 'Organization', value: 0 },
];

class RegisterScreen extends Component {
    state = {
        checked: false,
    };
    render() {
        const { checked } = this.state;
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
                <View style={{ flexDirection: 'row' }}>
                    <Checkbox
                        status={checked ? 'checked' : 'unchecked'}
                        onPress={() => {
                            this.setState({ checked: !checked });
                        }}
                        color={bloodRed}
                    />
                    <Text style={{ marginTop: 6, color: bloodRed }}>
                        {' '}
                        By registering, you agree to our{' '}
                    </Text>
                    <Text
                        style={{
                            marginTop: 6,
                            color: bloodRed,
                            textDecorationLine: 'underline',
                            fontWeight: 'bold',
                        }}>
                        Terms of use
                    </Text>
                </View>
                <Button
                    buttonStyle={[styles.button, { marginBottom: 80 }]}
                    title="Create Account"
                    onPress={() => this.props.navigation.navigate('Home')}
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

class HomeScreen extends Component {
    state = {
        firstQuery: '',
    };
    render() {
        const { firstQuery } = this.state;
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: 'flex-start',
                    alignItems: 'stretch',
                }}>
                <Appbar style={styles.appBar}>
                    <Appbar.Content title="Blood Bucket" />
                    <Appbar.Action
                        icon="launch"
                        onPress={() => this.props.navigation.navigate('SignIn')}
                    />
                </Appbar>
                <SearchBar
                    placeholder="Search"
                    onChangeText={query => {
                        this.setState({ firstQuery: query });
                    }}
                    value={firstQuery}
                    lightTheme={true}
                    containerStyle={styles.searchContainer}
                    inputContainerStyle={{ backgroundColor: bloodRed, borderRadius: 20 }}
                    inputStyle={{ color: 'white' }}
                    placeholderTextColor="white"
                    searchIcon={{ color: 'white' }}
                    cancelIcon={{ color: 'white' }}
                />
                <FAB
                    style={styles.fab}
                    icon="add"
                    onPress={() => console.log('Pressed')}
                />
                <FlatList
                    style={{ padding: 10 }}
                    data={list}
                    renderItem={({ item }) => (
                        <View style={styles.listView}>
                            <Text style={styles.titleText}>{item.name}</Text>
                            <View style={styles.subtitleView}>
                                <Text style={styles.subtitleText}>{item.contact}</Text>
                                <Text style={styles.subtitleText}>{item.location}</Text>
                                <Text style={styles.subtitleText}>{item.type}</Text>
                            </View>
                        </View>
                    )}
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
        Home: {
            screen: HomeScreen,
            navigationOptions: { header: null },
        },
    },
    {
        initialRouteName: 'Home',
    }
);

const App = createAppContainer(AppNavigator);
export default App;
