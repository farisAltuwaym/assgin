import React from 'react'
import { Button, Linking, StyleSheet, Text, View } from 'react-native'

const Linkedin = ({ navigation }) => {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                <Text>Linkdin Account</Text>
                <Text>
                    Linked in profile

                    http://linkedin.com/in/faris-al-tuwaym-7a8a2a192
            </Text>
           
            </View>
            <Button title={'Go nback'} onPress={() => navigation.goBack()} />
        </View>
    )
}

export default Linkedin

const styles = StyleSheet.create({})
