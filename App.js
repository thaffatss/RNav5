import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

// Importando os navigators.
import MainTab from './src/navigators/MainTab';

function App() {
  return (
    <NavigationContainer>
      <MainTab />
    </NavigationContainer>
  );
}

export default App;
