# react-native-interactive-avatar
An avatar allowing you to click on it to change the image

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
                source={'https://media2.giphy.com/media/sbLpwwHlgls8E/giphy.gif'}
                size={'default'}
                interactive={true}
                onChange={this.handleImageChange}
            />
            <Avatar
                source={require('./images/logo-cropped.png')}
                isRequire={true}
                size={'medium'}
            />
            <Avatar
                source={require('./images/logo-cropped.png')}
                isRequire={true}
                size={'small'}
            />
            <Avatar
                withBorder={true}
                placeholder={require('./images/avatar-placeholder.png')}
                style={{
                    borderColor: '#000000',
                    marginLeft: 5,
                }}
                size={'verySmall'}
            />
        </View>
    }
}
```

![Example](example.png)

## Properties

Property name | Type | Remark
--- | --- | ----
interactive| React.PropTypes.bool | if true, allows to select a new image on Press (if no onPress function is defined)
isRequire| React.PropTypes.bool
onChange| React.PropTypes.func | called on change when interactive is true
onChangeFailed| React.PropTypes.func | called on change failure when interactive is true
onPress| React.PropTypes.func
overlayColor| React.PropTypes.string | On android only, should be the same than the backgroundColor of the surrounding View
size| React.PropTypes.oneOf([ 'default', 'verySmall', 'small', 'medium' ]),
source| React.PropTypes.oneOfType([ <br>React.PropTypes.string,<br> React.PropTypes.number `// if require is used` <br>])
style| Image.propTypes.style
withBorder| React.PropTypes.bool


This component uses the awesome [react-native-image-picker](https://github.com/marcshilling/react-native-image-picker)

## Installation

```
    npm i --save react-native-interactive-avatar react-native-image-picker
    rnpm link react-native-image-picker
```
