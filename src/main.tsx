import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './view/app';
import './styles/rm.global.css'

ReactDOM.render(
  <App name="TypeScript" enthusiasmLevel={10}/>,
  document.getElementById('root')
);
