import Header from "../../components/Header/Header";
import HowItWorks from "../../components/HowItWorks/HowItWorks";
import Navbar from "../../components/Navbar/Navbar";
import Price from "../../components/Price/Price";
import Footer from "../../components/Footer/Footer";
import InterSection1 from "../../components/Intersection/InterSection1";
import InterSection2 from "../../components/Intersection/InterSection2";
import Advantages from "../../components/Advantages/Advantages";

const Home = () => {
  return (
   <>
         <Navbar/>
         <div className="h-2 mt-40 bg-black"></div>
         <Header/>
         <div className="h-2  bg-[#78d64b]"></div>
          <HowItWorks/>
          <Advantages/>
          <InterSection1/>
          <InterSection2/>
         <Price/>
         <Footer/>
   </>
  )
}

export default Home