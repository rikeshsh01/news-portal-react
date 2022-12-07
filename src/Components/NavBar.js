import React, { Component } from 'react'

import {NavLink} from "react-router-dom";

export class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">News Portal</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item"><NavLink to="/general" className="nav-link active" >Home</NavLink></li>
                  <li className="nav-item"><NavLink to="/business" className="nav-link">Business</NavLink></li>
                  <li className="nav-item"><NavLink to="/entertainment" className="nav-link">Entertainment</NavLink></li>
                  <li className="nav-item"><NavLink to="/health" className="nav-link">Health</NavLink></li>
                  <li className="nav-item"><NavLink to="/sports" className="nav-link">Sports</NavLink></li>
                  <li className="nav-item"><NavLink to="/technology" className="nav-link">Technology</NavLink></li>
                  <li className="nav-item"><NavLink to="/science" className="nav-link">Science</NavLink></li>
                  <li className="nav-item"><NavLink to="/about" className="nav-link">About</NavLink></li>
                </ul>
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
                </div>
            </div>
        </nav>

        
      </div>
    )
  }
}

export default NavBar
