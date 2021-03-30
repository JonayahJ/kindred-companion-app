import React from 'react';
import ReactDOM from 'react-dom';
import 'fontsource-roboto';
import Register from './components/Register';
// import Login from './components/Login';

const App = () => {
  return (
    <Register />
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
