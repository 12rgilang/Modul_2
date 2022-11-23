import react from 'react';
import { Routes,Route } from 'react-router-dom'

import Profile from './pages/profile/profile';
import Home from './pages/home/home';

// state harus didalam class, jika menggunakan class component

class App extends react.Component {
  render(){
    return(
      <>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </>
    );
  }
}
  
export default App;
