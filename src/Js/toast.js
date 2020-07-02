import React from 'react'
import Logo from  '../img/not-logo.png'

const Toast = () => {
    return( 
        <div className ="encap-toast" aria-live="polite" aria-atomic="true" >
        <div role="alert" aria-live="assertive" aria-atomic="true" className="toast"  data-delay="2000" data-autohide="true">
            <div className="toast-header">
            <img src={Logo} className="rounded mr-2" alt="App Icon"/>
            <strong className="mr-auto">Bravo !!!</strong>
            <small className="text-muted">Now</small>
            <button type="button" className="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button>
            </div>
            <div className="toast-body">
            Encore une tache executee !
            </div>
        </div>
        </div>
    )
}

export default Toast