import React from 'react';
import {Route , Routes} from 'react-router-dom';
import Start from './pages/Start';
import UserLogin from './pages/UserLogin';
import UserSignUp from './pages/UserSignUp';
import CaptainLogin from './pages/CaptainLogin';
import CaptainSignUp from './pages/CaptainSignup';
import Home from './pages/home';
import UserProtectWrapper from './pages/UserProtectWrapper';
import UserLogout from './pages/UserLogout';

const App = () => {
  return (
    <div >
     <Routes>
      <Route path='/' element={<Start/>} />
      <Route path='/login' element={<UserLogin/>} />
      <Route path='/signup' element={<UserSignUp/>} />
      <Route path='/captain-login' element={<CaptainLogin/>} />
      <Route path='/captain-signup' element={<CaptainSignUp/>} />
      <Route path='/home' element={
        <UserProtectWrapper>
          <Home/>
        </UserProtectWrapper>
      } />

      <Route path = '/user/logout' element={
        <UserProtectWrapper>
          <UserLogout/>
        </UserProtectWrapper>
      } />
      

     </Routes>
    </div> 
  );
}

export default App;
