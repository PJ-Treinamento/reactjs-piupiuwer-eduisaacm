import React from 'react';
import { BrowserRouter } from 'react-router-dom';


import capa from './assets/images/capa.svg';
import Capturar from './assets/images/Capturar.png';
import logo from './assets/images/logo.svg';
import perfil from './assets/images/perfil.svg';


import GlobalStyle from './assets/styles/global';
import Login from './pages/login/index';
import Routes from './routes/index';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
      <GlobalStyle />
    </div>
  );
}

export default App;
