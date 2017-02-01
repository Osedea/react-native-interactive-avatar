/**
* Sample React Native App
* https://github.com/facebook/react-native
* @flow
*/

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
} from 'react-native';

import Avatar from 'react-native-interactive-avatar';

export default class example extends Component {
    handleImageChange = (response) => {
        console.log(response);
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to React Native!
                </Text>
                <Text style={styles.instructions}>
                    To get started, edit index.android.js
                </Text>
                <Text style={styles.instructions}>
                    Double tap R on your keyboard to reload,{'\n'}
                    Shake or press menu button for dev menu
                </Text>
                <View>
                    <Avatar
                        uri={'https://media2.giphy.com/media/sbLpwwHlgls8E/giphy.gif'}
                        size={'default'}
                        interactive
                        onChange={this.handleImageChange}
                        overlayColor={'#F5FCFF'}
                    />
                    <Avatar
                        source={require('example/images/logo.png')}
                        size={'medium'}
                        overlayColor={'#F5FCFF'}
                    />
                    <Avatar
                        source={require('example/images/logo.png')}
                        size={'small'}
                        overlayColor={'#F5FCFF'}
                    />
                    <Avatar
                        withBorder
                        placeholderSource={require('example/images/placeholder.png')}
                        style={{
                            borderColor: '#000000',
                            marginLeft: 5,
                        }}
                        size={'verySmall'}
                        overlayColor={'#F5FCFF'}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

AppRegistry.registerComponent('example', () => example);
