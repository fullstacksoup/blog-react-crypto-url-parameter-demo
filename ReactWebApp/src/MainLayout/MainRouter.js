import React from 'react';
import { BrowserRouter as Router, Switch, Route  } from 'react-router-dom';
import DataTable from '../Components/DataTable';
import Details from '../Components/Details';

const myComponent = ({ history }) => {

  history.listen((location, action) => {
      // location is an object like window.location
      console.log(action, location.pathname, location.state)
  });

  return <div>...</div>;
};



// import Parent from './../Components/Test/Parent';
export default function MainRouter(props) {  
  
  return (
    <div>                 
      <Switch>
        
          <Route exact path="/" component={DataTable} />                          
          <Route path="/table" component={DataTable} />   
          <Route path="/details/:id/:hash" component={Details} />           
      </Switch>    
    </div>
  );
}
