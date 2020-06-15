import React, { Component } from 'react'

import Content from './content'

const cont = <h1>Bonjour !</h1>

const Title = () => {

	return (
		<h1> Todo </h1>
	)
}

const Addicon = () => {

	return (
		<span data-toggle="modal" data-target="#exampleModal" className="material-icons md-36">add</span>
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