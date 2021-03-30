import React from 'react';
import 'fontsource-roboto';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './Home';
import Login from './Login';
import Register from './Register'
import CharacterCreation from './CC/CharacterCreation';
// import { AuthProvider } from '../authentication';

function App(){
    return (
        // <AuthProvider>
            <Router>
                <div>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/character-creation" component={CharacterCreation} />
                </div>
            </Router>
        // </AuthProvider>
    )
}

export default App;