 // import logo from './logo.svg';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Service from "./components/Service";
import About from "./components/About";
import Team from "./components/Team";
import Testimonial from "./components/Testimonial";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Testimonialcreate from "./components/testimonialcreate";
import Testimonialread from "./components/testimonialread";
import Testimonialupdate from "./components/testimonialupdate";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Teamcreate from "./components/teamcreate";
import Teamread from "./components/teamread";
import Teamupdate from "./components/teamupdate";
import Aboutcreate from "./components/aboutcreate";
import Aboutread from "./components/aboutread";
import Aboutupdate from "./components/aboutupdate";

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Service />
      <About />
      <Team />
      <Testimonial />
      <Pricing />
      <Contact />
      <Footer />
     
     <Router>
     
        <div>
          <Route exact path='/testimonialcreate' component={Testimonialcreate} />
        </div>
        <div style={{ marginTop: 20 }}>
          <Route exact path='/testimonialread' component={Testimonialread} />
        </div>

        <Route path='/testimonialupdate' component={Testimonialupdate} />
        <div>
          <Route exact path='/teamcreate' component={Teamcreate} />
        </div>
         <div style={{ marginTop: 20 }}>
          <Route exact path='/teamread' component={Teamread} />
         </div>
        <Route path='/teamupdate' component={Teamupdate} />
        <div>
          <Route exact path='/aboutcreate' component={Aboutcreate} />
        </div>
        <div style={{ marginTop: 20 }}>
          <Route exact path='/aboutread' component={Aboutread} />
         </div>

        <Route path='/aboutupdate' component={Aboutupdate} />
        </Router>
    </div>
  );
}

export default App;
