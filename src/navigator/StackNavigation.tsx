import React, {Component} from 'react';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const Tab = createBottomTabNavigator();
import SampleScreen from '../screens/SampleScreen';
import HomeScreen from '../screens/HomeScreen';

const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color}) => {
          let iconName: any;
          if (route.name === 'Home') {
            iconName = 'home-city-outline';
          } else if (route.name === 'Sample') {
            iconName = 'city';
          }
          return (
            <MaterialCommunityIcons name={iconName} size={25} color={color} />
          );
        },
      })}
      tabBarOptions={{
        activeTintColor: 'white',
        inactiveTintColor: 'gray',
        activeBackgroundColor: 'blue',
        // inactiveBackgroundColor: 'blue',
      }}>
      <Tab.Screen
        initialParams={{city: 'london'}}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen name="Sample" component={SampleScreen} />
    </Tab.Navigator>
    // <Stack.Navigator initialRouteName={'Home'} headerMode="none">
    //   <Stack.Screen name={'Sample'} component={SampleScreen} />
    //   <Stack.Screen name={'Home'} component={HomeScreen} />
    // </Stack.Navigator>
  );
};
export default AppStack;
