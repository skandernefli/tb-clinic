import React from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation-stack';
import {routes} from './routes' 
const AppNavigator=createStackNavigator(routes,{
    initialRouteName:Login,
});
const AppContainer =createAppContainer(AppNavigator)
export default AppContainer;