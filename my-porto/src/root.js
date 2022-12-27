import React, { useState } from 'react';
import SplashScreen from './pages/splashscreen/splashscreen';
import App from './App';

function Root() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      {!isLoaded && <SplashScreen onLoad={() => setIsLoaded(true)} />}
      {isLoaded && <App />}
    </>
  );
}

export default Root;