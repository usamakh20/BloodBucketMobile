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
    PushNotificationIOS,
    StyleSheet,
    Text,
    TextInput,
    View,
    Picker,
} from 'react-native';
import RadioForm from 'react-native-simple-radio-button';
import { Button, SearchBar,Slider } from 'react-native-elements';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { Appbar, Checkbox, FAB,TextInput as Input,Dialog, Portal,Provider } from 'react-native-paper';
const PushNotification = require('react-native-push-notification');
const service = require('./service');


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

var list = [
    // {
    //     key: '1',
    //     name: 'Usama Khalid',
    //     phoneNumber: '0335-2437814',
    //     city: 'Lahore',
    //     bloodGroup: [3],
    // },
    // {
    //     key: '2',
    //     name: 'Arslan',
    //     phoneNumber: '0335-2437814',
    //     city: 'Wah Cantt',
    //     bloodGroup: [6],
    // },
    // {
    //     key: '3',
    //     name: 'Ghufran',
    //     phoneNumber: '0335-2437814',
    //     city: 'Quetta',
    //     bloodGroup: [2],
    // },
    // {
    //     key: '4',
    //     name: 'Ibrahim Iskandar',
    //     phoneNumber: '0335-2437814',
    //     city: 'Peshawar',
    //     bloodGroup: [7],
    // },
    // {
    //     key: '5',
    //     name: 'Hakim',
    //     phoneNumber: '0335-2437814',
    //     city: 'Islamabad',
    //     bloodGroup: [5],
    // },
    // {
    //     key: '6',
    //     name: 'Hamid Meer',
    //     phoneNumber: '0335-2437814',
    //     city: 'Lahore',
    //     bloodGroup: [1],
    // },
    // {
    //     key: '7',
    //     name: 'Dalir Daniyal',
    //     phoneNumber: '0335-2437814',
    //     city: 'Karachi',
    //     bloodGroup: [4],
    // },
];

const bloodNumberToGroup = ['Pick a blood group','A+','A-','B+','B-','O+','O-','AB+','AB-'];

PushNotification.configure({

    // (optional) Called when Token is generated (iOS and Android)
    onRegister: function(token) {
        console.log( 'TOKEN:', token );
    },

    // (required) Called when a remote or local notification is opened or received
    onNotification: function(notification) {
        console.log( 'NOTIFICATION:', notification );

        // process the notification

        // required on iOS only (see fetchCompletionHandler docs: https://facebook.github.io/react-native/docs/pushnotificationios.html)
        notification.finish(PushNotificationIOS.FetchResult.NoData);
    },

    // ANDROID ONLY: GCM or FCM Sender ID (product_number) (optional - not required for local notifications, but is need to receive remote push notifications)
    senderID: "YOUR GCM (OR FCM) SENDER ID",

    // IOS ONLY (optional): default: all - Permissions to register.
    permissions: {
        alert: true,
        badge: true,
        sound: true
    },

    // Should the initial notification be popped automatically
    // default: true
    popInitialNotification: true,

    /**
     * (optional) default: true
     * - Specified if permissions (ios) and token (android and ios) will requested or not,
     * - if not, you must call PushNotificationsHandler.requestPermissions() later
     */
    requestPermissions: true,
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
                    source={require('./assets/logo_subtitle.png')}
                />
            </View>
        );
    }
}

class SignInScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phoneNumber: '03345241646',
            password: '123456'
        };
    }

    login = () => {
        let self = this;
        service.post('login',{phoneNumber:this.state.phoneNumber,password:this.state.password}).then(function (data) {
            //do something
            //data will be the  repsone e.g data can be any json
            if (data.message==='success') {
                self.props.navigation.navigate('Home',{token: data.token});
            }
        }).catch((error) => {
            alert(error.message)
        });
    };
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
                        placeholder="Phone Number"
                        placeholderTextColor="white"
                        onChangeText={(phoneNumber) => this.setState({phoneNumber})}
                        value={this.state.phoneNumber}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        placeholderTextColor="white"
                        secureTextEntry={true}
                        onChangeText={(password) => this.setState({password})}
                        value={this.state.password}
                    />
                    <Button
                        buttonStyle={styles.button}
                        title="Log in"
                        onPress={this.login}
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
        name:'',
        phoneNumber:'',
        password:'',
        type:true,
        city:''
    };

    register = () => {
        let self = this;
        service.post('register',{
            name:this.state.name,
            phoneNumber:this.state.phoneNumber,
            password:this.state.password,
            city:this.state.city,
            type:this.state.type
        }).then(function (data) {
            //do something
            //data will be the  repsone e.g data can be any json
            if (data.message==='success') {
                self.props.navigation.navigate('SignIn');
            }
        }).catch((error) => {
            alert(error.message)
        });
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
                    onChangeText={(name) => this.setState({name})}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Phone Number"
                    placeholderTextColor="white"
                    onChangeText={(phoneNumber) => this.setState({phoneNumber})}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    placeholderTextColor="white"
                    secureTextEntry={true}
                    onChangeText={(password) => this.setState({password})}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Confirm Password"
                    placeholderTextColor="white"
                    secureTextEntry={true}
                />
                <RadioForm
                    buttonColor={bloodRed}
                    selectedLabelColor={bloodRed}
                    selectedButtonColor={bloodRed}
                    radio_props={radio_props}
                    labelStyle={{ marginRight: 15 }}
                    formHorizontal={true}
                    onPress={value => {
                        this.setState({ type:value===1 });
                    }}
                />
                <TextInput
                    style={styles.input}
                    placeholder="City"
                    placeholderTextColor="white"
                    onChangeText={(city) => this.setState({city})}
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
                    buttonStyle={[styles.button, { marginBottom: 100 }]}
                    title="Create Account"
                    onPress={this.register}
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
    constructor(props) {
        super(props);

        this.state = {
            firstQuery: '',
            visible:false,
            bloodGroup:0,
            value:1,
            token:'',
            list:[],
        };
        this.state.token = this.props.navigation.state.params.token;

        const self = this;
        service.get('donors',this.state.token).then(function (data) {
            //do something
            //data will be the  repsone e.g data can be any json
            data.forEach(function(element,i) { element.key = i.toString(); });
            self.setState({list:data})
        }).catch((error) => {
            alert(error.message)
        });

        service.get('request',this.state.token).then(function (data) {
            //do something
            //data will be the  repsone e.g data can be any json
            if(data.length!==0)
                PushNotification.localNotification({
                    /* Android Only Properties */
                    id: '0', // (optional) Valid unique 32 bit integer specified as string. default: Autogenerated Unique ID
                    ticker: "My Notification Ticker", // (optional)
                    autoCancel: true, // (optional) default: true
                    largeIcon: "./assets/logo.png", // (optional) default: "ic_launcher"
                    smallIcon: "./assets/logo.png", // (optional) default: "ic_notification" with fallback for "ic_launcher"
                    bigText: 'Your Requested Blood '+bloodNumberToGroup[data[0].bloodGroup[0]]+' is now available available. Please contact: '+ String(data[0].phoneNumber), // (optional) default: "message" prop
                    subText: "This is a subText", // (optional) default: none
                    color: "red", // (optional) default: system default
                    vibrate: true, // (optional) default: true
                    vibration: 300, // vibration length in milliseconds, ignored if vibrate=false, default: 1000
                    tag: 'some_tag', // (optional) add tag to message
                    group: "group", // (optional) add group to message
                    ongoing: false, // (optional) set whether this is an "ongoing" notification
                    priority: "high", // (optional) set notification priority, default: high
                    visibility: "private", // (optional) set notification visibility, default: private
                    importance: "high", // (optional) set notification importance, default: high

                    /* iOS and Android properties */
                    title: "Requested Blood Available", // (optional)
                    message: 'Requested Blood '+bloodNumberToGroup[data[0].bloodGroup[0]]+' available', // (required)
                    playSound: false, // (optional) default: true
                    soundName: 'default', // (optional) Sound to play when the notification is shown. Value of 'default' plays the default sound. It can be set to a custom sound such as 'android.resource://com.xyz/raw/my_sound'. It will look for the 'my_sound' audio file in 'res/raw' directory and play it. default: 'default' (default sound is played)
                    number: '10', // (optional) Valid 32 bit integer specified as string. default: none (Cannot be zero)
                    repeatType: 'day', // (optional) Repeating interval. Check 'Repeating Notifications' section for more info.
                    actions: '["OK"]',  // (Android only) See the doc for notification actions to know more
                });
        }).catch((error) => {
            alert(error.message)
        });

    }

    _showDialog = () => this.setState({ visible: true });

    _hideDialog = () => this.setState({ visible: false });

    request = () => {
        service.post('request',{
            bottles:this.state.bottles,
            bloodGroup:this.state.bloodGroup
        },this.state.token).then(function (data) {
            //do something
            //data will be the  repsone e.g data can be any json
            alert(data.message)
        }).catch((error) => {
            alert(error.message)
        });
        this._hideDialog()
    };
    render() {
        const { firstQuery } = this.state;
        return (
            <Provider>
                <View
                    style={{
                        flex: 1,
                        justifyContent: 'flex-start',
                        alignItems: 'stretch',
                    }}>
                    <Appbar style={styles.appBar}>
                        <Appbar.Content title="Blood Bucket" />
                        <Appbar.Action
                            icon="person"
                            onPress={() => this.props.navigation.navigate('Profile',{token:this.state.token})}
                        />
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
                        clearIcon={{ color: 'white' }}

                    />
                    <FlatList
                        style={{ padding: 10 }}
                        data={this.state.list}
                        renderItem={({ item }) => (
                            <View style={styles.listView}>
                                <Text style={styles.titleText}>{item.name}</Text>
                                <View style={styles.subtitleView}>
                                    <Text style={[styles.subtitleText,{flex:3}]}>{item.phoneNumber}</Text>
                                    <Text style={[styles.subtitleText,{flex:2}]}>{item.city}</Text>
                                    <Text style={[styles.subtitleText,{flex:1}]}>{bloodNumberToGroup[item.bloodGroup[0]]}</Text>
                                </View>
                            </View>
                        )}
                    />
                    <Portal>
                        <Dialog
                            visible={this.state.visible}
                            onDismiss={this._hideDialog}>
                            <Dialog.Title>Blood Request</Dialog.Title>
                            <Dialog.Content>
                                <Picker
                                    selectedValue={this.state.bloodGroup}
                                    style={{margin:10,color:bloodRed,textAlign:'center'}}
                                    onValueChange={(itemValue, itemIndex) =>
                                        this.setState({bloodGroup: itemIndex})
                                    }>
                                    <Picker.Item label="Pick a blood group" value={0}/>
                                    <Picker.Item label="A+" value={1}/>
                                    <Picker.Item label="A-" value={2}/>
                                    <Picker.Item label="B+" value={3}/>
                                    <Picker.Item label="B-" value={4}/>
                                    <Picker.Item label="O+" value={5}/>
                                    <Picker.Item label="O-" value={6}/>
                                    <Picker.Item label="AB+" value={7}/>
                                    <Picker.Item label="AB-" value={8}/>
                                </Picker>
                                <Slider
                                    value={this.state.value}
                                    onValueChange={value => this.setState({ value })}
                                    minimumValue={1}
                                    maximumValue={10}
                                    step={1}

                                />
                                <Text>Bottles: {this.state.value}</Text>
                            </Dialog.Content>
                            <Dialog.Actions>
                                <Button
                                    title='Request'
                                    buttonStyle={{backgroundColor:bloodRed}}
                                    onPress={this.request}>Done</Button>
                            </Dialog.Actions>
                        </Dialog>
                        <FAB
                            style={styles.fab}
                            icon="add"
                            onPress={this._showDialog}
                        />
                    </Portal>
                </View>
            </Provider>
        );
    }
}

class ProfileScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Usama Khalid',
            phoneNumber: '0335-2437814',
            city: 'Lahore',
            bloodGroup: 0,
            token: ''
        };

        this.state.token = this.props.navigation.state.params.token;

        const self = this;
        service.get('user',this.state.token).then(function (data) {
            //do something
            //data will be the  repsone e.g data can be any json
            self.setState({name:data.name});
            self.setState({phoneNumber:data.phoneNumber});
            self.setState({city:data.city});
            self.setState({bloodGroup:data.bloodGroup[0]});
        }).catch((error) => {
            alert(error.message)
        });
    }

    _goBack = () => this.props.navigation.navigate('Home',{token: this.state.token});

    save = () => {
        let self = this;
        service.post('user',{
            phoneNumber:this.state.phoneNumber,
            name:this.state.name,
            city:this.state.city,
            bloodGroup:this.state.bloodGroup
        },this.state.token,"PUT").then(function (data) {
            //do something
            //data will be the  repsone e.g data can be any json
            self.props.navigation.navigate('Home',{token: self.state.token});
        }).catch((error) => {
            alert(error.message)
        });
    };

    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: 'flex-start',
                    alignItems: 'stretch',
                }}>
                <Appbar style={{backgroundColor:bloodRed}}>
                    <Appbar.BackAction
                        onPress={this._goBack}
                    />
                    <Appbar.Content
                        title="Profile"
                    />
                </Appbar>
                <Input
                    label='Full Name'
                    mode='outlined'
                    value={this.state.name}
                    onChangeText={name => this.setState({ name })}
                    style={{margin:10}}
                    theme={{ colors: { placeholder: bloodRed, primary: bloodRed }}}
                />
                <Input
                    label='Phone Number'
                    mode='outlined'
                    value={this.state.phoneNumber}
                    onChangeText={phoneNumber => this.setState({ phoneNumber })}
                    style={{margin:10}}
                    theme={{ colors: { placeholder: bloodRed, primary: bloodRed }}}
                />
                <Input
                    label='Address'
                    mode='outlined'
                    value={this.state.city}
                    onChangeText={city => this.setState({ city })}
                    style={{margin:10}}
                    theme={{ colors: { placeholder: bloodRed, primary: bloodRed }}}
                />
                <Picker
                    selectedValue={this.state.bloodGroup}
                    style={{margin:10,color:bloodRed,textAlign:'center'}}
                    onValueChange={(itemValue, itemIndex) =>
                        this.setState({bloodGroup: itemIndex})
                    }>
                    <Picker.Item label="Pick a blood group" value={0}/>
                    <Picker.Item label="A+" value={1}/>
                    <Picker.Item label="A-" value={2}/>
                    <Picker.Item label="B+" value={3}/>
                    <Picker.Item label="B-" value={4}/>
                    <Picker.Item label="O+" value={5}/>
                    <Picker.Item label="O-" value={6}/>
                    <Picker.Item label="AB+" value={7}/>
                    <Picker.Item label="AB-" value={8}/>
                </Picker>
                <Button
                    buttonStyle={[styles.button,{margin:10}]}
                    title="Save"
                    onPress={this.save}
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
        Profile: {
            screen: ProfileScreen,
            navigationOptions: { header: null },
        },
    },
    {
        initialRouteName: 'Splash',
    }
);

const App = createAppContainer(AppNavigator);
export default App;
