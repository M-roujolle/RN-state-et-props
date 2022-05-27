import React from "react";
import { SafeAreaView, StyleSheet } from 'react-native'
import HomeScreen from "./src/screen/HomeScreen";


const App = () => (
  <SafeAreaView style={styles.container}>

    <HomeScreen />

  </SafeAreaView>
)


export default App


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 10,
  }
})