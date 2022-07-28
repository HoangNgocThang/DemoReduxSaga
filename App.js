import React from 'react';
import { StyleSheet, } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/redux/store/configureStore';
import HomeScreen from './src/screens/HomeScreen';

const App = () => {
  return (
    <Provider store={store}>
      <HomeScreen />
    </Provider>
  );
};

const styles = StyleSheet.create({

});

export default App;
