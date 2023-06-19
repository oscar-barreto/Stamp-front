import greenWhiteLogo from "../../assets/images/greenwhitelogo.jpeg"
import inclinedLogo from "../../assets/images/inclinedLogo.png"



const WhyUs = () => {
  return (
    <>  
      <div className="w-full h-48 bg-white">
          <div className="flex justify-center">
              <div className="md:grid md:grid-cols-3 flex flex-col-reverse bg-[#78d64b] md:rounded-2xl lg:w-[900px] lg:h-[370px]">
                <div className="img-container col-span-1">
                  <img className="md:h-[350px] h-[284px] rounded-l-2xl" src={greenWhiteLogo} alt="" />
                </div>
                <div className="p-4 m-1 col-span-2">
                    <h3 className="text-white md:text-start text-center text-4xl font-bold p-2 m-2">VOCÊ SABIA?</h3>
                    <p className="text-white md:text-start text-center text-sm tracking-wide p-2 m-2 leading-7 ">O registro da marca "Havaianas": As
                      famosas sandálias de borracha
                      "Havaianas" tiveram sua marca
                      registrada em 1962. O nome foi
                      inspirado no arquipélago do Havaí e
                      seu design simples e colorido tornouse um símbolo da cultura brasileira ao
                      redor do mundo</p>
                      <div className="flex md:justify-start justify-center py-2 md:py-0">
                        <button className="bg-white text-xl p-3 m-4 text-[#78d64b] rounded-xl ">Entrar em contato</button>
                      </div>
                </div>
              </div>
          </div>
      </div>
      <div className="w-full h-64 bg-[#f7f7f7]"></div>
    
    </>
  )
}

export default WhyUs