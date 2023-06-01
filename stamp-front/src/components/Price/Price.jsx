const Price = () => {
  return (
    <div className="bg-black text-white flex flex-col items-center justify-center p-5">
       <div className="flex items-center">
        <h1 className="text-5xl p-5 tracking-wide" style={{textShadow:"2px 2px #57504d"}}>Quanto Custa ?</h1>
       </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 p-5">
            <div className="border-4 p-5 border-lime-500 rounded m-5 h-80 w-80 shadow-md shadow-gray-600">

                <div className="flex justify-center bg-lime-500 rounded text-2xl p-1 tracking-wide w-18 h-10" style={{textShadow:"1px 1px black"}}>Boleto ou Pix</div>

                    <div className="flex justify-center items-center">
                        <h1 className="text-2xl tracking-wide m-5 lg:mt-16">A vista de:<br></br> R$ 1.175,00</h1>
                    </div>
                </div>
                <div className="border-4 p-5 border-lime-500 rounded m-5 h-80 w-80 shadow-md shadow-gray-600">
                <div className="flex justify-center bg-lime-500 rounded text-2xl p-1 tracking-wide w-18 h-10" style={{textShadow:"1px 1px black"}}>Cartão</div>
                <div className="flex justify-center items-center">
                    <h1 className="text-2xl tracking-wide  m-5 lg:mt-16"> No cartão de crédito: R$ 1.250,00  até 12x</h1>
                </div>
            </div>        
        </div>
    </div>
  )
}

export default Price