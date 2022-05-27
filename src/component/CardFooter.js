import { Text, View } from 'react-native'
import React from 'react'

const CardFooter = ({ title, desc }) => {
    return (
        <View style={{ flex: 3 }}>

            <View style={{ flex: 2 }}>
                <Text style={{ fontSize: 12, fontWeight: 'bold' }}>{title}</Text>
            </View>

            <View style={{ flex: 6 }}>
                <Text style={{ overflow: 'hidden', fontSize: 10 }}>{desc}</Text>
            </View>

            <View style={{ flex: 3 }}>
                <Text>like</Text>
            </View>

        </View>
    )
}

export default CardFooter

