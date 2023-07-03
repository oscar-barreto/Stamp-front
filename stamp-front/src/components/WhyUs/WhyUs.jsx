import greenWhiteLogo from "../../assets/images/greenwhitelogo.jpg";
import { Link } from "react-router-dom";


const WhyUs = () => {
  return (
    <>  
      <div className="w-full md:h-20 h-40 bg-white">
        
      </div>
      <div className="w-full h-20 bg-white">
          <div className="flex justify-center">
          <div className="md:grid md:grid-cols-2 flex flex-col-reverse bg-[#78d64b] md:rounded-2xl lg:w-[900px] lg:h-[370px]">
                <div className="img-container col-span-1">
                <img className="md:h-[350px] h-[250px] rounded-l-2xl" src={greenWhiteLogo} alt="" />
                </div>
                <div className="p-4 m-1 col-span-1">
                    <h3 className="text-white md:text-center text-center text-4xl font-bold p-2 m-2" style={{fontFamily:"helvetica"}}>VOCÊ SABIA?</h3>
                    <p className="text-white md:text-center text-center text-sm tracking-wide p-2 m-2 leading-7 " style={{fontFamily:"helvetica"}}>O registro da marca "Havaianas": As
                      famosas sandálias de borracha
                       tiveram sua marca
                      registrada em 1962. O nome foi
                      inspirado no arquipélago do Havaí e
                      seu design simples e colorido tornou-se um símbolo da cultura brasileira ao
                      redor do mundo</p>
                      <div className="flex md:justify-center justify-center py-2 md:py-0">
                        <Link to="https://wa.me/+558199605252">
                        <button className="bg-white text-xl p-3 m-4 text-[#78d64b] hover:text-white border-2 border-white hover:bg-[#78d64b] rounded" style={{fontFamily:"helvetica"}}>Entrar em contato</button>
                        </Link>
                      </div>
                </div>
              </div>
          </div>
      </div>
      <div className="w-full md:h-64 h-[500px] bg-white"></div>
      <div className="w-full h-28 bg-white">
        
        </div>
    
    </>
  )
}

export default WhyUs