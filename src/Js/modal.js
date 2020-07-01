import React from 'react'

const Modal =  (props) => {
		return (
			<div className="modal fade" id={props.id} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
			  <div className="modal-dialog modal-dialog-centered" role="document">
			    <div className="modal-content">
				 <div className="modal-body">
				 	{props.body}
				  </div>
				   <div className="modal-footer">
				   	{props.footer}
				    </div>
			    </div>
			  </div>
			</div>
	)
}

export default Modal 