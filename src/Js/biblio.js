import $ from 'jquery'
import React, { Component } from 'react'
// Elle supprime un element d'un tableau
export function arrayRemove(arr, value) { return arr.filter(function(ele){ return ele !== value; });}

// affiche une valeur en console
export let AffCons = (val) => {console.log(val)}

// Pour le passage d'un onglet a un autre
export const AfficheOnglet = (a) => {

		let li = a.parentNode
		let div = a.parentNode.parentNode.parentNode

		if (li.classList.contains('active')){
			return false;
		}

		div.querySelector('.tab .active').classList.remove('active')
		li.classList.add('active')

		div.parentNode.querySelector('.nav-content.active').classList.remove('active')
		div.parentNode.querySelector(a.getAttribute('href')).classList.add('active')
}

// Pour faire disparaitre la description de toute les taches
export const DisplayAzero = (idparent) => {
	// let parent = document.querySelector(idparent)
	let itemlist = $(idparent).find('.item')
	for(var k = 0; k<itemlist.length; k++)
	{
		let p = $(itemlist[k]).find('.tline').find('p')
		p.css('display', 'none')
	}
}

export const GetTodayDate = () => {
   var tdate = new Date();
   var dd = tdate.getDate(); //yields day
   var MM = tdate.getMonth(); //yields month
   var yyyy = tdate.getFullYear(); //yields year

   var currentDate = null

   if (( MM+1) < 10 && (dd < 10)) 
   {
   		currentDate= "0" + dd + "/0" +( MM+1) + "/" + yyyy;
   }
   else if (( MM+1) > 10 && (dd < 10))
   {
   		currentDate= "0" + dd  + ( MM+1) + "/" + yyyy;
   }
   else if (( MM+1) < 10 && (dd > 10)) {

   		currentDate=  dd + "/0" +( MM+1) + "/" + yyyy;
   }
   else
   {
   		currentDate= dd + "/" +( MM+1) + "/" + yyyy;
   }
   return currentDate;
}

// Dechets
const Tachefai = props => {

	const line = props.Data.map((val, id) => {
		return (
			<div key = {id} className = 'item'>
				<div className = 'fline'>
					<h5>{val.libelle}</h5>
					<span className="material-icons orange600 md-18">close</span>
				</div>
				<div className = 'sline'>
					<p  className = 'sline-date'>Fait le : {val.date}</p>
					<p className = 'sline-time'>A : {val.time}</p>
				</div>
				<div className = 'tline'>
					<p>{val.descripion}</p>
				</div>
			</div>
		)
	})
	return (
		<div>{line}</div>
	)
}
const Tachefaire = props => {

	const line = props.Data.map((val, id) => {
		return (
			<div key = {id} className = 'item'>
				<div className = 'fline'>
					<h5>{val.libelle}</h5>
					<span className="material-icons orange600 md-18">close</span>
				</div>
				<div className = 'sline'>
					<p  className = 'sline-date'>A faire le : {val.date}</p>
					<p className = 'sline-time'>A : {val.time}</p>
				</div>
				<div className = 'tline'>
					<p className = "block-with-text">{val.descripion}</p>
				</div>
			</div>
		)
	})
	return (
		<div>{line}</div>
	)
}

// export {arrayRemove, AffCons, ValInput};