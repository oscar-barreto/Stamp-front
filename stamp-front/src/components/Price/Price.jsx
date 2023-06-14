import Boleto from "../PriceCard/Boleto";
import Cartao from "../PriceCard/Cartao";

const Price = () => {
  return (
    <>  
        <div className="bg-lime-800 h-20"></div>
        <div className="bg-lime-800 h-56">
            {/* This will contain the prices */}
            {/* <div className="grid p-5 lg:grid-cols-3 md:grid-cols-3 lg:flex lg:justify-center">
                <div className="lg:col-span-1 md:pr-2 md:mr-32 ">
                    <Boleto/>
                </div>
                <div className="lg:col-span-1  md:pl-2  md:ml-32">
                    <Cartao/>
                </div>
            </div> */}
            <div className="price-container flex justify-end">
                <div className="flex flex-col justify-center items-center p-2 m-2">
                    <h4 className="text-white font-light text-2xl m-2">Escolha a forma de pagamento <br /> de acordo com sua conveniencia:</h4>
                    <p className="text-lime-800 font-light m-2  text-xs">*O metodo escolhido ainda tera acrescimo de R$ 298,00 <br /> da taxa de decenio apos o processo*</p>
                </div>
                <div className="p-1 m-1" >
                    <Boleto/>
                </div>
                <div className="p-1 m-1">
                    <Cartao/>
                </div>
            </div>

            {/* This will contain the INPI prices */}
            
        </div>
        <div className="h-80 bg-[#f6f7f6]">
          
        </div>
    </>
  )
}

export default Price

{/* <div className="p-1 grid md:grid-cols-3 lg:grid-cols-3">
<div className="lg:col-span-1 md:col-span-1 md:mr-10 sm:col-span-3">
    <PriceCard/>
</div>

<div className="lg:col-span-1 md:col-span-1 md:ml-20 sm:col-span-3">
    <PriceCard/>
</div>
<div className="lg:col-span-1 md:col-span-2 sm:col-span-3">
    <PriceCard/>
</div> */}
