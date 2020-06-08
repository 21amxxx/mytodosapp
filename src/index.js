import 'bootstrap/dist/css/bootstrap.min.css';
// eslint-disable-next-line
import $ from 'jquery';
import 'popper.js'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import * as biblio from './biblio'

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {AffCat} from './AffCat';
import AffTodo from './AffTodo';

ReactDOM.render(
  <React.StrictMode>
    <AffCat/>
  </React.StrictMode>,
  document.getElementById('list-cat')
);





$('#send').click(() => {
	ReactDOM.render(
  <React.StrictMode>
    <AffTodo/>
  </React.StrictMode>,
  document.getElementById('todo-list')
);	
})
