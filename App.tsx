import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from 'react-native';
import TestSlide from './TEXT/TestSlide';
import AppNavigation from './ABC/RunNavigation/appNavigation';
import Register from './ABC/User/Register';
import Login from './ABC/User/Login';
import Home from './ABC/Main/Home';
import Search from './ABC/Main/Search';
import Cart from './ABC/Main/Cart';
function App(): React.JSX.Element {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar />
      <AppNavigation/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

export default App;