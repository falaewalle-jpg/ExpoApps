import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Cards = ({color}) => {
  return (
    <View style = {[styles.cardStyle,{backgroundColor:color}]}>
      <Text>MyCard</Text>
    </View>
  )
}

export default Cards

const styles = StyleSheet.create({
  cardStyle: {
    flex: 1,
    margin: 10,
    padding: 10,
    height:100,
    width: 100,
    alignItems:'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 10,
  }
})