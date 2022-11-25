import react from 'react';
import { Routes,Route } from 'react-router-dom'

import Chakra from './pages/chakra/chakra';
import Profile from './pages/profile/profile';
import Home from './pages/home/home';
import Home1 from './pages/home/home1';
import Register from './pages/Register/register';

// state harus didalam class, jika menggunakan class component

class App extends react.Component {
  render(){
    return(
      <>
        <Routes>
          <Route path='/' element={<Home1 />} />
          <Route path='/register' element={<Register />} />
        </Routes> 
      </>
    );
  }
}
  
export default App;
