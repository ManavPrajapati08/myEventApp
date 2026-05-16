import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider, useSelector } from 'react-redux';
import store from './src/redux/store';
import { LoginScreen } from './src/screens/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import { MainTabNavigator } from './src/navigation/MainTabNavigator';

function AppContent() {
  const { isAuthenticated } = useSelector((state: any) => state.auth);
  const [showEvents, setShowEvents] = useState(false);

  const handleLoginSuccess = () => {
    setShowEvents(true);
  };

  if (isAuthenticated || showEvents) {
    return <MainTabNavigator />;
  }

  return <LoginScreen onLoginSuccess={handleLoginSuccess} />;
}

function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <StatusBar barStyle="dark-content" />
        <NavigationContainer>
          <AppContent />
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
}

export default App;
