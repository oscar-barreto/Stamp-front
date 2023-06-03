import Advantages from "../../components/Advantages/Advantages";
import Header from "../../components/Header/Header";
import HowItWorks from "../../components/HowItWorks/HowItWorks";
import Navbar from "../../components/Navbar/Navbar";
import Table from "../../components/Table/Table";
import Price from "../../components/Price/Price";

const Home = () => {
  return (
   <>
         <Navbar/>
         <div className="h-2 mt-40 bg-black"></div>
         <Header/>
         <div className="h-2  bg-lime-500"></div>
         <Advantages/>
         <HowItWorks/>
         <Price/>
         <Table/>
   </>
  )
}

export default Home