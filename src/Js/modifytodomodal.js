import React, { Component } from 'react'
import $ from 'jquery';
import * as biblio from './biblio.js'
import Modal from './modal.js'


class Inputtext extends Component {

	initialState = {
		value : this.props.libelle
	}
	state = this.initialState

	getfocus = (e) => {	
		$(".liberr").css("display", "none")
		$(".texthelp").css("display", "block")
		$(".texthelp").css("visibility", "visible")
		e.preventDefault();
}

	getBlur = (e) => {
		$(".texthelp").css("visibility", "hidden")
    	e.preventDefault();
	}

	render() {
		return (

		<div>
			<input type="text" 
			onChange = {(e) => {this.setState ({value : e.target.value })}} 
			value = {this.state.value} onFocus = {this.getfocus.bind(this)} 
			onBlur = {this.getBlur.bind(this)} placeholder="Libelle" 
			className="form-control" id="nomChange" aria-describedby="libelleHelpBlock" 
			required />
			<small id="libelleHelpBlock" className="texthelp form-text text-muted">*Donner un titre a la tache</small>
			<small className = " liberr form-text text-muted " > *Veuillez entrer une valeur </small>
		</div>

    	)
	}
    

}

class Inputdate extends Component {

	initialState = {
		min: biblio.GetNumTodayDate(),
		value : this.props.date
  	}


  	getfocus = (e) => {	
  	$(".dateerr").css("display", "none")
	$(".datehelp").css("display", "block")
	$(".datehelp").css("visibility", "visible")
	e.preventDefault();
}

	getBlur = (e) => {
		$(".datehelp").css("visibility", "hidden")
    	e.preventDefault();
	}

	handlechange = (e) => {
		if($("#jourChange").val() === biblio.GetNumTodayDate())
		{
			$("#heureChange").attr("min", biblio.GetTime())
		}
		else
		{
			$("#heureChange").attr("min", "00:00")
		}		
		e.preventDefault();		
	}

	state = this.initialState
	render() {
		return(
	<div >
            
		<input type="date" 
		onChange={(e) => {this.setState ({value : e.target.value }); this.handlechange(e);}} 
		onFocus = {this.getfocus.bind(this)} 
		onBlur = {this.getBlur.bind(this)}   
		min = {this.state.min} 
		value = {this.state.value} 
		className="form-control" 
		id="jourChange" 
		aria-describedby="dateHelpBlock"   required/>
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
		value: this.props.time
  	}

  	getfocus = (e) => {
	
	$(".timeerr").css("display", "none")
	$(".timehelp").css("visibility", "visible")
	$(".timehelp").css("display", "block")
	e.preventDefault();
}

	getBlur = (e) => {
		$(".timehelp").css("visibility", "hidden")
		e.preventDefault();
	}


  	state = this.initialState
	render () {
		let min = this.state.min
		if($("#jourChange").val() === biblio.GetNumTodayDate())
		{
			min = biblio.GetTime()
		}
		return (
		<div >
	       
			<input type="time" 
			onChange = {(e) => { this.setState ({value : e.target.value })}} 
			onFocus = {this.getfocus.bind(this)} 
			onBlur = {this.getBlur.bind(this)} 
			className="form-control" id="heureChange" 
			aria-describedby="timeHelpBlock"  
			min = {min} max= {this.state.max} 
			value = {this.state.value} required/>

			<small id="timeHelpBlock" 
			className=" timehelp form-text text-muted">*L'heure a laquelle vous devez executer cette tache</small>
			<small 
			className = " timeerr form-text text-muted " > *Veuillez entrer une heure valeur valide </small>																
	      </div> 
		)
	}
}

class Inputdescpt extends Component {

	render() {
		return (
			<div>
				<textarea 
				maxLength = "500"
				defaultValue = {this.props.descripion} 
				placeholder="Donner une description de la tache (facultatif)" 
				className="form-control" id="descripChange"></textarea>
			</div>
				
			)
	}
}

class Buttons extends Component {

	handleClick = (e) => {
		let vlibelle = document.querySelector("#nomChange").checkValidity()
		let vdate = document.querySelector("#jourChange").checkValidity()
		let vtime = document.querySelector("#heureChange").checkValidity()
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
			$('#modifymodal').modal('hide')
	  		this.props.forSave()
	  	}
	  	e.preventDefault();
	}
	render () {

	return (

	<div>
		<button 
		type="button" 
		className="btn btn-secondary btn-quit" 
		data-dismiss="modal">Annuler</button>
		<button 
		type="button" 
		className="btn btn-success" 
		onClick = {this.handleClick.bind(this)}>Enregistrer</button>
	</div>
	)
}
}
class ModifyForm extends Component {
	componentDidMount() {
		$(".timeerr").css("display", "none")
		$(".dateerr").css("display", "none")
		$(".liberr").css("display", "none")
	}
	render() {
		let content = null
		if( this.props.todolist[this.props.selectedItem] !== undefined){
			
			let libelle = this.props.todolist[this.props.selectedItem].libelle
			let date = this.props.todolist[this.props.selectedItem].date
			let time = this.props.todolist[this.props.selectedItem].time
			let descripion = this.props.todolist[this.props.selectedItem].descripion
			content = <form >
				<Inputtext  libelle = {libelle}/>
				<Inputdate date = {date} />
				<Inputtime  time = {time}/>
				<Inputdescpt descripion = {descripion}/>    
			</form>
		}
		return (content)
	}
}
class Modifytodomodal extends React.PureComponent {

	forSave = () => {
		// this.props.forChange(this.state)
		let libelle = document.querySelector("#nomChange").value
		let date = document.querySelector("#jourChange").value
		let time = document.querySelector("#heureChange").value
		let descripion = document.querySelector("#descripChange").value
		let tache = {libelle, date, time, descripion}
		this.props.forChange(tache)
	}

	render() {
		let body = <ModifyForm 
					key={this.props.selectedItem} 
					todolist = {this.props.todolist} 
					selectedItem = {this.props.selectedItem} />
		return (
		<Modal id ="modifymodal" 
		body = {body} 
		footer = {<Buttons forSave = {this.forSave} />}/>
	)
	}
	
}

export default Modifytodomodal 