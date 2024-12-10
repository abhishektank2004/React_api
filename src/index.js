import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './parts/Layout';
import Home_page from './pages/Home_page';
import Table from './pages/Table';
import Cal from './pages/Cal';
import Calculator from './pages/Cal';
import Crudop from './pages/Crudop';
import Detail from './pages/Detail';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home_page/>} />
          <Route path="/detail/:id" element={<Detail/>} />
          <Route path='/table' element={<Table/>} />
          <Route path='/cal' element={<Calculator/>} />
          <Route path='/crudop' element={<Crudop/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </>
);