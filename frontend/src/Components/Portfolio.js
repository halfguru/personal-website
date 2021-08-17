import React, { Component } from 'react';

class Portfolio extends Component {
  //Constructor method
  //We update the state object with the properties from our Portfolio object. These are empty strings for now until
  //we pull data from the API
  constructor(props) {
    super(props);
    this.state = {
      portfolio: []
    }
  }

  //This method is triggered when the Portfolio component "mounts", meaning it's available to the DOM.
  //fetch will call the API endpoint we created in the previous steps
  //data contains our data from portfolio.json. Each property in the State object is loaded with this data.
  componentDidMount() {
    fetch('api/portfolio')
      .then(response => response.json())
      .then(data => {
        this.setState({
          projects: data.projects
        })
      })
  }
  render() {
    var projects = this.state.projects.map(function (projects) {
      var projectImage = 'images/portfolio/' + projects.image;
      return <div key={projects.title} className="columns portfolio-item">
        <div className="item-wrap">
          <a href={projects.url} title={projects.title}>
            <img alt={projects.title} src={projectImage} />
            <div className="overlay">
              <div className="portfolio-item-meta">
                <h5>{projects.title}</h5>
                <p>{projects.category}</p>
              </div>
            </div>
            <div className="link-icon"><i className="fa fa-link"></i></div>
          </a>
        </div>
      </div>
    })

    return (
      <section id="portfolio">

        <div className="row">

          <div className="twelve columns collapsed">

            <h1>Check Out Some of My Works.</h1>

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              {projects}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
