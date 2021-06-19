import React from 'react';

import capa from './assets/images/capa.svg';
import Capturar from './assets/images/Capturar.png';
import logo from './assets/images/logo.svg';
import perfil from './assets/images/perfil.svg';


import GlobalStyle from './assets/styles/global';
import Login from './pages/login/index'


function App() {
  return (
    <div className="App">
      <Login />

      <GlobalStyle />
    </div>
  );
}

export default App;
