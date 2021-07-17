import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import UserContext from "./hooks/context/UserContext";
import Tickets from './models/tickets';
import React, { useState, useContext } from 'react';
import Amplify, {Auth} from 'aws-amplify';
import Register from './models/register';
// import { withAuthenticator } from 'aws-amplify-react-native';
// import config from './src/aws-exports'


// Amplify.configure({
//   ...config,
//   Analytics: {
//     disabled: true,
//   },
// });

//export default withAuthenticator(App)
export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  const [authenticated, setAuthenticated] = useState(false);
  const [user, setUser] = useState('');
  const [role, setRole] = useState('');
  const [asset, setAsset] = useState({id: ''});
  const [tickets, setTickets] = useState<Tickets[] | null>(null);
  const [registers, setRegisters] = useState<Register[] | null>(null);
  const [tag, setTag] = useState<string>('');

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <UserContext.Provider 
      value={{ tickets, 
              setTickets, 
              asset, setAsset, 
              authenticated, 
              setAuthenticated, 
              user, 
              setUser,
              tag,
              setTag, 
              role, 
              setRole,
              registers,
              setRegisters}}>
        <SafeAreaProvider>
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
        </SafeAreaProvider>
      </UserContext.Provider>
    );
  }
}
