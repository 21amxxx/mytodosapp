
import React, { Component } from 'react'
import Modal from './modal.js'
import * as biblio from './biblio.js'

class Buttons extends Component {
	render(){
		return (
			<div>
				<button type="button" className="btn btn-secondary" data-dismiss="modal">Quitter</button>
			</div>
			)
	}
}

class Infotodomodal extends React.PureComponent {
	render(){
		let selectedItem = this.props.todolist[this.props.selectedItem] 
		let formatdate = null
		let content = null
		if( selectedItem !== undefined){
				if(selectedItem.date !== undefined)
			{
				formatdate = biblio.ToFormateDate(selectedItem.date)
			} 
			content = <div>
				<h5 className = "text-question ">Libelle de la tache :</h5>
				<p className = "text-answer">{selectedItem.libelle}</p>
				<h5 className = "text-question ">Date et heure d'execution de la tache :</h5>
				<p className = "text-answer">Le {formatdate} a {selectedItem.time}</p>
			</div>
			if(selectedItem.descripion !== "")
			{
				content = <div>
				<h5 className = "text-question ">Libelle de la tache :</h5>
				<p className = "text-answer" >{selectedItem.libelle}</p>
				<h5 className = "text-question " > Date et heure d'execution de la tache :</h5>
				<p className = "text-answer"> Le {formatdate} a {selectedItem.time}</p>
				<h5 className = "text-question ">Description de la tache :</h5>
				<p className = "text-answer">{selectedItem.descripion}</p>
			</div>
			}
		}
		return (
			<Modal id = "infomodal" body ={content} footer = {<Buttons/>}/>
		)
	}
 }

 export default Infotodomodal

