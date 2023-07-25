import Header from "../../components/Header/Header";
import HowItWorks from "../../components/HowItWorks/HowItWorks";
import Navbar from "../../components/Navbar/Navbar";
import Price from "../../components/Price/Price";
import Footer from "../../components/Footer/Footer";
import InterSection2 from "../../components/Intersection/InterSection2";
import Advantages from "../../components/Advantages/Advantages";
import InterSection3 from "../../components/Intersection/InterSection3";
import CallServices from "../../components/CallServices/CallServices";
import VcSabia from "../../components/VcSabia/VcSabia";

const Home = () => {
  return (
   <>
         <Navbar/>
         <div className="h-4 mt-24 bg-[#78d64b]"></div>
         <Header/>
         <InterSection2/>
          <HowItWorks/>
          <CallServices/>
          <Advantages/>
          <InterSection3/>

          {/* <InterSection1/> */}

      
          <VcSabia/>

          {/* <InterSection2/> */}
         <Price/>
         {/* <InterSection3/> */}
         <Footer/>
   </>
  )
}

export default Home