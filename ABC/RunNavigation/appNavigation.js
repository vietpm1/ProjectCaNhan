import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import UserNavigation from './userNavigation';
import MainNavigation from './mainNavigation';

// import { useSelector } from 'react-redux'
// const useAppSelector = useSelector;

const AppNavigation = () => {
    // const appState = useAppSelector((state) => state.app);
    // console.log('>>>user', appState.user);
    return (
        <NavigationContainer>
            {
               
                //  <MainNavigation /> 
                    <UserNavigation />
            }
        </NavigationContainer>
    )
}

export default AppNavigation