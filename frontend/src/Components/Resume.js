import React, { Component } from 'react';

class Resume extends Component {
  //Constructor method
  //We update the state object with the properties from our Resume object. These are empty strings for now until
  //we pull data from the API
  constructor(props) {
    super(props);
    this.state = {
      skillmessage: "",
      education: [],
      work: [],
      skills: []
    }
  }

  //This method is triggered when the Resume component "mounts", meaning it's available to the DOM.
  //fetch will call the API endpoint we created in the previous steps
  //data contains our data from resume.json. Each property in the State object is loaded with this data.
  componentDidMount() {
    fetch('api/resume')
      .then(response => response.json())
      .then(data => {
        this.setState({
          skillmessage: data.skillmessage,
          education: data.education,
          work: data.work,
          skills: data.skills
        })
      })
  }

  render() {

    var education = this.state.education.map(function (education) {
      var educationImage = 'images/education/' + education.image;
      return <div key={education.school}> <img className='educationImage' src={educationImage} /><h3>{education.school}</h3>
        <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
        <p>{education.description}</p></div>
    })
    var work = this.state.work.map(function (work) {
      var workImage = 'images/jobs/' + work.image;
      return <div key={work.company}> <img className='workImage' src={workImage} /><h3>{work.company}</h3>
        <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
        <p>
          <ul>
            {work.description.map(duty =>
              <li key={duty}>{duty}</li>
            )}
          </ul>
        </p>
      </div>
    })

    var skills = this.state.skills.map(function (skills) {
      var projectImage = 'images/tech/' + skills.image;
      return <div key={skills.name} className="columns feature-item">
        <img className='skill' alt={skills.name} src={projectImage} />
        <h5>{skills.name}</h5>
        <p>{skills.description}</p>
      </div>
    })

    return (
      <section id="resume" >
        <div className="row education">
          <div className="three columns header-col">
            <h1><span>Education</span></h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                {education}
              </div>
            </div>
          </div>
        </div>


        <div className="row work">

          <div className="three columns header-col">
            <h1><span>Work</span></h1>
          </div>

          <div className="nine columns main-col">
            {work}
          </div>
        </div>



        <div className="row skill">

          <div className="three columns header-col">
            <h1><span>Favorite Tech</span></h1>
          </div>

          <div>
            <div className="nine columns main-col"><p className="lead center">{this.state.skillmessage}</p></div>
            <ul className="bgrid-quarters s-bgrid-thirds cf">
              {skills}
            </ul>
          </div>
        </div>
      </section>
    );
  }
}

export default Resume;
