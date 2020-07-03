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

// Installation process 
let deferredPrompt;
const addBtn = document.querySelector('.plus-button');
addBtn.style.display = 'none';
window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
  // Update UI to notify the user they can add to home screen
  addBtn.style.display = 'block';
  setTimeout(() => {
	addBtn.style.display = 'none'
  }, 60000)
  addBtn.addEventListener('click', (e) => {
    // hide our user interface that shows our A2HS button
    addBtn.style.display = 'none';
    // Show the prompt
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
			console.log('User accepted the A2HS prompt');
			alert("Application installee !")
        } else {
          console.log('User dismissed the A2HS prompt');
        }
        deferredPrompt = null;
	  });	
  });
});

serviceWorker.register()