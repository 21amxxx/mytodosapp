import React, { Component } from 'react'
import * as biblio from './biblio.js'


class TodoItem extends Component {


	handleiconclick(e) {
	 e.preventDefault();
	 let selectedItem = this.props.keyId
	 this.props.handleselectedItem(selectedItem)
	}

	handleexpand(e) {
		e.preventDefault()
		biblio.CollapseDesc(e)
	}
	
	render() {
		
		return (
				<div className = "item-content" >

					<div className = 'fline'>
						<h5>{this.props.val.libelle}</h5>
						<div>
							<span onClick = {this.handleexpand} className="material-icons expand_more orange600 md-18">expand_more</span>
							<span onClick = {this.handleexpand} className="material-icons expand_less orange600 md-18">expand_less</span>
						</div>
					</div>

					<div className = 'sline'>
						<p className = 'sline-time'>A faire a: {this.props.val.time}</p>
					</div>

					<div className = 'tline'>
						<div className = "item-option">	
							<span data-toggle="modal" data-target="#checkedmodal" onClick = {this.handleiconclick.bind(this)} className="material-icons thumb_up_alt">thumb_up_alt</span>
							<span data-toggle="modal" data-target="#modifymodal" onClick = {this.handleiconclick.bind(this)} className="material-icons edit ">edit</span>
							<span  data-toggle="modal" data-target="#infomodal" onClick = {this.handleiconclick.bind(this)} className="material-icons info ">info</span>
							<span  data-toggle="modal" data-target="#deletmodal" onClick = {this.handleiconclick.bind(this)} className="material-icons delete ">delete</span>
						</div>
					</div>

				</div>
			)
	}
}


// <p >{this.props.val.descripion}</p> , visibility
class FirstTodoItem extends Component {

	render() {
		return (
			<div className = 'item' >
				<p className = "item-date" >{this.props.thedate}</p>
				<TodoItem keyId = {this.props.keyId} val = {this.props.val}  handleselectedItem = {this.props.handleselectedItem}/>
			</div>

			)
	}
}


class OtherTodoItem extends Component {

	render() {
		return (
			<div className = 'item' > 
				<TodoItem keyId = {this.props.keyId} val = {this.props.val} handleselectedItem = {this.props.handleselectedItem}/>
			</div>
			)
	}
}



class Worktodo extends React.PureComponent {
	render () {

			let lastDate = null
			let res = null 
			const line = this.props.Data.map((val, id) => {
				let truedate = biblio.ToFormateDate(val.date)
				if (truedate !== lastDate) 
				{
					if ( truedate === biblio.GetTodayDate())
					{
					res = <FirstTodoItem key = {id} keyId = {id} val = {val} thedate = "Aujourd'hui" handleselectedItem = {this.props.HandleselectedItem}/>
						
					}
					else
					{
						res = <FirstTodoItem key = {id} keyId = {id} val = {val} thedate ={truedate} handleselectedItem = {this.props.HandleselectedItem}/>
					}
				}
				else
				{
					res = <OtherTodoItem  key = {id} keyId = {id} val = {val} handleselectedItem = {this.props.HandleselectedItem} />
		
				}

				lastDate = truedate

				return (res)
			})

			return (<div>{line}</div>)}

}

export default Worktodo