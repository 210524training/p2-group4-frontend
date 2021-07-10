import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import UserContext from "./hooks/context/UserContext";
import React, { useState, useContext } from 'react';
import Amplify, {Auth} from 'aws-amplify';
import { withAuthenticator } from 'aws-amplify-react-native';
import config from './src/aws-exports'

Amplify.configure({
  ...config,
  Analytics: {
    disabled: true,
  },
});

//export default withAuthenticator(App)
export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  const [authenticated, setAuthenticated] = useState(false);
  const [user, setUser] = useState('');
  const [role, setRole] = useState('');
  const [asset, setAsset] = useState({});

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <UserContext.Provider value={{ asset, setAsset, authenticated, setAuthenticated, user, setUser, role, setRole }}>
        <SafeAreaProvider>
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
        </SafeAreaProvider>
      </UserContext.Provider>
    );
  }
}
