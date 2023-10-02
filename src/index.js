import React from 'react';
import ReactDOM from 'react-dom/client';
import fruits from './foods'
import {Choice, Remove} from './helpers'
import reportWebVitals from './reportWebVitals';

let fruit = Choice(fruits)
let remaining = Remove(fruits, fruit)
console.log(`I'll take a ${fruit} please.`)
console.log(`Ok. Here's your ${fruit}.`)
console.log(`${remaining.length} fruits remaining.`)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  </React.StrictMode>
);

reportWebVitals();
