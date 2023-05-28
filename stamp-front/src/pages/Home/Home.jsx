import Advantages from "../../components/Advantages/Advantages";
import CardSection from "../../components/CardSection/Header";
import Navbar from "../../components/Navbar/Navbar";
import Table from "../../components/Table/Table";

const Home = () => {
  return (
   <>
         <Navbar/>
         <div className="h-3 mt-40 bg-lime-500"></div>
         <CardSection/>
         <Advantages/>
         <Table/>
   </>
  )
}

export default Home