import React, { Component } from "react";
import SearchMenu from "./components/SearchMenu/SearchMenu";
import SearchBar from "./components/SearchBar/SearchBar";
import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faList, faSearch } from "@fortawesome/free-solid-svg-icons";

library.add(faList, faSearch);

class App extends Component {
constructor(props){
  super(props)
}
  showSettings(event) {
    event.preventDefault();
  }
  render() {
    let clas = "showbar"
    if(this.props.show){
      clas="hidebar"
    }
    return (
      <div>
        <div className="page-header">
          <div className="main-title">
            <p>
              <span className="title-le">le</span>
              <span className="title-bondev">bondev</span>
            </p>
          </div>
        </div>
        <div className="search-frame">
          <SearchMenu />
          <SearchBar classname={clas}/>
        </div>
        <div className="comment-text">
          Trouvez la bonne affaire parmi des milliers de développeurs
        </div>
      </div>
    );
  }
}


export default App;
