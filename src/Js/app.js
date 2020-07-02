import React, { Component } from 'react'
import Content from './content'

const Title = () => {
	return (
		<h1 onClick={() => localStorage.clear()}> MyTodos </h1>		
	)
}

const Addicon = () => {
	return (
		<span  id = "spanmodal" data-toggle="modal" data-target="#addmodal" className="material-icons greencol">add</span>
	)
}


class App extends Component {

  render() {
    return (
    	<div>
    	<div className = "tete">
	      	<Title /> 
	      	<Addicon />
      	</div>
      	<div >
        	<Content />
      	</div>

      </div>
    )
  }
}

export default App