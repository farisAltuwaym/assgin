import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { data } from './data';

export default function App({ showDetailfunc, setindex, showContactfunc,showLinkedinfunc,showAboutUsfunc }) {
  return (
    <SafeAreaView style={{ padding: 10, flex: 1 }} >
      <ScrollView>

        <View style={{ alignItems: 'center', }}>
          <View style={{ flexDirection: 'row' }}>
            <Button onPress={showContactfunc} title="Contact" />
            <Button onPress={showAboutUsfunc} title="About Us" />
            <Button onPress={showLinkedinfunc} title="Linkedin Profile" />

          </View>
          {
            data.map((item, i) => {


              return <TouchableOpacity onPress={() => { showDetailfunc(); setindex(i) }} style={{ width: '80%', height: 200, marginVertical: 10 }}><Image style={{ width: '100%', height: 200, borderRadius: 5, }} source={item.image} /></TouchableOpacity>

            })
          }
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

