import React from 'react';
import {View, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon1 from 'react-native-vector-icons/Feather';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../Main/Home';
import History from '../Main/History';
import Notifi from '../Main/Notifi';
import Profile from '../Main/Profile';
import Search from '../Main/Search';
import Cart from '../Main/Cart';
import Detail from '../Main/Detail';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const tabScreenOptions = ({route}) => {
  return {
    headerShown: false,
    tabBarStyle: {
      backgroundColor: 'white',
      borderColor: 'white',
      height: 56,
    },
    tabBarIcon: ({focused}) => {
      if (route.name == 'Home') {
        if (focused) {
          return <Icon name="home" size={15} color="#329171" />;
        }
        return <Icon name="home" size={15} color="gray" />;
      
      
      } else if (route.name == 'Cart') {
        if (focused) {
          return <Icon1 name="shopping-cart" size={15} color="#329171" />;
        }
        return <Icon1 name="shopping-cart" size={15} color="gray" />;
     
      } else if (route.name == 'Notifi') {
        if (focused) {
          return <Icon name="bell" size={15} color="#329171" />;
        }
        return <Icon name="bell" size={15} color="gray" />;
      } else if (route.name == 'History') {
        if (focused) {
          return <Icon name="history" size={15} color="#329171" />;
        }
        return <Icon name="history" size={15} color="gray" />;
      }
    },
    tabBarLabel: ({focused}) => {
      if (route.name == 'Home') {
        if (focused) {
          return <Text style={{color: '#329171', fontSize: 13}}>Home</Text>;
        }
        return <Text style={{color: 'gray', fontSize: 13}}>Home</Text>;
      } else if (route.name == 'Cart') {
        if (focused) {
          return <Text style={{color: '#329171', fontSize: 13}}>Cart</Text>;
        }
        return <Text style={{color: 'gray', fontSize: 13}}>Cart</Text>;
      } else if (route.name == 'Notifi') {
        if (focused) {
          return (
            <Text style={{color: '#329171', fontSize: 13}}>Notification</Text>
          );
        }
        return <Text style={{color: 'gray', fontSize: 13}}>Notification</Text>;
      } else if (route.name == 'History') {
        if (focused) {
          return <Text style={{color: '#329171', fontSize: 13}}>History</Text>;
        }
        return <Text style={{color: 'gray', fontSize: 13}}>History</Text>;
      }
    },
  };
};
const MainTabs = () => {
  return (
    <Tab.Navigator screenOptions={tabScreenOptions}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Cart" component={Cart} />
      <Tab.Screen name="Notifi" component={Notifi} />
      <Tab.Screen name="History" component={History} />
    </Tab.Navigator>
  );
};
const MainNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="MainTabs" component={MainTabs} />
      <Stack.Screen name="Detail" component={Detail} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Search" component={Search} />
      {/* <Stack.Screen name="UpdateProfile" component={UpdateProfile} />
      <Stack.Screen name="Payment" component={Payment} />
      <Stack.Screen name="History" component={History} /> */}
    </Stack.Navigator>
  );
};
export default MainNavigation;
