import React from 'react';
import Home from './src/screens/Home/Home';
import Profile from './src/screens/Profile/Profile';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NavigationKeys from './src/navigation/keys';
// import Profile from './src/screens/Profile/Profile.class';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={NavigationKeys.profile} component={Profile} options={{
          headerShown: false,
        }} />
        <Stack.Screen name={NavigationKeys.home} component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;