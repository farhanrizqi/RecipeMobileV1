import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon} from '@rneui/themed';
import {
  Home,
  Login,
  Profile,
  Search,
  AddMenu,
  Regis,
  DetailMenu,
  EditMenu,
  MyRecipe,
  EditProfile,
  Save,
  Like,
  Initial,
} from '../screens';
// import {
//   IconAddActive,
//   IconAddNon,
//   IconHomeActive,
//   IconHomeNon,
//   IconMessageActive,
//   IconMessageNon,
//   IconUserActive,
//   IconUserNon,
// } from '../assets';
import {NavigationContainer} from '@react-navigation/native';

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
              source={focused ? IconHomeActive : IconHomeNon}
              style={{width: 30, height: 30, marginTop: 15}}
            />
          ),
          tabBarLabel: '',
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="SearchMenu"
        component={Search}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={focused ? IconMessageActive : IconMessageNon}
              style={{width: 30, height: 30, marginTop: 15}}
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
              source={focused ? IconAddActive : IconAddNon}
              style={{width: 30, height: 30, marginTop: 15}}
            />
          ),
          tabBarLabel: '',
          headerShown: false,
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={focused ? IconUserActive : IconUserNon}
              style={{width: 30, height: 30, marginTop: 15}}
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
        {!login.data?.token ? (
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
              name="Home"
              component={Home}
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
              name="Save"
              component={Save}
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
