import 'bootstrap/dist/css/bootstrap.min.css'
import 'popper.js'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import * as biblio from './Js/biblio'
import * as serviceWorker from './serviceWorker'
import App from './Js/app'
import React from 'react'
import ReactDOM from 'react-dom'
import './css/index.css'

ReactDOM.render(
  <React.StrictMode>
  	<App />
  </React.StrictMode>,
  document.getElementById('idroot')
);

let tabs = document.querySelectorAll('.tab li')
for (var i=0; i < tabs.length; i++)
{
	tabs[i].addEventListener("click", biblio.OnClickOnglet)
}
biblio.ResetModal()
serviceWorker.register()