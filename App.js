import React, { useState } from 'react';
import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';
import ControlPanel from './ControlPanel';

const App = () => {
  const [currentScreen, setCurrentScreen] = useState('login');

  const handleLogin = () => {
    setCurrentScreen('home');
  };

  const openControlPanel = () => {
    setCurrentScreen('controlPanel');
  };

  const goBackToHome = () => {
    setCurrentScreen('home');
  };

  if (currentScreen === 'login') {
    return <LoginScreen onLogin={handleLogin} />;
  } else if (currentScreen === 'home') {
    return <HomeScreen onFanPress={openControlPanel} />;
  } else if (currentScreen === 'controlPanel') {
    return <ControlPanel onBack={goBackToHome} />;
  }
};

export default App;
