import React, { Component } from 'react'

import * as biblio from './biblio.js'

let standDatas = [
	{
		libelle : "Titre de la tache",
		date:"15/06/2020",
		time: "15:15",
		descripion: "Test reussi !"
	},
		{
		libelle : "Titre de la tache",
		date: "15/06/2020",
		time: "15:15",
		descripion: ""
	},
		{
		libelle : "Titre de la tache",
		date: "21/01/2000",
		time: "15:15",
		descripion: ""
	},
		{
		libelle : "Titre de la tache",
		date: "21/01/2000",
		time: "15:15",
		descripion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
	},
		{
		libelle : "Titre de la tache",
		date: "22/01/2000",
		time: "15:15",
		descripion: "Test reussi !"
	},
		{
		libelle : "Titre de la tache",
		date: "23/01/2000",
		time: "15:15",
		descripion: ""
	},
		{
		libelle : "Titre de la tache",
		date: "23/01/2000",
		time: "15:15",
		descripion: ""
	},
		{
		libelle : "Titre de la tache",
		date: "24/01/2000",
		time: "15:15",
		descripion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
	},
		{
		libelle : "Titre de la tache",
		date: "24/01/2000",
		time: "15:15",
		descripion: "Test reussi !"
	},
		{
		libelle : "Titre de la tache",
		date: "24/01/2000",
		time: "15:15",
		descripion: ""
	},
		{
		libelle : "Titre de la tache",
		date: "24/01/2000",
		time: "15:15",
		descripion: ""
	},
		{
		libelle : "Titre de la tache",
		date: "25/01/2000",
		time: "15:15",
		descripion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
	},

]

//A implementer avec la PWA
let avanceDatas = [
	{
		libelle : "Titre de la tache",
		date: "15/06/2020",
		time: "15:15",
		descripion: "Test reussi !",
		status:"Tache Reporte"
	},
		{
		libelle : "Titre de la tache",
		date: "15/06/2020",
		time: "15:15",
		descripion: "",
		status:"Tache Accompli"
	},
		{
		libelle : "Titre de la tache",
		date: "21/01/2000",
		time: "15:15",
		descripion: "",
		status:"Tache Abandonne"
	},
		{
		libelle : "Titre de la tache",
		date: "21/01/2000",
		time: "15:15",
		descripion: "Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit , sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
		status:"Tache Accompli"
	},

]



const Nav = () => {
	return (

		<div>
			<ul className="tab" >
			<li className = "active">
				<a href="#afaire"> A faire </a>
			</li>
			<li>
				<a href="#complete"> Complete </a>
			</li>
			</ul>
		</div>
		)
}

const Contenu = () => {
	return (
		<div className = "navs-content">
			<div className = "nav-content active" id = "afaire">
			<TacheAfaire Data = {standDatas}/>
			</div>
			<div className = "nav-content" id = "complete">
			<Tachefait Data = {avanceDatas}/>
			</div>
		</div>
	)
}

const Form = () => {
	return (
			<div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
			  <div className="modal-dialog modal-dialog-centered" role="document">
			    <div className="modal-content">
			      <div className="modal-body">
					<form>
			          <div className="form-group">
			   
			            <input type="text" placeholder="Libelle" className="form-control" id="recipient-name"/>
			          </div>

			          <div className="form-group">
			            
			            <input type="date" className="form-control" id="recipient-name"/>
			          </div>
			          <div className="form-group">
			           
			            <input type="time"  className="form-control" id="recipient-name"/>
			          </div> 
			          <div className="form-group">
			           
			            <textarea placeholder="Description" className="form-control" id="message-text"></textarea>
			          </div>
			        </form>
			      </div>
			      <div className="modal-footer">
			        <button type="button" className="btn btn-secondary" data-dismiss="modal">Annuler</button>
			        <button type="button" className="btn btn-success">Enregistrer</button>
			      </div>
			    </div>
			  </div>
			</div>
	)
}
 

class Tachefait extends React.Component {
	render () {
			let lastDate = null
			let res = null 
			const line = this.props.Data.map((val, id) => {
							

							if (val.date !== lastDate) 
							{
								if ( val.date === biblio.GetTodayDate())
								{
									res = 
										<div key = {id} className = 'item' >
											<p className = "item-date" >Aujourd'hui</p>
											<div className = "item-content" >
											<div className = 'fline'>
												<h5>{val.libelle}</h5>
												<span className="material-icons orange600 md-18">close</span>
											</div>
											<div className = 'sline'>
												<p className = 'sline-time'>Prevu pour {val.time}</p>
												<p className = 'sline-raison'>{val.status}</p>
											</div>
											<div className = 'tline'>
												<p className = "block-with-text">{val.descripion}</p>
											</div>
											</div>
										</div>
								}
								else {
										res = 
										<div key = {id} className = 'item'>
											<p className = "item-date" >{val.date} </p>
											<div className = "item-content">
											<div className = 'fline'>
												<h5>{val.libelle}</h5>
												<span className="material-icons orange600 md-18">close</span>
											</div>
											<div className = 'sline'>
												<p className = 'sline-time'>Prevu pour {val.time}</p>
												<p className = 'sline-raison'>{val.status}</p>
											</div>
											<div className = 'tline'>
												<p className = "block-with-text">{val.descripion}</p>
											</div>
											</div>
										</div>
								}
							}
							else
							{
								res = 
								<div key = {id} className = 'item'> 
								<div className = "item-content" >
									<div className = 'fline'>
										<h5>{val.libelle}</h5>
										<span className="material-icons orange600 md-18">close</span>
									</div>
									<div className = 'sline'>
										<p className = 'sline-time'>Prevu pour {val.time}</p>
										<p className = 'sline-raison'>{val.status}</p>
									</div>
									<div className = 'tline'>
										<p className = "block-with-text">{val.descripion}</p>
									</div>
								</div>
								</div>
							}
							lastDate = val.date
							return (res)
					})
		return (<div>{line}</div>)}
}
class TacheAfaire extends React.Component {
	render () {
			let lastDate = null
			let res = null 
			const line = this.props.Data.map((val, id) => {
							
							if (val.date !== lastDate) 
							{
								if ( val.date === biblio.GetTodayDate())
								{

								res = 
									<div key = {id} className = 'item' >
										<p className = "item-date" >Aujourd'hui</p>
										<div className = "item-content" >
										<div className = 'fline'>
											<h5>{val.libelle}</h5>
											<span className="material-icons orange600 md-18">close</span>
										</div>
										<div className = 'sline'>
											<p className = 'sline-time'>A faire a {val.time}</p>
										</div>
										<div className = 'tline'>
											<p className = "block-with-text">{val.descripion}</p>
										</div>
										</div>
									</div>
								}
								else
								{

									res = 
									<div key = {id} className = 'item' >
										<p className = "item-date" >{val.date} </p>
										<div className = "item-content" >
										<div className = 'fline'>
											<h5>{val.libelle}</h5>
											<span className="material-icons orange600 md-18">close</span>
										</div>
										<div className = 'sline'>
											<p className = 'sline-time'>A faire a {val.time}</p>
										</div>
										<div className = 'tline'>
											<p className = "block-with-text">{val.descripion}</p>
										</div>
										</div>
									</div>
								}
							}
							else
							{
								res = 
								<div key = {id} className = 'item'> 
								<div className = "item-content" >
									<div className = 'fline'>
										<h5>{val.libelle}</h5>
										<span className="material-icons orange600 md-18">close</span>
									</div>
									<div className = 'sline'>
										<p className = 'sline-time'>A faire a {val.time}</p>
									</div>
									<div className = 'tline'>
										<p className = "block-with-text">{val.descripion}</p>
									</div>
								</div>
								</div>
							}
							lastDate = val.date
							return (res)
					})
		return (<div>{line}</div>)}
}





class Content extends Component {

  render() {
    return (
    	<div>
    		<Nav/>
    	    <Contenu />
    	    <Form/>
    	</div>
    )
  }
}

export default Content