import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';
import {Auth0Provider} from '@auth0/auth0-react'

//permite crear variables con el cliente y el dominio queproporciona Auth0
const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT;

console.log(domain, clientId);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider 
    domain={domain} 
    clientId={clientId} 
    redirectUri={window.location.origin}
    >
      <App/>
    </Auth0Provider>
  </React.StrictMode>
);

