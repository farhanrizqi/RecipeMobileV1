import React from 'react';
import {useSelector} from 'react-redux';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet, Text, View, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import {
  AddMenu,
  DetailMenu,
  EditMenu,
  EditProfile,
  Home,
  Initial,
  Like,
  Login,
  MyRecipe,
  Profiles,
  Regis,
  Bookmark,
  Search,
} from '../screens';
import {
  TabHome,
  TabMessage,
  TabAdd,
  TabUser,
  TabHomeOff,
  TabMessageOn,
  TabAddOn,
  TabUserOn,
} from '../assets';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={focused ? TabHome : TabHomeOff}
              style={{width: 25, height: 25, marginTop: 15}}
            />
          ),
          tabBarLabel: '',
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={focused ? TabMessageOn : TabMessage}
              style={{width: 25, height: 25, marginTop: 15}}
            />
          ),
          tabBarLabel: '',
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="AddMenu"
        component={AddMenu}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={focused ? TabAddOn : TabAdd}
              style={{width: 25, height: 25, marginTop: 15}}
            />
          ),
          tabBarLabel: '',
          headerShown: false,
        }}
      />

      <Tab.Screen
        name="Profiles"
        component={Profiles}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={focused ? TabUserOn : TabUser}
              style={{width: 25, height: 25, marginTop: 15}}
            />
          ),
          tabBarLabel: '',
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

const Router = () => {
  const login = useSelector(state => state.login);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Initial">
        {!login.data?.data?.token ? (
          <>
            <Stack.Screen
              name="Initial"
              component={Initial}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Regis"
              component={Regis}
              options={{headerShown: false}}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              name="MainApp"
              component={MainApp}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="DetailMenu"
              component={DetailMenu}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="MyRecipe"
              component={MyRecipe}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="EditMenu"
              component={EditMenu}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="EditProfile"
              component={EditProfile}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Bookmark"
              component={Bookmark}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Like"
              component={Like}
              options={{headerShown: false}}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;

const styles = StyleSheet.create({
  TabNav: {
    backgroundColor: 'red',
  },
});
