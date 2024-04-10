import Navbar from "./Components/Navbar/Navbar";
import './App.css'
import Intro from "./Components/Intro/Intro";
import Services from "./Components/Services/Services";
import Experience from "./Components/Experience/Experience";
import Works from "./Components/Works/Works";
import Portfolio from "./Components/Portfolio/Portfolio";
import Testimonials from "./Components/Testimonials/Testimonials";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import {themeContext} from './Context'
import {useContext} from "react"
import ProjectCard from "./Components/ProjectCard/ProjectCard";
import Form from "./Components/Contact/Form";

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="App" style={{background: darkMode? 'black' : '',
    color: darkMode?'white':''}}>
      <Navbar/>
      <Intro/>
      <Services/>
      <Experience/>
      {/* <Works/> */}
      <Portfolio/>
      {/* <Testimonials/> */}
      {/* <ProjectCard
        id = "project"
        className = "odd"
        projectTitle="Wiggles: Pet Care Made Easy"
        projectDesc="A one-stop solution for pet data management, automated vaccinations, QR-based lost pet recovery, and organizing pet playdates."
        projectLink="https://github.com/DevanshSahni/Wiggles"
        deployedProjectLink="https://wiggles.vercel.app"
        projectImg={require('./images/projectWiggles.jpg')}
      /> */}

      <Contact/>

      {/* <Form/> */}
      <Footer/>
    </div>
  );
}

export default App;
