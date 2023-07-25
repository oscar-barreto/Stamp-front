import phoneView from "../../assets/images/phoneview.png";
import EmailForm from "../EmailForm/EmailForm";
import { Link } from "react-router-dom";

const CallServices = () => {
  return (
    <>
    <div className="w-100 h-auto md:h-auto lg:h-[500px] bg-[--green] flex md:flex-row flex-col justify-center grid-cols-2">


        <div className="services-container flex md:flex-row flex-col justify-center items-center px-10">

                <div className="img-container">
                    <img className="md:w-52 w-40 md:py-0 pt-16 pb-8" src={phoneView} alt="" />
                </div>
                <div className="">
                    <h2 className="md:text-3xl text-4xl lg:text-4xl font-extrabold pb-5  tracking-wider md:tracking-wide  md:font-semibold md:text-start text-center md:p-5 text-[#f7f7f7]" style={{fontFamily:"helvetica"}}>Oferecemos tambem  uma  <br className="hidden sm:block" /> grande variedade   de servicos</h2>
                    <p className="text-[#f7f7f7] text-lg md:text-base lg:text-lg md:text-start text-center py-2 md:p-5" style={{fontFamily:"helvetica"}}>Aqui na Stamp oferecemos muito alem  da registro de marcas, temos uma vasta <br className="hidden sm:block" /> variedade de servicos pare cobrir todas as suas necessidades</p>
                    <div className="flex justify-center md:justify-start">
                    <Link to="/Serviços">
                    <button className="m-5 text-[--green] border-2 border-white hover:opacity-80 hover:border-2 hover:border-white hover:bg-[--green] hover:text-white  font-semibold shadow-sm shadow-zinc-400 bg-white rounded  p-3" style={{fontFamily:"helvetica"}}>SERVIÇOS</button>
                    </Link>
                    </div>
                </div>


        </div>
        <div className="sm:py-0 sm:my-0 py-10 my-10 border-t-2 md:border-0">
        
        <EmailForm/>
        </div>




    </div>  
    <div className="bg-white h-40"></div>
    </>
  )
}

export default CallServices