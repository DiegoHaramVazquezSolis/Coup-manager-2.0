import React, { Component } from 'react';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import NavBar from './Views/NavBar/NavBar';
import Routes from './Routes';

class App extends Component {
  render() {
    return (
      <div>
        <CssBaseline />
        <NavBar />
        <div className="container-fluid">
          <br/>
          <Routes />
        </div>
      </div>
    );
  }
}

export default App;
