import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NavigationKeys from './src/navigation/keys';
import Tabs from './src/navigation/TabNavigator';
// import Profile from './src/screens/Profile/Profile.class';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name={NavigationKeys.tabs} component={Tabs} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;