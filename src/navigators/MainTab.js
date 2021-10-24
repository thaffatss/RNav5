import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Importando Screen/Tela.
import TabHomeScreen from '../pages/TabHomeScreen';
import TabAboutScreen from '../pages/TabAboutScreen';

const Tab = createBottomTabNavigator();

export default () => {
    return (
        <Tab.Navigator
            // Cria um options para todos as telas, mas com as parcularidades de cada uma
            // utilizando uma função no screenOptions, identificando qual screen pela rota/props e
            // o nome da screen. Depois cria uma condição com switch() para cada screen.
            screenOptions={({route})=>({
                tabBarIcon: ({ focused }) => {
                    let imgSource = null;

                    switch(route.name) {
                        case 'TabHome':
                            imgSource = require('../assets/img/home.png');
                        break;

                        case 'TabAbout':
                            imgSource = require('../assets/img/interface.png');
                        break;
                    }

                    return <Image source={imgSource} style={{ width: 26, height: 26 }} />
                }
            })}
        >
            <Tab.Screen name="TabHome" component={TabHomeScreen} options={{ tabBarLabel: 'Home' }} />
            <Tab.Screen name="TabAbout" component={TabAboutScreen} options={{ tabBarLabel: 'Sobre' }} />
        </Tab.Navigator>
    );
}