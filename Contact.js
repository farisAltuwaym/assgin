import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const Contact = ({ goBack }) => {
    return (
        <View style={{ flex: 1 }}>
            <View style={{flex:1}}>

            <Text>Contact</Text>
            <Text>For further information you can reach us at (703) 522-5600
</Text>
            </View>
            <View >

                <Button title={'Go nback'} onPress={goBack} />
            </View>
        </View>
    )
}

export default Contact

const styles = StyleSheet.create({})
