import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import "./menuModal.css";


class menuModal extends React.Component{
    render(){
        if(!this.props.show)
        return(
            null
        )
        return(
            <Router>
                <div className="modal">
                    <ul>
                        <li>
                            <Link to="/hobbies">Mes passions</Link>
                        </li>
                        <li>
                            <Link to="/projects">Mes projets</Link>
                        </li>
                        <li>
                            <Link to="/techno">Mes technos</Link>
                        </li>
                        <li>
                            <Link to="/">Ils me recommandent</Link>
                        </li>
                        <li>
                            <Link to="/">Mes passions</Link>
                        </li>
                        <li>
                            <Link to="/">Mes passions</Link>
                        </li>
                        <li>
                            <Link to="/">Mes passions</Link>
                        </li>
                    </ul>
                </div>
            </Router>
        )
    }
}

export default menuModal
