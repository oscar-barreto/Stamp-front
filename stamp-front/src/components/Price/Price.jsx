import Boleto from "../PriceCard/Boleto";
import Cartao from "../PriceCard/Cartao";

const Price = () => {
  return (
    <>  
        <div className="bg-lime-700 h-64 rounded">
            {/* This will contain the prices */}
            <div className="grid p-5 lg:grid-cols-3 md:grid-cols-3 lg:flex lg:justify-center">
                <div className="lg:col-span-1 md:pr-2 md:mr-32 ">
                    <Boleto/>
                </div>
                <div className="lg:col-span-1  md:pl-2  md:ml-32">
                    <Cartao/>
                </div>
            </div>

            {/* This will contain the INPI prices */}
            <div></div>
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
