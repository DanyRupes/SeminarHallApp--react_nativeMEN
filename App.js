import React from 'react';
import { StyleSheet,StatusBar, Platform, View } from 'react-native';
import { AppLoading,Asset, Font, Icon } from 'expo'
import AppRoute from './src/staff/navigation/Route'

export default class App extends React.Component {

  state = {isLoadingComplete:false}

  componentWillMount() {
    // console.log(this.state)
    // console.log(this.props.)
  }
  render() {

    if(!this.state.isLoadingComplete && !this.props.skipLoadingScreen){
      return(
        <AppLoading 
          startAsync={this._loadResource}
          onError={this._onError}
          onFinish={this._handleFinished}
        />
      )
    }
    else{
          return (
            <View style={styles.container}>  
            {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
              <AppRoute />
            </View>
          );
    }
  }


  _loadResource = async () => {
    return Promise.all([
      Asset.loadAsync([
        // require('./assets/images/robot-dev.png'),
        // require('./assets/images/robot-prod.png'),
      ]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        // ...Icon.Ionicons.font,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        'perpetua-reg': require('./assets/font/perpetua_reg.ttf'),
        'Lucida-Sans' : require('./assets/font/Lucida_Sans.ttf'),
        'Tempus-Sans' : require('./assets/font/tempus_sans.ttf')
      }),
    ]);
  };

  _onError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinished = () => {
    this.setState({ isLoadingComplete: true });
  };
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f2f6',
  },
});

