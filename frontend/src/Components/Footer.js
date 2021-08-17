import React, { Component } from 'react';

class Footer extends Component {

  //Constructor method
  //We update the state object with the properties from our Footer object. These are empty strings for now until
  //we pull data from the API
  constructor(props) {
    super(props);
    this.state = {
      social: []
    }
  }

  //This method is triggered when the Footer component "mounts", meaning it's available to the DOM.
  //fetch will call the API endpoint we created in the previous steps
  //data contains our data from header.json. Each property in the State object is loaded with this data.
  componentDidMount() {
    fetch('api/header')
      .then(response => response.json())
      .then(data => {
        this.setState({
          social: data.social
        })
      })
  }
  render() {

    var networks = this.state.social.map(function (network) {
      return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
    })

    return (
      <footer>

        <div className="row">
          <div className="twelve columns">
            <ul className="social-links">
              {networks}
            </ul>

            <ul className="copyright">
              <li>&copy; Copyright 2021 Simon Ho</li>
              <li>Design by <a title="Styleshout" href="http://www.styleshout.com/">Styleshout</a></li>
            </ul>

          </div>
          <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div>
        </div>
      </footer>
    );
  }
}

export default Footer;
