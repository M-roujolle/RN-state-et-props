import { StyleSheet, FlatList, TextInput, Text } from 'react-native'
import React, { useState, useEffect } from 'react'
import Card from '../component/Card'
import listData from '../../assets/data'

const HomeScreen = () => {
    // state pour afficher dans la searchbar
    const [searchText, setSearchText] = useState("")

    // state qui contient un tableau different en fonction de l'entrée utilisateur
    const [listDataSearch, setListDataSearch] = useState([""])

    const miseAjourData = (textValue) => {
        if (textValue != "") {
            setListDataSearch(listData.filter(element => Number(element.price) > Number(textValue)))
        } else {
            setListDataSearch(listData)
        }
        setSearchText(textValue)
    }

    useEffect(() => {
        setListDataSearch(listData)
    }, [])


    return (
        <>
            <TextInput
                style={styles.input}
                value={searchText}
                placeholder="Rechercher"
                onChangeText={(textValue) => miseAjourData(textValue)}

            />



            {/* 1ère façon de boucler */}

            {/* {listData.map((element, key) => {
                return <Card key={key} max={element} />
            })} */}

            {/* 2eme façon de boucler

FlatList permet de remplacer le .map, 
 - on choisi le nbr de colonnes
 - on met un style aux wrap
 - on importe data
 - renderItem permet de generer ta card, utiliser item et index dans ce cas */}

            {listDataSearch.length > 0
                ?

                <FlatList

                    numColumns={2}
                    columnWrapperStyle={styles.wrapperFlat}
                    data={listDataSearch}
                    renderItem={({ item, index }) => <Card key={index} max={item} />}
                />
                :
                <Text>Aucunes donées trouvé ! </Text>
            }
        </>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderColor: "#2699fb",
    },
    wrapperFlat: {
        justifyContent: "space-evenly",
        flexWrap: "wrap",
    }
})