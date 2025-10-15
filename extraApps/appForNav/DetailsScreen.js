import { StyleSheet, Text, View ,Button} from 'react-native'
import React from 'react'
import { useNavigation } from 'expo-router'


const DetailsScreen = ({route}) => {
    const navigation = useNavigation()
    const {productId} = route.params
  return (
    <View style = {styles.container}>
      <Text style = {styles.smallText}>Detail Screen {productId}</Text>
      <Button 
        title = "Go to Home"
        //onPress = {()=> navigation.navigate("Home") }
        onPress = {()=> navigation.goBack() }
      ></Button>
      <Button 
        title = "Go to First Page removing all stacks"
       // onPress = {()=> navigation.pop(2) }
       onPress = {()=> navigation.popToTop() }
      ></Button>
      <Button 
        title = "Go to Home in Loop"
       onPress = {()=> navigation.push("Home") }
      ></Button>
      <Button 
        title = "replace to Home"
       onPress = {()=> navigation.replace("Home") } // so the current screen will get replaced with Home but the stack will not change
      ></Button>
    </View>

  )
}

export default DetailsScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent: 'center'
    },
    smallText:{
        color: 'black'
    }
})