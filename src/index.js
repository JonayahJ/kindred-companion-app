import React from 'react';
import ReactDOM from 'react-dom';
import 'fontsource-roboto';
import SignUp from './components/Register';
// import SignIn from './components/Login';

const App = () => {
  return (
    <SignUp />
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
