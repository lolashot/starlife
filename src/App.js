// import logo from './logo.svg';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Service from "./components/Service";
import About from "./components/about";
import Team from "./components/team";

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Service />
      <About />
      <Team />

    </div>
  );
}

export default App;
