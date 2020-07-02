
import React from 'react'
import $ from 'jquery';
import * as biblio from './biblio.js'
import Addtodomodal from './addtodomodal'
import Worktodo from './worktodo'
import Workdone from './workdone'
import Deletetodomodal from './deletetodomodal'
import InfotodoModal from './infotodomodal'
import Deletedonemodal from './deletedonemodal'
import InfodoneModal from './infodonemodal'
import Modifytodomodal from './modifytodomodal'
import Checkedtodomodal from './checkedtodomodal'

let idForDone = null
let idForTodo = null

const Nav = () => {
	return (
		<div>
			<ul className="tab" >
			<li className = "active" id = "li-afaire">Vos taches a faire</li>
			<li id = "li-complete">Vos taches accomplies</li>
			</ul>
		</div>
		)
}

class Contenu extends React.PureComponent {

	initialState = {
		searchintodo: "",
		searchindone: "",
  	}


	
	getChanged = (e, bool) => {
		e.preventDefault()
		if(bool)
		{
			this.setState ({searchindone : e.target.value })
		}
		else
		{
			this.setState ({searchintodo : e.target.value })
		}	
		this.props.handleChangedWord(e.target.value, bool)
	}
	
	getChanged = this.getChanged.bind(this)
	state = this.initialState

	render(){
	return (
		<div className = "navs-content">
			<div className = "nav-content active" id = "afaire">
				<div>
				<input type="text" 
				onChange = {(e) => this.getChanged(e, false)} 
				value = {this.state.searchintodo} 
				placeholder="Rechercher une tache a effectuer" 
				className="form-control search-bar" id="todosearch" aria-describedby="helptodosearch" 
				required />
				</div>
				<div>
				<Worktodo Data = {this.props.liste.todo} HandleselectedItem = {this.props.handleselectedItem}/>
				</div>
			</div>
			<div className = "nav-content" id = "complete">
			<div>
				<input type="text" 
				onChange = {(e) => this.getChanged(e, true)} 
				value = {this.state.searchindone} 
				placeholder="Rechercher une tache deja accomplie" 
				className="form-control search-bar" id="donesearch" aria-describedby="helpdonesearch" 
				required />
				</div>
				<div>
				<Workdone Data = {this.props.liste.done} HandleselectedItem = {this.props.handleselectedItem}/>
				</div>
			</div>
		</div>
	)
	}
}

class Content extends React.PureComponent {

	initialState = {
    	todo:[],
		done:[],
		selectedItem: -1,
		waitList:[],
  	}

  	state = this.initialState

  	forSave = () => {
		idForTodo = idForTodo + 1
	  	let vlibelle = document.querySelector("#nom").checkValidity()
		let vdate = document.querySelector("#jour").checkValidity()
	  	let vtime = document.querySelector("#heure").checkValidity()

	  	if(vlibelle !== false && vdate !== false && vtime !== false)
	  	{
	  		let libelle = document.querySelector("#nom").value
			let date = document.querySelector("#jour").value
		  	let time = document.querySelector("#heure").value
	  		let descripion = document.querySelector("#descrip").value
	  		let tache = {id:idForTodo,libelle, date, time, descripion}

	  		$('#addmodal').modal('hide')
	  		// Trie le contenu du state puis Modifie l'etat 		
	  		if(this.state.todo.length === 0){
	  			this.setState({todo : [...this.state.todo, tache]})
	  		}
	  		else{
	  			let inst = this.state.todo
	  			inst.reverse()
	  			let newlist = biblio.FilterList(inst, tache)
	  			this.setState({todo : newlist.reverse()})
	  		} 		
	  	}	
		}
	
	forDeleteTodoItem = () => {
		let id = this.state.selectedItem
		let taches = this.state.todo
		taches = biblio.arrayRemove(taches, this.state.todo[id])
		
		// In search
		let waitlist = this.state.waitList
		if(waitlist.length)
		{	
			let selfid =  this.state.todo[id].id
			for(var i=0; i<waitlist.length; i++){
				if(waitlist[i].id === selfid)
				{
					waitlist = biblio.arrayRemove(waitlist, waitlist[i])
					break
				}
			}
			 
		}

		this.setState({todo : taches, waitList: waitlist})
		
		$('#deletmodal').modal('hide')
	}

	forDeleteDoneItem = () => {
		let id = this.state.selectedItem
		let taches = this.state.done
		taches = biblio.arrayRemove(taches, this.state.done[id])

		// In search
		let waitlist = this.state.waitList
		if(waitlist.length)
		{	
			let selfid =  this.state.done[id].id
			for(var i=0; i<waitlist.length; i++){
				if(waitlist[i].id === selfid)
				{
					waitlist = biblio.arrayRemove(waitlist, waitlist[i])
					break
				}
			}
			 
		}
		
		this.setState({done : taches, waitList: waitlist})
		$('#deletedonemodal').modal('hide')
	}


	handleselectedItem = (id) => {
		this.setState({selectedItem : id})
	}

	handleChangedWord = (val, liste) => {
		if(liste){
			// For done element 
			if(val === ""){
				this.setState({done:this.state.waitList, waitList:[]})
				$('#spanmodal').css('visibility', 'visible')
				document.querySelector('input#todosearch').removeAttribute('disabled')
			}
			else{
				document.querySelector('input#todosearch').setAttribute('disabled', 'true')
				let donelist = this.state.waitList
				if($('#spanmodal').css('visibility') === 'visible'){
					$('#spanmodal').css('visibility', 'hidden')
					this.setState({waitList:this.state.done})
					donelist = this.state.done
				}			
				let newdonelist = []
				for(var i = 0; i < donelist.length; i++){
					if(donelist[i].libelle.indexOf(val) !== -1){
						newdonelist = [...newdonelist, donelist[i]]
					}
				}
				this.setState({done:newdonelist})
			}
		}
		else{
			// For todo
			if(val === ""){
				this.setState({todo:this.state.waitList, waitList:[]})
				$('#spanmodal').css('visibility', 'visible')
				document.querySelector('input#donesearch').removeAttribute('disabled')
			}
			else{
				let todolist = this.state.waitList
				document.querySelector('input#donesearch').setAttribute('disabled', 'true')
				if($('#spanmodal').css('visibility') === 'visible'){
					$('#spanmodal').css('visibility', 'hidden')
					this.setState({waitList:this.state.todo})
					todolist = this.state.todo
				}
				let newtodolist = []
				for(var i = 0; i < todolist.length; i++){
					if(todolist[i].libelle.indexOf(val) !== -1){
						newtodolist = [...newtodolist, todolist[i]]
					}
				}
				this.setState({todo:newtodolist})
			}
		}
	}

	forChange = (tache) => {
		let inst = this.state.todo	
		let todoelet = inst[this.state.selectedItem]
		inst = biblio.arrayRemove(inst, todoelet)
		let newwaitlist = []

		// In search
		let waitlist = this.state.waitList
		if(waitlist.length)
		{	
			let selfid =  todoelet.id
			for(var i=0; i<waitlist.length; i++){
				if(waitlist[i].id === selfid)
				{
					waitlist = biblio.arrayRemove(waitlist, waitlist[i])
					break
				}
			}	
			waitlist.reverse()
			if(waitlist.length === 0){
				newwaitlist = [...newwaitlist, tache]
			}
			else{
				newwaitlist = biblio.FilterList(waitlist, tache)
			}

		}

		let newlist = []
		
		inst.reverse()
		if(inst.length === 0)
		{
			newlist = [...newlist, tache]
			
		}
		else
		{
			newlist = biblio.FilterList(inst, tache)
		}
		this.setState({todo : newlist.reverse(), waitList: newwaitlist.reverse()})
	}

	forChecked = (e) => {

		let myRadio = $(" #checkedmodal input[name=customRadio]")
		let checkedValue = myRadio.filter(":checked")
		let idcheckedValue = $(checkedValue).attr('id')
		if(idcheckedValue === "customRadio3")
		{
			$("#modifymodal").modal('show')
		}
		else
		{
			idForDone = idForDone + 1
			let contentcheckedValue = $("#checkedmodal label[for=" + idcheckedValue + "]").text()
			contentcheckedValue = contentcheckedValue.split(" ")[3]
			let doneitem = {
				id:idForDone,
				libelle :this.state.todo[this.state.selectedItem].libelle, 
				date : this.state.todo[this.state.selectedItem].date, 
				time : this.state.todo[this.state.selectedItem].time, 
				descripion: this.state.todo[this.state.selectedItem].descripion,
				status: contentcheckedValue}


			let todoliste = this.state.todo
			todoliste = biblio.arrayRemove(todoliste, this.state.todo[this.state.selectedItem])

			let waitlist = this.state.waitList
			if(waitlist.length)
			{	
				let selfid =  this.state.todo[this.state.selectedItem].id
				for(var i=0; i<waitlist.length; i++){
					if(waitlist[i].id === selfid)
					{
						waitlist = biblio.arrayRemove(waitlist, waitlist[i])
						break
					}
				}
					
			}
			let doneliste = this.state.done
			if(doneliste.length === 0){
				doneliste = [...doneliste, doneitem]
			}else{
				doneliste = biblio.FilterList(doneliste, doneitem)
			}
			this.setState({todo:todoliste, done:doneliste, waitList : waitlist})
		}
		
		
	}

	forChecked = this.forChecked.bind(this)
	forChange = this.forChange.bind(this)
	forDeleteTodoItem = this.forDeleteTodoItem.bind(this)
	forDeleteDoneItem = this.forDeleteDoneItem.bind(this)
	handleselectedItem = this.handleselectedItem.bind(this)
	handleChangedWord = this.handleChangedWord.bind(this)
	forSave = this.forSave.bind(this)
	
  	render() {
    return (
    	<div>
    		<Nav/>
    	    <Contenu liste = {this.state} handleselectedItem = {this.handleselectedItem} handleChangedWord = {this.handleChangedWord}/>
    	    <Addtodomodal handlesave = {this.forSave} />
			<Deletetodomodal todolist = {this.state.todo} selectedItem = {this.state.selectedItem} handledeleteItem = {this.forDeleteTodoItem}/>
			<Deletedonemodal donelist = {this.state.done} selectedItem = {this.state.selectedItem} handledeleteItem = {this.forDeleteDoneItem}/>
			<InfotodoModal todolist = {this.state.todo} selectedItem = {this.state.selectedItem} />
			<InfodoneModal donelist = {this.state.done} selectedItem = {this.state.selectedItem} />
			<Modifytodomodal todolist = {this.state.todo} selectedItem = {this.state.selectedItem} forChange = {this.forChange} />
			<Checkedtodomodal todolist = {this.state.todo} selectedItem = {this.state.selectedItem} forChecked = {this.forChecked} />
    	</div>
    )
  }
}

export default Content