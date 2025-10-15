import {nativeStackScreenProps} from '@react-navigation/native-stack'
import { StyleSheet, Text, View ,Button} from 'react-native'
import React from 'react'

const HomeScreen = ({navigation}) => {
  return (
    <View style = {styles.container}>
      <Text  style = {styles.smallText}>HomeScreen</Text>
      <Button 
        title= 'go to details'
        // onPress={()=> navigation.navigate("Details",{productId:"86"})}
        //onPress={()=> navigation.navigate("Details")}
        onPress = {()=> navigation.push("Details" , {productId: "42"}) }
      ></Button>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent: 'center'
    },
    smallText:{
        color: 'Green'
    }
})