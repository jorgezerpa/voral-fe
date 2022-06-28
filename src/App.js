import React from 'react';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import { Home, Store, NotFound } from './pages';

import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material'
import myTheme from './themes/myTheme';

const App = () => {
  return (
    <>
    <ThemeProvider theme={myTheme} >
        <CssBaseline />
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/store' element={<Store />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Router>
    </ThemeProvider>
    </>
  )
}

export default App