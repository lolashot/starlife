import logo from './logo.svg';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Service from "./components/Service";
import about from "./components/about";
import team from "./components/team";

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Service />
      <about />
      <team />

    </div>
  );
}

export default App;
