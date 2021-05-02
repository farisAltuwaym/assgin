import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { data } from './data';

export default function App({ navigation}) {
  return (
    <SafeAreaView style={{ padding: 10, flex: 1 }} >
      <ScrollView>

        <View style={{ alignItems: 'center', }}>
          <View style={{ flexDirection: 'row' }}>
            <Button onPress={()=>navigation.navigate('contactus')} title="Contact" />
            <Button onPress={()=>navigation.navigate('Aboutus')} title="About Us" />
            <Button onPress={()=>navigation.navigate('Linkedin')} title="Linkedin Profile" />

          </View>
          {
            data.map((item, i) => {


              return <TouchableOpacity onPress={() => { navigation.navigate('Detail',{index:i}) }} style={{ width: '80%', height: 200, marginVertical: 10 }}><Image style={{ width: '100%', height: 200, borderRadius: 5, }} source={item.image} /></TouchableOpacity>

            })
          }
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

