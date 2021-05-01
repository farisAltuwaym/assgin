import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { data } from './data';
import Detail from './detail';
import Contact from './Contact'
import List from './list'
import AboutUs from './AboutUs';
import Linkedin from './Linkedin';
export default function App() {
  const [showlist, setshowlist] = useState(true)
  const [showDetail, setshowDetail] = useState(false)
  const [showAboutus, setshowAboutus] = useState(false)
  const [showLinkedin, setshowlinkedin] = useState(false)
  const [showContact, setshowContact] = useState(false)
  const [index, setindex] = useState('')

  const showDetailfunc = () => {

    setshowDetail(true)
    setshowlist(false)
  }
  const showContactfunc = () => {

    setshowContact(true)
    setshowlist(false)
  }
  const showLinkedinfunc = () => {
    setshowlinkedin(true)
    setshowlist(false)
  }
  const showAboutUsfunc = () => {

    setshowAboutus(true)
    setshowlist(false)
  }
  // const showDetailfunc = () => {

  //   setshowDetail(true)
  //   setshowlist(false)
  // }

  return (
    <SafeAreaView style={{ padding: 10, flex: 1 }} >
      <StatusBar/>
      {
        showlist && <List setindex={setindex} showLinkedinfunc={showLinkedinfunc} showAboutUsfunc={showAboutUsfunc}  showContactfunc={showContactfunc} showDetailfunc={showDetailfunc} />
      }
      {
        showDetail && <Detail index={index} goBack={() => { setshowDetail(false); setshowlist(true) }} />
      }
      {
        showLinkedin &&<Linkedin goBack={() => {
          setshowlinkedin(false)
          setshowlist(true)

        }} />
      }
      {
        showContact &&<Contact goBack={() => {
          setshowContact(false);
          setshowlist(true)



        }} />
      }
      {
        showAboutus && <AboutUs goBack={() => {
          setshowAboutus(false)
          setshowlist(true)

        }} />
      }

    </SafeAreaView>
  );
}

