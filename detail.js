import React from 'react'
import { Button, Image, StatusBar, Text, View } from 'react-native'
import { data } from './data'


export default function Detail({ navigation, route }) {
    const { index } = route.params

    let item = data[index]
    return (
        <View style={{ alignItems: 'center' }}>

            <StatusBar />
            <View style={{ alignSelf: 'flex-start', margin: 20 }}>

                <Button title="goBack" onPress={() => navigation.goBack()} />
            </View>
            <Image source={item.image} style={{ width: "90%", aspectRatio: 1, borderRadius: 10 }} />
            <Text style={{ margin: 10, fontSize: 16, fontWeight: 'bold' }}>
                {item.name}
            </Text>
            <Text style={{ margin: 10, fontSize: 16, fontWeight: 'bold' }}>
                {item.text}

            </Text>
            <Text style={{ margin: 10, fontSize: 16, fontWeight: 'bold' }}>
                {item.email}
            </Text>
            <Text style={{ margin: 10, fontSize: 16, fontWeight: 'bold' }}>
                {item.phone}

            </Text>

        </View>
    )
}
