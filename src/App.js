import React from 'react';
import SignInPage from './components/Sign-In/Sign-In-page';
import Dashboard from './components/Dashboard/Dashboard';
import {Routes,Route} from 'react-router-dom'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<SignInPage/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
    </>
  );
}

export default App;
