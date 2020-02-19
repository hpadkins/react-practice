import 'react-native-gesture-handler';
import React from 'react';
import Main from './Screens/Main'
import Second from './Screens/Second'
import Third from './Screens/Third'
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={Main}
          options={{title: 'Back'}}
        />
        <Stack.Screen
          name="Second"
          component={Second}
          options={{title: 'Back'}}
        />
        <Stack.Screen
          name="Third"
          component={Third}
          options={{title: 'Back'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
