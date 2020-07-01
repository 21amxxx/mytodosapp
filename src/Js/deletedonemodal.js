
import React, { Component } from 'react'
import Modal from './modal.js'

class Buttons extends Component {

	delete = (e) => {
		e.preventDefault()
		this.props.handledeleteItem()
	}
	render(){
		return (
			<div>
				<button type="button" className="btn btn-secondary" data-dismiss="modal">Annuler</button>
				<button type="button" className="btn btn-success" onClick = {(e) => {this.delete(e)}}>Supprimer</button>
			</div>
			)
	}
}

class Deletedonemodal extends React.PureComponent {
	render(){
		let selectedItem = this.props.donelist[this.props.selectedItem]
		let content = null
		if(selectedItem !== undefined)
		{
			content = <div>
			<p>Voulez-vous supprimer definitivement la tache :</p>
			<p>{selectedItem.libelle}</p>
			</div>
		}
		return (
			<Modal id = "deletedonemodal" body ={content} footer = {<Buttons  handledeleteItem = {this.props.handledeleteItem}/>}/>
		)
	}
 }

 export default Deletedonemodal

