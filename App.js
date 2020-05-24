import React from 'react';
import HomeScreen from './screens/HomeScreen';
import AddScreen from './screens/AddScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { ReactNativePropRegistry } from 'react-native';

const Stack = createStackNavigator();
export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Home' component={HomeScreen}></Stack.Screen>
          <Stack.Screen name='Add' component={AddScreen}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   fab: {
//     backgroundColor: '#f1c40f',
//     width: 60,
//     height: 60,
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderRadius: 20,
//     shadowOpacity: 0.2,
//     shadowColor: '#000000',
//     shadowRadius: 800,
//     shadowOffset: {
//       height: 2,
//       width: 2,
//     },
//     position: 'absolute',
//     right: 40,
//     bottom: 40,
//   },
// });
