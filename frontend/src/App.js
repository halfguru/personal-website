import React, { Component } from 'react';
import ReactGA from 'react-ga';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      foo: 'bar',
    };

    ReactGA.initialize('UA-110570651-1');
    ReactGA.pageview(window.location.pathname);

  }

  render() {
    return (
      <div className="App">
        <Header />
        <About />
        <Resume />
        <Footer />
      </div>
    );
  }
}

export default App;
