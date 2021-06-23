import React from 'react';
import { BrowserRouter } from 'react-router-dom';




import GlobalStyle from './assets/styles/global';

import AppProvider from './hooks';
import Routes from './routes/index';


function App() {
  return (
    <AppProvider>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>

        <GlobalStyle />
    </AppProvider>
  );
}

export default App;
