import React, {Suspense, lazy} from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import styles from './SignInAttachment/SignInAttachment.module.css'



const SignInAttachment = React.lazy(() => import('./SignInAttachment'));


function App() {
  return (
    <Router>
      <Suspense fallback={<div> Loading...</div>}>
      <Switch>
    
      <Route exact path="/" component={SignInAttachment} />
    
    </Switch>
    </Suspense>
    </Router>
  );
}

export default App;
