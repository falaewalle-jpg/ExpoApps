import * as React from 'react';
import { View, Text ,Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NaiveStackScreenProps} from '@react-navigation/native-stack'
import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';

const Stack = createNativeStackNavigator();



export default function App() {
  return (
    //  <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen 
        name = 'Home' 
        component={HomeScreen}
        options={{
          title: "Trending Products"
        }}
        />
        <Stack.Screen 
        name = 'Details' 
        component={DetailsScreen}
        options={{
          title: "Product Details"
        }}
        />
      </Stack.Navigator>

    //  </NavigationContainer>
  );
}
