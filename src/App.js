import React, { Component } from 'react';
import NavBar from './Components/Navbar/NavBar';
import Search from './Components/Search/Search'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';

class App extends Component {
  render() {
    return(
      <MuiThemeProvider>
        <div>
        <NavBar />
        <Search />
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App;
