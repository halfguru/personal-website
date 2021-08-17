import React, { Component } from 'react';

class About extends Component {

   //Constructor method
   //We update the state object with the properties from our AboutMe object. These are empty strings for now until
   //we pull data from the API
   constructor(props) {
      super(props);
      this.state = {
         name: "",
         bio: "",
         city: "",
         state: "",
         email: "",
         resumeDownload: "",
         image: ""
      }
   }

   //This method is triggered when the AboutMe component "mounts", meaning it's available to the DOM.
   //fetch will call the API endpoint we created in the previous steps
   //data contains our data from aboutme.json. Each property in the State object is loaded with this data.
   componentDidMount() {
      fetch('api/aboutme')
         .then(response => response.json())
         .then(data => {
            this.setState({
               name: data.name,
               bio: data.bio,
               city: data.address.city,
               state: data.address.state,
               email: data.email,
               resumeDownload: data.resumeDownload,
               image: data.image
            })
         })
   }

   render() {

      var profilepic = "images/" + this.state.image;

      return (
         <section id="about">
            <div className="row">
               <div className="three columns">
                  <img className="profile-pic" src={profilepic} alt="Simon Ho Profile Pic" />
               </div>
               <div className="nine columns main-col">
                  <h2>About Me</h2>

                  <p>{this.state.bio}</p>
                  <div className="row">
                     <div className="columns contact-details">
                        <h2>Contact Details</h2>
                        <p className="address">
                           <span>{this.state.name}</span><br />
                           <span>
                              {this.state.city} {this.state.state}
                           </span><br />
                           <span>{this.state.email}</span>
                        </p>
                     </div>
                     <div className="columns download">
                        <p>
                           <a href={this.state.resumeDownload} className="button"><i className="fa fa-download"></i>Download Resume</a>
                        </p>
                     </div>
                  </div>
               </div>
            </div>

         </section>
      );
   }
}

export default About;
