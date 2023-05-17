import React, { useState } from 'react'
import axios from 'axios';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Main from './views/Main';
import Detail from './components/Detail';
import Update from './components/Update';
// import PersonForm from './components/PersonForm';
// import PersonList from './components/PersonList';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
              {/* /* This is INCORRECT. Each component in the Router needs its
                  own unique path attribute. */
                /* The CORRECT way to do this is in the next example code block */ }
          <Route element={<Main />} path="/home" default />
          <Route element={<Detail />} path="/people/:id" />
          <Route element={<Update/>} path="/people/edit/:id"/>
          <Route element={<Navigate to ="/home" />} path="/"/>
                {/* /* The :id part of our path is a variable that we 
            must give value to.  */}
          {/* <Route element={<PersonList />} path="/home" /> */}
        </Routes>
    	</BrowserRouter>
    </div>
  );
}

export default App;
