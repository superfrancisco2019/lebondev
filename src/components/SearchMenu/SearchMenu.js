import React from 'react';
import './SearchMenu.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Modal from './menuModal/menuModal'

class SearchMenu extends React.Component{
    constructor(props) {
        super(props);
        this.state = {show:false};
        this.showModal = this.showModal.bind(this);}

    showModal(e) {
        this.setState({show:true})
    }

    render() {
        let classname = "choice-button";
        if(this.state.show){
        classname = "hide-button"
        }
        return (
         <div className="modal">
            <button onClick={this.showModal} className={classname}> <FontAwesomeIcon icon="list"/> Choisir une catégorie </button>
            <Modal show={this.state.show}/>
         </div>   
         )
    }
}

export default SearchMenu
