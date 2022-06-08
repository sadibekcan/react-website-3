import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Contact from './components/Contact'


ReactDOM.render(
  <Router>
    <Routes>
      <Route path='/' element={ <App/> }/>
      <Route path='/contact' element={<Contact/>} />
    </Routes>
  </Router>,


  document.getElementById('root')
);

