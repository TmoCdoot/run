import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, View, StyleSheet, SafeAreaView, TextInput, Button } from 'react-native';

import SingIn from './src/components/singIn';
import SingUp from './src/components/singUp';
import Slider from './src/components/slider';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SingIn" component={SingIn} options={{header: () => null}}/>
        <Stack.Screen name="SingUp" component={SingUp} options={{header: () => null}}/>
        <Stack.Screen name="Slider" component={Slider} options={{header: () => null}}/>
      </Stack.Navigator>
    </NavigationContainer> 
  )
}



export default App;
