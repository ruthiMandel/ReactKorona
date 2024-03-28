
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from './navbar.js';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ClientList } from './App/features/client/clientList.js';
import { OneClient } from './App/features/client/oneClient.js';
import { AddClient } from './App/features/client/addClient.js';
import { About } from './About.js'; 
function App() {
  let dispatch = useDispatch();
  useEffect(() => {
    
  
    const basket = JSON.parse(localStorage.getItem("busket"));
  
  }, [])
  return (
    <div className="App">
      <NavBar />
      <Routes>

        <Route path='/client' element={<ClientList />}>
        <Route path=':id' element={<OneClient />} />
        </Route> 
        <Route path='/AddClient' element={<AddClient />} />
        <Route path='/home' element={<About />} />

      </Routes>
    </div>
  );
}

export default App;