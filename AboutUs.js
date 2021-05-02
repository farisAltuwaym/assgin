import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { data } from './data'

const AboutUs = ({ navigation }) => {

    return (
        <View style={{flex:1}}>
           <View style={{flex:1}}>

                <Text style={{margin:20}}>About Us</Text>
                <Text>
                    This is a student program from Marymount University to serve the technology students to the most important people they have to know their information.
</Text>

            </View>
            <View>

            <Button title={'Go nback'} onPress={() => navigation.goBack()} />
            </View>
        </View>
    )
}

export default AboutUs

const styles = StyleSheet.create({

})
