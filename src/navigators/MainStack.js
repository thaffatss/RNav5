import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from '../pages/HomeScreen';
import AboutScreen from '../pages/AboutScreen';

const MainStack = createNativeStackNavigator();

export default () => {
    return (
    <MainStack.Navigator screenOptions={{ 
        headerTitleAlign: 'center',
        headerStyle:{
            backgroundColor: '#0000FF',
            height: 200
        },
        headerTitleStyle:{
            fontWeight: 'bold',
            color: '#FFF'
        }
     }}>
        <MainStack.Screen name="Home" component={HomeScreen} options={{ 
                title: 'Início'
            }} 
        />
        <MainStack.Screen 
            name="About" 
            component={AboutScreen} 
            options={({ route })=>({
                headerStyle:{
                    backgroundColor: route.params?.cor ?? '#FF0000'
                }
            })}
        />
    </MainStack.Navigator>
    );
}

