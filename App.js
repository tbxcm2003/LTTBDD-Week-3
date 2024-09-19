import React, { useState } from 'react';
import FirstScreen from './components/FirstScreen';
import FirstScreen1a from './components/FirstScreen1a';
import ForgetPassword from './components/ForgetPassword';
import CodeVerification from './components/CodeVerification';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('FirstScreen');

  const renderScreen = () => {
    switch (currentScreen) {
      case 'FirstScreen':
        return <FirstScreen />;
      case 'FirstScreen1a':
        return <FirstScreen1a />;
      case 'ForgetPassword':
        return <ForgetPassword />;
      case 'CodeVerification':
        return <CodeVerification />;
      default:
        return <FirstScreen />;
    }
  };

  return (
    <div>
      <nav>
        <button onClick={() => setCurrentScreen('FirstScreen')}>First Screen</button>
        <button onClick={() => setCurrentScreen('FirstScreen1a')}>FirstScreen 1a</button>
        <button onClick={() => setCurrentScreen('ForgetPassword')}>Forget Password</button>
        <button onClick={() => setCurrentScreen('CodeVerification')}>Code Verification</button>
      </nav>
      <div>
        {renderScreen()}
      </div>
    </div>
  );
}