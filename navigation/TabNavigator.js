import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feed from "../screens/FeedScreen";
import CreatePost from "../screens/CreatePostScreen";

const Tab = createMaterialBottomTabNavigator();

const BottomTabNavigator = ()=>{
    return(
        <Tab.Navigator
            screenOptions = {({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if(route.name === 'Feed'){
                        iconName = focused
                        ? 'book'
                        : 'book-outline';
                    } else if(route.name === 'CreatePost'){
                        iconName = focused
                        ? 'create'
                        : 'create-outline'; 
                    }
                    return<Ionicons name = {iconName} size = {size} color = {color}/>;   
                },
            
            })} 

                tabBarOptions = {{
                    activeTintColor: 'lightBlue',
                    inactiveTintColor: 'gray',
                }}
        
        >
            <Tab.Screen name = "Feed" component = {Feed}/>
            <Tab.Screen name = "CreatePost" component = {CreatePost}/>

        </Tab.Navigator>
    );
}

export default BottomTabNavigator