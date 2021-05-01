import React from 'react'
import { Button, Linking, StyleSheet, Text, View } from 'react-native'

const Linkedin = ({ goBack }) => {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                <Text>Linkdin Account</Text>
                <Text>
                    Linked in profile

                    http://linkedin.com/in/faris-al-tuwaym-7a8a2a192
            </Text>
            <Button onPress={()=>Linking.openURL('http://linkedin.com/in/faris-al-tuwaym-7a8a2a192')} title="LinkedIn"/>
            </View>
            <Button
                title={'goback'}
                onPress={goBack}
            />
        </View>
    )
}

export default Linkedin

const styles = StyleSheet.create({})
