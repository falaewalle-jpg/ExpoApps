import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useState } from "react";
import { SafeAreaView } from 'react-native-safe-area-context';
const index = () => {
  const [tic,setTic] = useState([['','',''],['','',''],['','','']]);
  const [turn,setTurn] = useState(false) // turn of O
  const [winIndex,setWinIndex] = useState(-1)
  const winIndexData = [[[0,0],[0,1],[0,2]],[[1,0],[1,1],[1,2]],[[2,0],[2,1],[2,2]],[[0,0],[1,0],[2,0]],[[0,1],[1,1],[2,1]],[[0,2],[1,2],[2,2]],[[0,0],[1,1],[2,2]],[[0,2],[1,1],[2,0]],]

  const helper = ()=>{
    for(let i = 0;i<3;i++){
      if(tic[i][0] == tic[i][1] && tic[i][1] == tic[i][2] && tic[i][2] != ''){
        setWinIndex(i);
      }
    }
    for(let i = 0;i<3;i++){
      if(tic[0][i] == tic[1][i] && tic[1][i] == tic[2][i] && tic[0][i] != ''){
        setWinIndex(i+3);
      }
    }
    if(tic[1][1] == tic[0][0] && tic[1][1] == tic[2][2] && tic[1][1] != ''){
      setWinIndex(6);
    }
    if(tic[1][1] == tic[2][0] && tic[1][1] == tic[0][2] && tic[1][1] != ''){
      setWinIndex(7);
    }
    let emptyString = false;
    for(let e of tic){
      for(let it of e){
        if(it == ''){
          emptyString = true
          break
        }
      }
    }
    if(!emptyString)setWinIndex(8) 
  }
  const  handleReset = () => {
    // let winStatus = false;
    setTic([['','',''],['','',''],['','','']]);
    setTurn(false)
    setWinIndex(-1);
  }
  const handlePress = (i,j) =>{
    if(tic[i][j] === '' && winIndex == -1){
      if(turn){
        setTic(()=>{
          tic[i][j] = 'O'
          return tic;
        })
      }else{
        setTic(()=>{
          tic[i][j] = 'X'
          return tic;
        })
      }
      setTurn(e=>!e)
      helper()
    }else return;
  }

function handleColor(i, j) {
  if (winIndex === -1 || winIndex === 8) return 'green';
  const array = winIndexData[winIndex];
  for (let e of array) {
    if (e[0] === i && e[1] === j) return 'orange';
  }
  return 'green';
}


  return (
    <SafeAreaView>
      <View style = {styles.mainContainer}>
        <View style = {styles.secondaryContainer}>
          <TouchableOpacity style = {[styles.pressBox , {backgroundColor:(handleColor(0,0))}]} onPress={()=>{handlePress(0,0)}} >
            <Text>{tic[0][0]}</Text>
          </TouchableOpacity>
          <TouchableOpacity style = {[styles.pressBox , {backgroundColor:(handleColor(0,1))}]} onPress={()=>{handlePress(0,1)}} >
            <Text>{tic[0][1]}</Text>
          </TouchableOpacity>
          <TouchableOpacity style = {[styles.pressBox , {backgroundColor:(handleColor(0,2))}]} onPress={()=>{handlePress(0,2)}} >
            <Text>{tic[0][2]}</Text>
          </TouchableOpacity>
        </View>
        <View style = {styles.secondaryContainer}>
          <TouchableOpacity style = {[styles.pressBox , {backgroundColor:(handleColor(1,0))}]} onPress={()=>{handlePress(1,0)}} >
            <Text>{tic[1][0]}</Text>
          </TouchableOpacity>
          <TouchableOpacity style = {[styles.pressBox , {backgroundColor:(handleColor(1,1))}]} onPress={()=>{handlePress(1,1)}} >
            <Text>{tic[1][1]}</Text>
          </TouchableOpacity>
          <TouchableOpacity style = {[styles.pressBox , {backgroundColor:(handleColor(1,2))}]} onPress={()=>{handlePress(1,2)}} >
            <Text>{tic[1][2]}</Text>
          </TouchableOpacity>
        </View>
        <View style = {styles.secondaryContainer}>
          <TouchableOpacity style = {[styles.pressBox , {backgroundColor:(handleColor(2,0))}]} onPress={()=>{handlePress(2,0)}} >
            <Text>{tic[2][0]}</Text>
          </TouchableOpacity>
          <TouchableOpacity style = {[styles.pressBox , {backgroundColor:(handleColor(2,1))}]} onPress={()=>{handlePress(2,1)}} >
            <Text>{tic[2][1]}</Text>
          </TouchableOpacity>
          <TouchableOpacity style = {[styles.pressBox , {backgroundColor:(handleColor(2,2))}]} onPress={()=>{handlePress(2,2)}} >
            <Text>{tic[2][2]}</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={handleReset}>
          <View style = {[styles.pressBox,{backgroundColor:'gray'}]}>
            <Text>Reset</Text>
          </View>
        </TouchableOpacity>
        <View>
          <Text>{(winIndex != -1)?(winIndex==8?"draw":tic[winIndexData[winIndex][0][0]][winIndexData[winIndex][0][1]] + ' won'):''}</Text>
        </View>
    </View>
    </SafeAreaView>
  )
}

export default index

const styles = StyleSheet.create({
  mainContainer : {

  },
  secondaryContainer:{
    display : 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  pressBox:{
    padding: 40,
    margin: 10,
    borderWidth: 2,
    borderRadius: 10,
  }
})



