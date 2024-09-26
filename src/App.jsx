import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

       
import { Imagen1 } from './components/Imagen1';
import { Imagen2 } from './components/Imagen2';
import { Imagen3 } from './components/Imagen3';
import { Imagen4 } from './components/Imagen4';
import { Imagen5 } from './components/Imagen5';
import { Imagen6 } from './components/Imagen6';
import { Navigation } from './components/Navigation';


function App() {

  console.log ("app component loaded");

  return (
    <>
      <BrowserRouter>
        <div>
          <h1 className='text-center my-3'>Gallery Project</h1>
        </div>
        <div className='container d-flex justify-content-center'>
          <Routes>
            <Route path='/imagen1' element={<Imagen1 className='main-img-container'/>} />
            <Route path='/imagen2' element={<Imagen2 className='main-img-container'/>} />
            <Route path='/imagen3' element={<Imagen3 className='main-img-container'/>} />
            <Route path='/imagen4' element={<Imagen4 className='main-img-container'/>} />
            <Route path='/imagen5' element={<Imagen5 className='main-img-container'/>} />
            <Route path='/imagen6' element={<Imagen6 className='main-img-container'/>} />
          </Routes>
        </div>
        <div className='container'>
          <Navigation />
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;