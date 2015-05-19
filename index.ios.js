/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var SearchPage = require("./SearchPage");
var {
  AppRegistry,
  Text,
  View,
  NavigatorIOS,
} = React;

var HelloWorld = React.createClass({
  render: function(){
    return (
      
        <Text style={styles.text}>Hello, World</Text>
    );
  }
})

class PropertyFinderApp extends React.Component{
  render(){
    return (
        <NavigatorIOS 
          style={styles.container}
          initialRoute={{ title: "Property Finder", component: SearchPage}}
          >
        </NavigatorIOS>

    );
  }
}

var styles = React.StyleSheet.create({
  text: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 30,
    margin: 80

  },
  container:{
    flex: 1
  }
});

AppRegistry.registerComponent("property_finder", () => PropertyFinderApp);