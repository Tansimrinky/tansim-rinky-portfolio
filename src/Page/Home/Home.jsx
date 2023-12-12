import About from "../Components/About/About";
import Banner from "../Components/Banner/Banner";
import ContactMe from "../Components/ContactMe/ContactMe";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import Projects from "../Components/Projects/Projects";
import Skills from "../Components/Skills/Skills";
import { Element } from 'react-scroll';


const Home = () => {
    return (
        <div className="">
            <Navbar></Navbar>
            <Element name="home"><Banner></Banner></Element>
            <Element name="about"><About></About></Element>
            <Element name="skills"><Skills></Skills></Element>
            <Element name="projects"><Projects></Projects></Element>
            <Element name="contact"><ContactMe></ContactMe></Element>
            <Footer></Footer>
        </div>
    );
};

export default Home;