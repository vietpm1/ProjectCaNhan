import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import Login from '../User/Login';
import Register from '../User/Register';
import MainNavigation from './mainNavigation';
const UserNavigation = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name='Register' component={Register} />
            <Stack.Screen name='MainNavigation' component={MainNavigation} />

        </Stack.Navigator>
    )
}

export default UserNavigation