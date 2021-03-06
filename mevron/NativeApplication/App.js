import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Routes from './src/routes';

const App = () => (
    <SafeAreaProvider>
        <StatusBar backgroundColor="#fff" barStyle="dark-content" />
        <Routes />
    </SafeAreaProvider>
);
export default App;
