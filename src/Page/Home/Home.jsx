import About from "../Components/About/About";
import Banner from "../Components/Banner/Banner";
import Navbar from "../Components/Navbar/Navbar";
import Skills from "../Components/Skills/Skills";


const Home = () => {
    return (
        <div className="">
            <Navbar></Navbar>
            <Banner></Banner>
            <About></About>
            <Skills></Skills>
        </div>
    );
};

export default Home;