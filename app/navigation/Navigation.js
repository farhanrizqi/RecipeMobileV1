import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/Auth/LoginScreen';
import RegisScreen from '../screens/Auth/RegisScreen';
import MyRecipeScreen from '../screens/profile/MyRecipeScreen';
import SaveAndLikeScreen from '../screens/profile/SaveAndLikeScreen';
import HomeScreen from '../screens/HomeScreen';
import AddScreen from '../screens/AddScreen';
import MessageScreen from '../screens/MessageScreen';
import ProfileScreen from '../screens/ProfileScreen';
import {Image} from 'react-native';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Navigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../assets/img/home.png')}
              style={{
                width: 24,
                height: 24,
                tintColor: focused ? '#EEC302' : 'gray',
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Add Recipe"
        component={AddScreen}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../assets/img/plus-square.png')}
              style={{
                width: 24,
                height: 24,
                tintColor: focused ? '#EEC302' : 'gray', // Ganti warna berdasarkan kondisi focused
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Message"
        component={MessageScreen}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../assets/img/message-circle.png')}
              style={{
                width: 24,
                height: 24,
                tintColor: focused ? '#EEC302' : 'gray', // Ganti warna berdasarkan kondisi focused
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../assets/img/user.png')}
              style={{
                width: 24,
                height: 24,
                tintColor: focused ? '#EEC302' : 'gray', // Ganti warna berdasarkan kondisi focused
              }}
            />
          ),
        }}
      />
      {/* Add other screens here */}
    </Tab.Navigator>
  );
}

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="LoginScreens">
      <Stack.Screen
        name="LoginScreens"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="HomeScreen"
        component={Navigation}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="RegisScreen"
        component={RegisScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MyRecipeScreen"
        component={MyRecipeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SaveAndLikeScreen"
        component={SaveAndLikeScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
