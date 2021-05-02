import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { data } from './data';
import Detail from './detail';
import Contact from './Contact'
import List from './list'
import AboutUs from './AboutUs';
import Linkedin from './Linkedin';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
export default function App() {

  // const showDetailfunc = () => {

  //   setshowDetail(true)
  //   setshowlist(false)
  // }
  const { Screen, Navigator } = createStackNavigator()
  return (
    <SafeAreaView style={{ padding: 10, flex: 1 }} >
      <StatusBar />
      <NavigationContainer>
        <Navigator>
          <Screen name="home" component={List} />
          <Screen name="Detail" component={Detail} />

          <Screen name="contactus" component={Contact} />
          <Screen name="Aboutus" component={AboutUs} />
          <Screen name="Linkedin" component={Linkedin} />



        </Navigator>





      </NavigationContainer>


    </SafeAreaView>
  );
}

