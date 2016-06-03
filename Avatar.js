/**
*
*
* @class
* @classdesc Avatar Component
* @extends React.Component
*
*
* @author Adrien Thiery <adrien.thiery@osedea.com>
* @version 0.1.0
*
*
*/

import React, { Component } from 'react';

import {
    Image,
    NativeModules,
    Platform,
    StyleSheet,
    TouchableWithoutFeedback,
} from 'react-native';

const AVATAR_OPTIONS = {
    title: 'Pick your image',
    cancelButtonTitle: 'Cancel',
    takePhotoButtonTitle: 'Take picture',
    chooseFromLibraryButtonTitle: 'Pick from Library',
    mediaType: 'photo',
    aspectX: 1, // android only - aspectX:aspectY, the cropping image's ratio of width to height
    aspectY: 1, // android only - aspectX:aspectY, the cropping image's ratio of width to height
    quality: 1, // 0 to 1, photos only
    angle: 0, // android only, photos only
    allowsEditing: false, // Built in functionality to resize/reposition the image after selection
    noData: false, // photos only - disables the base64 `data` field from being generated (greatly improves performance on large photos)
    storageOptions: { // if this key is provided, the image will get saved in the documents directory on ios, and the pictures directory on android (rather than a temporary directory)
        skipBackup: true, // ios only - image will NOT be backed up to icloud
        path: 'images' // ios only - will save image at /Documents/images rather than the root
    },
    maxWidth: 800,
    maxHeight: 800,
    cameraType: 'front',
};

const colors = {
    defaultBackgroundColor: '#AAAAAA',
    defaultBorderColor: '#FFFFFF',
    defaultOverlayColor: '#FFFFFF',
};

const styles = StyleSheet.create({
    avatar: {
        backgroundColor: colors.defaultBackgroundColor,
    },
    verySmallAvatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    smallAvatar: {
        width: 50,
        height: 50,
        borderRadius: 26,
    },
    mediumAvatar: {
        width: 80,
        height: 80,
        borderRadius: 40,
    },
    defaultAvatar: {
        width: 125,
        height: 125,
        borderRadius: 63,
    },
    border: {
        borderColor: colors.defaultBorderColor,
        borderWidth: 2,
    },
});

export default class Avatar extends Component {
    static propTypes = {
        interactive: React.PropTypes.bool,
        isRequire: React.PropTypes.bool,
        placeholder: React.PropTypes.number,
        onChange: React.PropTypes.func, // called on change when interactive is true
        onChangeFailed: React.PropTypes.func, // called on change failure when interactive is true
        onPress: React.PropTypes.func,
        overlayColor: React.PropTypes.string, // On android only, should be the same than the backgroundColor of the surrounding View
        pickerOptions: React.PropTypes.object, // TODO: Define better
        size: React.PropTypes.oneOf([
            'default',
            'verySmall',
            'small',
            'medium',
        ]),
        source: React.PropTypes.oneOfType([
            React.PropTypes.string,
            React.PropTypes.number, // if require
        ]),
        style: Image.propTypes.style,
        // if true, allows to select a new image on Press (if no onPress function is defined)
        withBorder: React.PropTypes.bool,
    };

    static defaultProps = {
        overlayColor: colors.defaultOverlayColor,
    };

    constructor(props) {
        super(props);

        this.placeholder = this.props.placeholder; // This should be an image

        this.state = {
            source: this.getAppropriateSource(props.source),
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            source: this.getAppropriateSource(nextProps.source),
        });
    }

    getAppropriateSource = (source) => {
        let appropriateSource = source;

        if (!source) {
            appropriateSource = this.placeholder;
        } else if (!this.props.isRequire) {
            appropriateSource = { uri: source };
        }

        return appropriateSource;
    };

    getImage = () => (
        <Image
            style={[
                Platform.OS === 'ios'
                    ? {}
                    : { overlayColor: this.props.overlayColor },
                styles.avatar,
                styles[`${this.props.size}Avatar`],
                this.props.withBorder ? styles.border : {},
                this.props.style,
            ]}
            resizeMode={'cover'}
            source={this.state.source}
        />
    );

    handleInteractivePress = () => {
        NativeModules.ImagePickerManager.showImagePicker(
            {
              ...AVATAR_OPTIONS,
              ...this.props.pickerOptions
            },
            (response) => {
                if (response.error) {
                    this.setState({
                        failed: true,
                    });
                    if (this.props.onChangeFailed) {
                        this.props.onChangeFailed();
                    }
                } else if (response.didCancel) {
                    this.setState({
                        failed: false,
                    });
                    // Do something on cancel ?
                } else {
                    const source = response;

                    source.data = `data:image/jpeg;base64,${response.data}`;
                    this.setState({
                        source,
                        failed: false,
                    });
                    if (this.props.onChange) {
                        this.props.onChange(response);
                    }
                }
            }
        );
    };

    render() {
        if (this.props.onPress) {
            return (
                <TouchableWithoutFeedback onPress={this.props.onPress}>
                    {this.getImage()}
                </TouchableWithoutFeedback>
            );
        }
        if (this.props.interactive) {
            return (
                <TouchableWithoutFeedback onPress={this.handleInteractivePress}>
                    {this.getImage()}
                </TouchableWithoutFeedback>
            );
        }

        return this.getImage();
    }
}
