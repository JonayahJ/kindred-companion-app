import React from 'react';
import 'fontsource-roboto';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './Home';
import Login from './Login';
import Register from './Register'

function App(){
    return (
        <Router>
            <div>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/Register" component={Register} />
            </div>
        </Router>
    )
}

export default App;