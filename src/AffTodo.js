import React from 'react';
import $ from 'jquery'
import {selectedCat} from './AffCat'
import './App.css'

let texte ;
let time; 

$(".txt").keyup(() => {
	texte = $(".txt").val()
})
$(".date").keyup(() => {
	time = $(".date").val()
})



class AffTodo extends React.Component 
{

	constructor(props)
	{
		super(props);
		this.state = {
			liste: [{texte : "Hi!", cat:["Boulot", "Maison", "Ecole", "Devoir", "Personnel", "Game"], date: "Samedi soir"}, {texte : "Hi!", cat:["Boulot", "Maison", "Ecole", "Devoir", "Personnel", "Game"], date: "Samedi matin"}, {texte : "Hi!", cat:["Boulot", "Maison", "Ecole", "Devoir", "Personnel", "Game"], date: "Samedi soir"}, {texte : "Hi!", cat:["Boulot", "Maison", "Ecole", "Devoir", "Personnel", "Game"], date: "Samedi matin"}, {texte : "Hi!", cat:["Boulot", "Maison", "Ecole", "Devoir", "Personnel", "Game"], date: "Samedi soir"}, {texte : "Hi!", cat:["Boulot", "Maison", "Ecole", "Devoir", "Personnel", "Game"], date: "Samedi matin"}],
		}
	};
	render(){
		return ( 
		this.state.liste.map((item, ind) => {
			return (
				<div key = {ind} className = "item"> 
				<div className = "desc">
				<p> Nom : </p> <p>{item.texte}</p>
				</div>
				<div className = "desc">
				<p> Categories : </p><ListCat list = {item.cat}/>
				</div>
				<div className = "desc">
				<p> Dates : </p> <p>{item.date}</p>
				</div>
				</div>
				) 
		})
		)
	}
}


function ListCat(props){
	return props.list.map((item, ind) => {
			return <p className = "item-cat" key = {ind}> {item} </p>
		})
};


export default AffTodo;