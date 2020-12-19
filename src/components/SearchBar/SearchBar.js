import React from 'react';
import './SearchBar.css';
import Modal from './searchModal/searchModal'

class SearchBar extends React.Component{
    constructor(props){
        super(props)
        this.state={show:false};
        this.showModal=this.showModal.bind(this);}

    showModal(e){
        this.setState({show:true})
    }

    handleChange(event) {
      this.setState({show:true});
    }
    
    render(){
    
        return(
            <form className="search-modal"> 
                <input value={this.state.value} onChange={this.showModal} className="input form" placeholder="Que recherchez-vous?"></input>
                <Modal show={this.state.show}/>
            </form>     
        )
    }
}

export default SearchBar;
 