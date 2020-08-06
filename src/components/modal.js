import React from 'react';
import './modal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class Modal extends React.Component{
    render() {
        return (
         <div>
            <button className="choice-button"> <FontAwesomeIcon icon="list"/> Choisir une catégorie </button>
            
         </div>   
         )
    }
}

export default Modal
