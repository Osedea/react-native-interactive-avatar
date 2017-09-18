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
                    To get started, edit index.ios.js
                </Text>
                <Text style={styles.instructions}>
                    Press Cmd+R to reload,{'\n'}
                    Cmd+D or shake for dev menu
                </Text>
                <View>
                    <Avatar
                        uri={'https://media2.giphy.com/media/sbLpwwHlgls8E/giphy.gif'}
                        size={'default'}
                        placeholderSource={require('RNInteractiveAvatarExample/images/placeholder.png')}
                        interactive
                        onChange={this.handleImageChange}
                    />
                    <Avatar
                        source={require('RNInteractiveAvatarExample/images/logo.png')}
                        size={'medium'}
                    />
                    <Avatar
                        source={require('RNInteractiveAvatarExample/images/logo.png')}
                        size={'small'}
                    />
                    <Avatar
                        withBorder
                        placeholderSource={require('RNInteractiveAvatarExample/images/placeholder.png')}
                        interactive
                        style={{
                            borderColor: '#000000',
                            borderWidth: 1,
                            marginLeft: 5,
                        }}
                        size={'verySmall'}
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

AppRegistry.registerComponent('RNInteractiveAvatarExample', () => example);
