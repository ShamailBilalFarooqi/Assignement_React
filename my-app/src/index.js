import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {Navigation,
        Footer} from './components';
ReactDOM.render(
  <><Router>
    <Navigation />
    <Footer />
  </Router><React.StrictMode>
      <App />
    </React.StrictMode></>,
  document.getElementById('root')
);
serviceWorker.unregister();