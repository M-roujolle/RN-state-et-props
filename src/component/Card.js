import { StyleSheet, View } from 'react-native'
import React from 'react'
import CardHeader from './CardHeader'
import CardBody from './CardBody'
import CardFooter from './CardFooter'

const Card = (props) => {

    console.log(props);
    return (
        <View style={styles.container}>

            <CardHeader price={props.max.price} />
            <CardBody image={props.max.photo} />
            <CardFooter title={props.max.title} desc={props.max.desc} likes={props.max.likes} />

        </View>
    )
}

export default Card

const styles = StyleSheet.create({
    container: {
        height: 370,
        width: 175,
        borderWidth: 1,
        borderColor: '#dark',
        marginTop: 15,
    }
})