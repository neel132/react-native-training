import React, {createContext, useEffect, useMemo, useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import messaging from "@react-native-firebase/messaging";
import NavigationKeys from './src/navigation/keys';
import Tabs from './src/navigation/TabNavigator';
import { Provider } from 'react-redux';
import { persistor, store } from './src/store/configureStore';
import { PersistGate } from 'redux-persist/integration/react';
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
  };
  const cachedValue = useMemo(() => ({
    theme,
    changeTheme,
  }), [theme])
  useEffect(() => {
    messaging().getToken().then(fcmToken => console.log("FCM Token => ", fcmToken))
  })
  useEffect(() => {
    // For listening a remote notification in foreground...
    const unsubscribe = messaging().onMessage(async(remoteMessage) => {
      console.log("Remote Messaging -", JSON.stringify(remoteMessage));
    })
    return unsubscribe;
  }, []);
  useEffect(() => {
    // For listening a remote notification in background...
    const unsubscribe = messaging().setBackgroundMessageHandler(async remoteMessage => {
      console.log('Message handled in the background!', remoteMessage);
    });
    return unsubscribe;
  }, []);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeContext.Provider value={cachedValue}>
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