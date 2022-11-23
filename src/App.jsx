import {useState} from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Login from './Components/Login';
import Listado from './Components/Listado';
import Registro from './Components/Registro';
import Rordenes from './Components/Rordenes';
import Actualizacion from './Components/Actualizacion';
import  './Components/bootstrap.css';

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/Registro' element={<Registro/>}></Route>
        <Route path='/Rordenes' element={<Rordenes/>}></Route>
        <Route path='/Actualizacion' element={<Actualizacion/>}></Route>
        <Route path='/Listado' element={<Listado/>}></Route>
      </Routes>
    </BrowserRouter>

  ); 
}
export default App
