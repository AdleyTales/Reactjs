// var aa = require('./aa.js');
// console.log(aa);


// var [a,b,c] = [10000,200,300]
// console.log(a)

// import {b} from './aa.js';
// console.log(b);


import React from 'react';
import {render} from 'react-dom';

import App from './App.js';
import MyCompon from './MyCompon.js';

render(
  <App></App>,
  document.getElementById('app')
)
