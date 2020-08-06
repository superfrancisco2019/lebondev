import React, { Component }from 'react';
import { slide as Menu } from 'react-burger-menu';
import Modal from './components/modal'
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faList } from '@fortawesome/free-solid-svg-icons'

library.add(faList)


class App extends Component{
  showSettings (event) {
    event.preventDefault();
  }
render(){
    return(
<div>
  <div className="page-header">
    <div className="main-title"><p className="title-le">le</p><p className="title-bondev">bondev</p></div>
    <Menu>
        <a id="parcours" className="menu-item" href="/"> Parcours </a>
        <a id="formation" className="menu-item" href="/"> Formation </a>
        <a id="hobbies" className="menu-item" href="/"> Hobbies </a>
        <a id="réalisations" className="menu-item" href="/"> Réalisations </a>
        <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
    </Menu>
  </div>
  <div className="search-frame">
    <Modal/>
    
  </div>
</div>
    );
}
}

export default App;
