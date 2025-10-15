import React from "react";
import { View, Text, useColorScheme,StyleSheet, ScrollView } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";
import Cards from "./Cards";
export default function App() {
  return (
    <SafeAreaView>
    <View style = {styles.container}>
      <View >
        <Text>Colors</Text>
        <ScrollView horizontal>
          <Cards color = {'red'}/>
          <Cards color = {'green'}/>
          <Cards color = {'orange'}/>
          <Cards color = {'blue'}/>
          <Cards color = {'yellow'}/>
          <Cards color = {'pink'}/>
          <Cards color = {'brown'}/>
          <Cards color = {'purple'}/>
        </ScrollView>
      </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: 'gray',
    height: 200,


  }
})