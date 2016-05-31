# react-native-interactive-avatar
An avatar allowing you to click on it to change the image

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
