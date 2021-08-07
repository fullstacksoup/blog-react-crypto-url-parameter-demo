import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import MainLayoutWithNav from './MainLayout/MainLayoutWithNav';
import './App.css';


class App extends Component {  
  render() {
    
    return (      
      <div className="App">
        <React.Fragment>   
          <BrowserRouter>    
            <MainLayoutWithNav />                  
          </BrowserRouter>
        </React.Fragment>       
      </div>
    );
  }
}

export default App;
