import React, { Component } from 'react'
import { View, Platform } from 'react-native' 
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'
import HomeScreen from '../../screens/Home'
import PendingScreen from '../../screens/Pending'
import TabBarIcon from '../../../../assets/icons/TabBarIcon';
import {  Ionicons, Feather } from '@expo/vector-icons'


const HomeStack = createStackNavigator({
    Home : HomeScreen
})

HomeStack.navigationOptions = {
    tabBarLabel : 'Home',
    tabBarIcon:({ focused })=>(
        <TabBarIcon 
        focused={focused}
        brand="Feather"
        name= {'home'}//{Platform.OS === 'ios' ? `home${focused ? '':'-outline'}`: 'home'}
        />
        )
}


const PendingStack = createStackNavigator({
    Pending: PendingScreen
})

PendingStack.navigationOptions = {
    tabBarLabel : 'Pending',
    tabBarIcon: ({ focused})=>(
        <TabBarIcon 
            focused={focused}
            brand="AntDesign"
            name={'question'}//{Platform.OS === 'ios' ? `question${focused ? '' : '-outline'}` : 'question'}
            />
    )
}

export default createBottomTabNavigator({
    HomeStack,
    PendingStack
})