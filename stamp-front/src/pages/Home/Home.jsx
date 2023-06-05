import Header from "../../components/Header/Header";
import HowItWorks from "../../components/HowItWorks/HowItWorks";
import Navbar from "../../components/Navbar/Navbar";
import Price from "../../components/Price/Price";
import Footer from "../../components/Footer/Footer";
import AboutUs from "../../components/AboutUs/AboutUs";
import Advantages from "../../components/Advantages/Advantages";

const Home = () => {
  return (
   <>
         <Navbar/>
         <div className="h-2 mt-40 bg-black"></div>
         <Header/>
         <div className="h-2  bg-lime-500"></div>
          <HowItWorks/>
          <Advantages/>
          {/* <AboutUs/> */}
         <Price/>
         <Footer/>
   </>
  )
}

export default Home