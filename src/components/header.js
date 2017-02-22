import React, { Component } from 'react';

export default class Header extends Component {

  render() {
    return (
        <nav className="navbar navbar-default" style={{marginTop:10}}>
            <div className="container-fluid">
                <div className="navbar-header">
                    <a className="navbar-brand" href="#">
                        <img height="20" alt="Letter" src="./src/assets/letter.png" /> 
                    </a>
                </div>
                
                <div className="collapse navbar-collapse"> 
                    <p className="navbar-text">English Irregular Verbs Finder</p> 
                </div>                
            </div>
        </nav>
    );
  }
}
