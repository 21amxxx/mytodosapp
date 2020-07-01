import React, { Component } from 'react'
import $ from 'jquery';
import * as biblio from './biblio.js'
import Modal from './modal.js'


class Inputtext extends Component {

		getfocus (e) {	
	$(".liberr").css("display", "none")
	$(".texthelp").css("display", "block")
	$(".texthelp").css("visibility", "visible")
	e.preventDefault();
}

	getBlur(e) {
		$(".texthelp").css("visibility", "hidden")
    	e.preventDefault();
	}

	render() {
		return (

	<div>
		<input type="text" onFocus = {this.getfocus.bind(this)} onBlur = {this.getBlur.bind(this)} placeholder="Libelle" className="form-control" id="nom" aria-describedby="libelleHelpBlock" required />
    	<small id="libelleHelpBlock" className="texthelp form-text text-muted">*Donner un titre a la tache</small>
    	<small className = " liberr form-text text-muted " > *Veuillez entrer une valeur </small>
    </div>

    	)
	}
    

}

class Inputdate extends Component {

	initialState = {
    	min: biblio.GetNumTodayDate() ,
  	}


  	getfocus (e) {	
  	$(".dateerr").css("display", "none")
	$(".datehelp").css("display", "block")
	$(".datehelp").css("visibility", "visible")
	e.preventDefault();
}

	getBlur(e) {
		$(".datehelp").css("visibility", "hidden")
    	e.preventDefault();
	}

	handlechange(e){
		if($("#jour").val() === biblio.GetNumTodayDate())
		{
			$("#heure").attr("min", biblio.GetTime())
		}
		else
		{
			$("#heure").attr("min", "00:00")
		}
		e.preventDefault();		
	}


	state = this.initialState
	render() {
		let min = biblio.GetNumTodayDate()
		return(
	<div >
            
		<input type="date" 
		onChange={this.handlechange.bind(this)} 
		onFocus = {this.getfocus.bind(this)} 
		onBlur = {this.getBlur.bind(this)}   
		min = {min}  
		className="form-control" id="jour" aria-describedby="dateHelpBlock"   required/>
        <small id="dateHelpBlock" className="datehelp form-text text-muted">*La date a laquelle vous devez executer cette tache</small>
        <small className = " dateerr form-text text-muted " > *Veuillez entrer une date valeur valide </small>
    </div>
		)
	}


}

class Inputtime extends Component {

	initialState = {
    	min: "00:00" ,
    	max: "23:59",
    	
  	}

  	getfocus (e) {
	
	$(".timeerr").css("display", "none")
	$(".timehelp").css("visibility", "visible")
	$(".timehelp").css("display", "block")
	e.preventDefault();
}

	getBlur(e) {
		$(".timehelp").css("visibility", "hidden")
		e.preventDefault();
	}
  	state = this.initialState
	render () {
		return (
		<div >
	       
	        <input type="time" onFocus = {this.getfocus.bind(this)} onBlur = {this.getBlur.bind(this)} className="form-control" id="heure" aria-describedby="timeHelpBlock"  min = {this.state.min} max= {this.state.max} required/>
	        <small id="timeHelpBlock" className=" timehelp form-text text-muted">*L'heure a laquelle vous devez executer cette tache</small>
	        <small className = " timeerr form-text text-muted " > *Veuillez entrer une heure valeur valide </small>																
	      </div> 
		)
	}
}

const Inputdescpt = () => {

	return (
	<div>
		<textarea 
		maxLength = "500"
		placeholder="Donner une description de la tache (facultatif)" 
		className="form-control" 
		id="descrip"></textarea>
    </div>
        
	)
}

class Buttons extends Component {

	handleClick (e) {

		let vlibelle = document.querySelector("#nom").checkValidity()
		let vdate = document.querySelector("#jour").checkValidity()
	  	let vtime = document.querySelector("#heure").checkValidity()

	  	if(vtime !== true){
	  		$(".timeerr").css("display", "block")
	  		$(".timehelp").css("display", "none")
	  	}
	  	if(vdate !== true){
	  		$(".dateerr").css("display", "block")
	  		$(".datehelp").css("display", "none")
	  	}
	  	if(vlibelle !== true){
	  		$(".liberr").css("display", "block")
	  		$(".texthelp").css("display", "none")
	  	}
	  	if(vlibelle !== false && vdate !== false && vtime !== false)
	  	{
	  		this.props.handlesave()
	  	}
	  	e.preventDefault();
	}
	render () {

	return (

	<div>
		<button type="button" className="btn btn-secondary" data-dismiss="modal">Annuler</button>
	    <button type="button" className="btn btn-success" onClick = {this.handleClick.bind(this)}>Enregistrer</button>
	</div>
	)
}
}
class Addform extends Component {

	render() {
		return (
	<form >
		<Inputtext/>
        <Inputdate/>
        <Inputtime/>
        <Inputdescpt/>    
    </form>
			)
	}
}
class Addtodomodal extends React.Component {

	render() {
		return (
		<Modal id ="addmodal" body = {<Addform/>} footer = {<Buttons handlesave = {this.props.handlesave} />}/>
	)
	}
	
}

export default Addtodomodal 