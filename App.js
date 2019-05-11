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
import { Button, ListItem,SearchBar } from 'react-native-elements';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { Appbar, Checkbox, FAB } from 'react-native-paper';

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
        flexDirection: 'row',
        paddingRight: 10,
    },
    subtitleText: {
        margin:10,
        color: 'white',
        backgroundColor:bloodRed
    },
    titleText: {
        margin:10,
        color: 'white',
        backgroundColor:bloodRed
    }
});

const list = [
    {
        title: 'Appointments',
        contact:'loreum ipsum',
        location: 'Lahore',
        type:'A+'
    },
    {
        title: 'Appointments',
        contact:'loreum ipsum',
        location: 'Lahore',
        type:'A+'
    },
    {
        title: 'Appointments',
        contact:'loreum ipsum',
        location: 'Lahore',
        type:'A+'
    },
    {
        title: 'Appointments',
        contact:'loreum ipsum',
        location: 'Lahore',
        type:'A+'
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
                    <Button buttonStyle={styles.button}
                            title="Log in"
                            onPress={() => this.props.navigation.navigate('Home')}/>

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
                    <Appbar.Action
                        icon='person'
                        onPress={() => console.log('Pressed archive')}
                        style={{ alignSelf: 'center' }}
                    />
                    <Appbar.Action
                        icon='launch'
                        onPress={() => console.log('Pressed archive')}
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
                    cancelIcon={{color:'white'}}
                />
                <FAB
                    style={styles.fab}
                    icon="add"
                    onPress={() => console.log('Pressed')}
                />
                {
                    list.map((item, i) => (
                        <ListItem
                            key={i}
                            title={item.title}
                            subtitle={
                                <View style={styles.subtitleView}>
                                    <Text style={styles.subtitleText}>{item.contact}</Text>
                                    <Text style={styles.subtitleText}>{item.location}</Text>
                                    <Text style={styles.subtitleText}>{item.type}</Text>
                                </View>
                            }
                        />
                    ))
                }
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
        initialRouteName: 'Splash',
    }
);

const App = createAppContainer(AppNavigator);
export default App;
