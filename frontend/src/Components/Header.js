import React, { Component } from 'react';

class Header extends Component {

   //Constructor method
   //We update the state object with the properties from our Header object. These are empty strings for now until
   //we pull data from the API
   constructor(props) {
      super(props);
      this.state = {
         name: "",
         occupation: "",
         city: "",
         description: "",
         social: []
      }
   }

   //This method is triggered when the Header component "mounts", meaning it's available to the DOM.
   //fetch will call the API endpoint we created in the previous steps
   //data contains our data from header.json. Each property in the State object is loaded with this data.
   componentDidMount() {
      fetch('api/header')
         .then(response => response.json())
         .then(data => {
            this.setState({
               name: data.name,
               occupation: data.occupation,
               city: data.city,
               description: data.description,
               social: data.social
            })
         })
   }

   render() {
      var networks = this.state.social.map(function (network) {
         return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })

      return (
         <header id="home">

            <nav id="nav-wrap">

               <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
               <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

               <ul id="nav" className="nav">
                  <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                  <li><a className="smoothscroll" href="#about">About</a></li>
                  <li><a className="smoothscroll" href="#resume">Resume</a></li>
                  <li><a className="smoothscroll" href="#contact">Contact</a></li>
               </ul>

            </nav>

            <div className="row banner">
               <div className="banner-text">
                  <h1 className="responsive-headline">I'm {this.state.name}.</h1>
                  <h3>I'm a {this.state.city} based <span>{this.state.occupation}</span>, {this.state.description}.</h3>
                  <hr />
                  <ul className="social">
                     {networks}
                  </ul>
               </div>
            </div>

            <p className="scrolldown">
               <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
            </p>

         </header>
      );
   }
}

export default Header;
