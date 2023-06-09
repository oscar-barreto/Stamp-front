import { Link } from "react-router-dom"




const Price = () => {
  return (
    <>
        <div id="Investimento" className="bg-[#78d64b] flex justify-center items-center h-40">
            <h2 className="text-white text-3xl md:text-4xl" style={{fontFamily:"helvetica"}}>Sobre o Investimento:</h2>
        </div>
        <div className="bg-[#78d64b] md:h-48 h-[400px]">
        
        <div className="md:flex md:flex-row flex flex-col justify-center items-center sm:flex sm:flex-col sm:justify-center sm:items-center md:p-2 md:p-4">

                <div className="border-2 border-white bg-[#78d64b] text-white rounded-2xl xl:h-[438px] xl:w-[440px] lg:h-[472px] lg:w-[440px] h-[425px] w-[354px] md:h-[550px] md:w-[500px] sm:h-[450px] sm:w-[600px]">
                    <div className="boleto">
                        <div className="boleto-top border-2 border-white rounded-2xl w-40 flex m-2">
                            <div className="p-1 m-1 ">
                                <div className=" border-white rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                                </svg>
                                </div>

                            </div>
                            <div className="whitespace-nowrap py-1 pr-1 m-1 text-xl text-white tracking-wider" style={{fontFamily:"helvetica"}}>Boleto</div>
                        </div>
                        <div className="boleto-bottom flex justify-center trscking-tight sm:tracking-normal flex-col justify-center items-center pl-16 ml-4 px-10 py-6 m-4">
                            <p className="text-xs sm:text-sm text-justify">
                            R$ 
                                <span className="text-lg tracking-tighter sm:tracking-normal sm:text-2xl" style={{fontFamily:"helvetica"}}> 1.180* </span>
                                ou em até 4x de R$                         
                                <span className="text-lg tracking-tighter sm:tracking-normal  sm:text-2xl" style={{fontFamily:"helvetica"}}> 310</span>
                                <br />
                                * à vista/PIX (5% de desconto)                           
                                <br />
                            </p>
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
                            <div className="whitespace-nowrap py-1 pr-1 m-1 text-xl text-white tracking-wider" style={{fontFamily:"helvetica"}}>Cartão</div>
                        </div>
                        <div className="cartao-bot flex justify-center items-center flex-col px-10 py-10 m-4">
                        
                        <p className="text-justify text-sm  tracking-tight sm:tracking-normal " style={{fontFamily:"helvetica"}}>R$
                        <span className="text-lg tracking-tighter sm:tracking-normal  sm:text-2xl " style={{fontFamily:"helvetica"}}> 1.240* </span>
                        (*em até 12x) 
                            <br/>
                            *(simular juros de parcelas)
                            {/* *(Valor de 01 Classe) */}
                            </p>
                        
                        </div>
                        <div className="flex text-sm justify-end  sm:mt-0 lg:pb-4 px-3 mb-2">                        
                            *(Valor de 01 Classe)
                        </div>
                    </div>
                    
                </div>

            <div className="flex justify-center items-center text-5xl text-[#78d64b] p-1 m-1">+</div>






            <div className="border-2 bg-white h-[425px] xl:h-[438px] xl:w-[440px] lg:h-[472px] lg:w-[440px] w-[350px] md:h-[550px] md:w-[500px] rounded-2xl border-[#78d64b] sm:h-[450px] sm:w-[600px]">
            <div className="inpi">
                        <div className="inpi-top border-2 border-[#78d64b] rounded-2xl w-40 flex m-2">
                            <div className="p-1 m-1 ">
                                <div className=" rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#78d64b]">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                                </svg>
                                </div>

                            </div>
                            <div className="whitespace-nowrap py-1 pr-1 m-1 text-xl text-[#78d64b] tracking-wider" style={{fontFamily:"helvetica"}}>Taxas INPI</div>
                        </div>
                        <div className="boleto-bottom flex flex-col justify-center items-center p-10 m-4 mt-16 sm:mt-24">
                            <p className="text-[#78d64b]" style={{fontFamily:"helvetica"}}>Taxa Inicial: <span className="text-2xl " style={{fontFamily:"helvetica"}}>R$ 142</span><br /> <br /> Taxa Final: <span className="text-2xl" style={{fontFamily:"helvetica"}}>R$ 298</span></p>
                            <p className="text-[#78d64b] text-xs" style={{fontFamily:"helvetica"}}>(*Pessoas Físicas, MEI, ME e EPP)</p>
                        </div>
                    </div>
                    <div className="w-full border-t border-white"></div>
            </div>



            <div className="flex flex-col justify-center md:items-start items-center p-2 m-2">
            <h3 className="text-l text-center md:text-start md:my-0 my-4 font-medium p-2 md:mb-4 text-[#78d64b] md:text-white" style={{fontFamily:"helvetica"}}>REGISTRE SUA MARCA <br /> COM EFICIÊNCIA E TRANSPARÊNCIA</h3>
            <Link to="https://wa.me/558188175252">
                <button className="bg-[#78d64b] hover:bg-white border-2 mx-1 border-[#78d64b] xl:mt-20 mt-12 mb-12 text-xl my-4 hover:text-[#78d64b] text-white p-3 lg:p-3 md:p-2 rounded" style={{fontFamily:"helvetica"}}>Converse com a gente</button>
            </Link>
            <p className="text-xs md:text-start text-center font-light mx-1 md:mb-10 text-[--green]">OS ORÇAMENTOS SÃO PERSONALIZADOS <br /> E POSSUÍMOS SUPORTE ESPECIALIZADO AO <br />CLIENTE DISPONÍVEL ATRAVÉS DOS NOSSOS<br /> CANAIS DE COMUNICAÇÃO</p>
            </div>



        </div>


        </div>
        <div className="bg-white h-[1080px] md:h-[400px]"></div>
    
    </>
  )
}

export default Price