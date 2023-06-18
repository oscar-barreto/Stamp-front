
const Price = () => {
  return (
    <>
        <div className="bg-[#78d64b] flex justify-center items-center h-40">
            <h2 className="text-white text-4xl">Quanto custa?</h2>
        </div>
        <div className="bg-[#78d64b] h-48">
        
        <div className="flex p-4">

                <div className="border-2 border-white bg-[#78d64b] text-white rounded-2xl h-[420px] w-[400px]">
                    <div className="boleto">
                        <div className="boleto-top border-2 border-white rounded-2xl w-40 flex m-2">
                            <div className="p-1 m-1 ">
                                <div className=" border-white rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                                </svg>
                                </div>

                            </div>
                            <div className="p-1 m-1 text-xl tracking-wider">Boleto</div>
                        </div>
                        <div className="boleto-bottom flex justify-center p-10 m-4">
                            <p> <span className="text-2xl f">R$ 1.235 </span> ou em até 4x R$ 325*5% de desconto à vista ou PIX</p>
                        </div>
                    </div>
                    <div className="w-full border-t border-white"></div>




                    <div className="Cartao">

                        <div className="cartao-top border-2 border-white rounded-2xl w-40 flex m-2">
                            <div className="p-1 m-1">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                                </svg>

                            </div>
                            <div className="p-1 m-1 text-xl tracking-wider">Cartão</div>
                        </div>
                        <div className="cartao-bot flex justify-center p-10 m-4">
                        <p> <span className="text-2xl f">R$ 1.235 </span> ou em até 4x R$ 325*5% de desconto à vista ou PIX</p>                        
                        </div>
                    </div>
                    
                </div>

            <div className="flex justify-center items-center text-5xl text-[#78d64b] p-1 m-1">+</div>






            <div className="border-2 bg-white h-[420px] w-[400px] rounded-2xl border-[#78d64b]">
            <div className="inpi">
                        <div className="inpi-top border-2 border-[#78d64b] rounded-2xl w-40 flex m-2">
                            <div className="p-1 m-1 ">
                                <div className=" rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#78d64b]">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                                </svg>
                                </div>

                            </div>
                            <div className="p-1 m-1 text-xl text-[#78d64b] tracking-wider">Taxa INPI</div>
                        </div>
                        <div className="boleto-bottom flex flex-col justify-center items-center p-10 m-4">
                            <p className="text-[#78d64b]"> <span className="text-2xl f">R$ 142 </span>taxa inicial + <span className="text-2xl">R$ 298</span>pessoas físicas, MEI, ME e EPP)</p>
                        </div>
                    </div>
                    <div className="w-full border-t border-white"></div>
            </div>



            <div className="flex flex-col justify-center items-start p-2 m-2">
            <h3 className="text-l font-medium p-2  mt-10 text-[#78d64b]">REGISTRE SUA MARCA DE FORMA <br /> DESCOMPLICADA E COM VALOR ACESSÍVEL.</h3>
            <button className="bg-[#78d64b] text-white p-2 m-2 rounded-xl">Converse com a gente</button>
            </div>



        </div>


        </div>
        <div className="bg-white h-80"></div>
    
    </>
  )
}

export default Price