import 'bootstrap/dist/css/bootstrap.min.css';
// eslint-disable-next-line
import $ from 'jquery';
import 'popper.js'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import * as biblio from './Js/biblio'
import App from './Js/app'


import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';

ReactDOM.render(
  <React.StrictMode>
  	<App />
  </React.StrictMode>,
  document.getElementById('idroot')
);


(() => {
	let tabs = document.querySelectorAll('.tab a')

	for (var i=0; i < tabs.length; i++)
	{
		tabs[i].addEventListener("click", function (e) {
			biblio.AfficheOnglet(this)
			biblio.DisplayAzero("#afaire")
			biblio.DisplayAzero("#complete")
		})
	}

	let liste = document.querySelectorAll('.item')
	
	for (var j=0; j< liste.length; j++)
	{
		liste[j].addEventListener('click', function (a){

			let parent = this.parentNode
			if ($(this).find('.tline').find('p').css('display') === 'none')
			{
				if($(this).find('.tline').find('p').text() !== "")
				{
					biblio.DisplayAzero(parent)
					$(this).find('.tline').find('p').css('display', 'block')
				}
			}
			else
			{
				$(this).find('.tline').find('p').css('display', 'none')
			}
		})
	}

})()

