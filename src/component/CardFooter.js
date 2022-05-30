import { Text, TouchableOpacity, ScrollView, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'

const CardFooter = ({ title, desc, likes }) => {
    return (
        <View style={{ flex: 6 }}>

            <View style={{ flex: 2 }}>
                <Text style={{ fontSize: 12, fontWeight: 'bold' }}>{title}</Text>
            </View>

            <ScrollView style={{ flex: 6 }}>
                <Text style={{ overflow: 'hidden', fontSize: 11 }}>{desc}</Text>
            </ScrollView>

            <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 12, fontWeight: 'bold', justifyContent: "center", textAlign: "center", marginTop: 1 }}>{likes}

                    <TouchableOpacity>
                        <Icon name="heart" size={15} />
                    </TouchableOpacity>

                </Text>
            </View>

        </View>
    )
}

export default CardFooter

