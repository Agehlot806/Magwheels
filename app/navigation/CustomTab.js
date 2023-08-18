import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home/Home';
import {Screen} from '../constant/screen';
import Profile from '../screens/Profile';
import HandleStatus from '../screens/StatusHandle/HandleStatus';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Tab = createBottomTabNavigator();
const CustomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: () => (
            <Image
              source={require('../assets/images/home.png')}
              style={{
                width: wp('5%'),
                height: hp('3%'),
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        options={{
          tabBarIcon: () => (
            <Image
              source={require('../assets/images/home.png')}
              style={{
                width: wp('5%'),
                height: hp('3%'),
              }}
            />
          ),
        }}
        name={Screen.STATUS}
        component={HandleStatus}
      />
      <Tab.Screen
        options={{
          tabBarIcon: () => (
            <Image
              source={require('../assets/images/home.png')}
              style={{
                width: wp('5%'),
                height: hp('3%'),
              }}
            />
          ),
        }}
        name={Screen.PROFILE}
        component={Profile}
      />
      <Tab.Screen
        options={{
          tabBarIcon: () => (
            <Image
              source={require('../assets/images/home.png')}
              style={{
                width: wp('5%'),
                height: hp('3%'),
              }}
            />
          ),
        }}
        name="Help"
        component={Home}
      />
    </Tab.Navigator>
  );
};

export default CustomTab;

const styles = StyleSheet.create({});
