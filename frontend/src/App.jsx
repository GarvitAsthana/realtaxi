import React from 'react';
import {Route , Routes} from 'react-router-dom';
import Start from './pages/Start';
import UserLogin from './pages/UserLogin';
import UserSignUp from './pages/usersignup';
import CaptainLogin from './pages/CaptainLogin';
import CaptainSignUp from './pages/CaptainSignup';
import Home from './pages/home';

const App = () => {
  return (
    <div >
     <Routes>
      <Route path='/' element={<Start/>} />
      <Route path='/login' element={<UserLogin/>} />
      <Route path='/signup' element={<UserSignUp/>} />
      <Route path='/captain-login' element={<CaptainLogin/>} />
      <Route path='/captain-signup' element={<CaptainSignUp/>} />
      <Route path='/home' element={<Home />} />
      

     </Routes>
    </div> 
  );
}

export default App;
