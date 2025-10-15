import React, { useEffect, useState } from 'react';
import { View, Text, Image, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
const Tab = createBottomTabNavigator();



function CartScreen() {
  return (
    <View style={styles.center}>
      <Text>Cart Screen (coming soon)</Text>
    </View>
  );
}

function AccountScreen() {
  return (
    <View style={styles.center}>
      <Text>Account Screen (coming soon)</Text>
    </View>
  );
}

export default function App() {
  return (

      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Cart" component={CartScreen} />
        <Tab.Screen name="Account" component={AccountScreen} />
      </Tab.Navigator>

  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1, justifyContent: 'center', alignItems: 'center',
  },
  card: {
    width: '100%',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ddd',
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 70, height: 70, borderRadius: 8, marginRight: 10,
  },
  title: {
    fontSize: 16, fontWeight: 'bold',
  },
});
