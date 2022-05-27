import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

// on destructure donc on passe price directement et non props.price
const CardHeader = ({ price }) => {
    return (

        <View style={styles.containerCardHeader}>
            <Text>{price}</Text>
        </View>

    )
}

export default CardHeader

const styles = StyleSheet.create({
    containerCardHeader: {
        flex: 0.7,
        borderBottomWidth: 1,
        borderColor: '#2699fb',
        justifyContent: "center",
        alignItems: "center",
        paddingRight: 10,
    }
})

