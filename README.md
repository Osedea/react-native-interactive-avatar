# react-native-interactive-avatar
An avatar allowing you to click on it to change the image

# [Documentation For React-native 0.26.2+ to 0.40](https://github.com/Osedea/react-native-interactive-avatar/tree/b63c2c131d349b0b8377f6770715b6f1f17bebc9)
# For React-native 0.40 to 0.47, use ^1.0.0
# For React-native 0.48+, use ^2.0.0

# For React-native 0.40+

The component might work on older versions

## Example

```
import Avatar from 'react-native-interactive-avatar';

export default class Example extends Component {
    handleImageChange = (response) => {
        // Do something

        // response looks like : {
        //      data: "data:image/jpeg;base64,/9j/4AAQSkZJRg...", // Base64
        //      fileSize: 474486,
        //      height: 531,
        //      isVertical: false,
        //      origURL: "assets-library://asset/asset.JPG?id=106E99A1-4F6A-45A2-B320-B0AD4A8E8473&ext=JPG",
        //      uri: "file:///...",
        //      width: 800,
        // }
    };

    render() {
        <View>
            <Avatar
                uri={'https://media2.giphy.com/media/sbLpwwHlgls8E/giphy.gif'}
                size={'default'}
                placeholderSource={require('example/images/placeholder.png')}
                interactive
                onChange={this.handleImageChange}
            />
            <Avatar
                source={require('example/images/logo.png')}
                size={'medium'}
            />
            <Avatar
                source={require('example/images/logo.png')}
                size={'small'}
            />
            <Avatar
                withBorder
                placeholderSource={require('example/images/placeholder.png')}
                interactive
                style={{
                    borderColor: '#000000',
                    borderWidth: 1,
                    marginLeft: 5,
                }}
                size={'verySmall'}
            />
        </View>
    }
}
```

![Example](example.png)

See more in the [Example Project](./example)

:warning: Use npm to install the dependencies of the example project. Yarn is ignoring the `.npmignore` and therefore installing `example/` in the `node_modules/react-native-interactive-avatar` relative dependency.

## Properties

Property name | Type | Remark
--- | --- | ----
interactive| React.PropTypes.bool | if true, allows to select a new image on Press (if no onPress function is defined)
onChange| React.PropTypes.func | called on change when interactive is true
onChangeFailed| React.PropTypes.func | called on change failure when interactive is true
onPress| React.PropTypes.func |
overlayColor| React.PropTypes.string | On android only, should be the same than the backgroundColor of the surrounding View
pickerOptions | ImagePicker.options | See [react-native-image-picker](https://github.com/marcshilling/react-native-image-picker)
placeholderSource | [Image.propTypes.source](https://facebook.github.io/react-native/docs/image.html#source) | A source for the Image that is displayed when `source` and `uri` are empty
placeholderURI | React.PropTypes.string | A **distant** source for the Image that is displayed when `source` and `uri` are empty
size| React.PropTypes.oneOf([ 'default', 'mini', 'verySmall', 'small', 'medium' ]) | A set of sizes that you can set for the Avatar
source| [Image.propTypes.source](https://facebook.github.io/react-native/docs/image.html#source) | The source Image to display
style| Image.propTypes.style | The style of the Image
uri | React.PropTypes.string | A **distant** source to display
withBorder| React.PropTypes.bool | Should it have a border?

This component uses the awesome [react-native-image-picker](https://github.com/marcshilling/react-native-image-picker)

## Installation

```
    npm i --save react-native-interactive-avatar
    react-native link react-native-image-picker
```
