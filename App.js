import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NavigationKeys from './src/navigation/keys';
import Tabs from './src/navigation/TabNavigator';
import { Provider } from 'react-redux';
import { persistor, store } from './src/store/configureStore';
import { PersistGate } from 'redux-persist/integration/react';
// import Profile from './src/screens/Profile/Profile.class';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name={NavigationKeys.tabs} component={Tabs} />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  )
}

export default App;