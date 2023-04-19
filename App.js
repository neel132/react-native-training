import React, {createContext, useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NavigationKeys from './src/navigation/keys';
import Tabs from './src/navigation/TabNavigator';
import { Provider, useSelector } from 'react-redux';
import { persistor, store } from './src/store/configureStore';
import { PersistGate } from 'redux-persist/integration/react';
// import Profile from './src/screens/Profile/Profile.class';
export const ThemeContext = createContext(null);
const Stack = createNativeStackNavigator();
const App = () => {
  const [theme, setTheme] = useState('light');
  const changeTheme = () => {
    let changeThemeTo = "light";
    if(theme === 'light') {
      changeThemeTo = "dark"
    }
    setTheme(changeThemeTo)
  }
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeContext.Provider value={{theme, changeTheme}}>
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                headerShown: false,
              }}
            >
              <Stack.Screen name={NavigationKeys.tabs} component={Tabs} />
            </Stack.Navigator>
          </NavigationContainer>
        </ThemeContext.Provider>
      </PersistGate>
    </Provider>
  )
}

export default App;