import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

// on destructure donc on passe price directement et non props.price
const CardHeader = ({ price }) => {
    return (

        <View style={styles.containerCardHeader}>
            <Text style={{ fontWeight: 'bold', color: 'grey' }}>{price} €</Text>
        </View>

    )
}

export default CardHeader

const styles = StyleSheet.create({
    containerCardHeader: {
        flex: 0.7,
        borderBottomWidth: 1,
        borderColor: 'dark',
        justifyContent: "center",
        alignItems: "center",
        paddingRight: 10,
    }
})

