import {Link} from "react-router-dom";

const HowItWorks = () => {
  return (
    <>
        <div id="ComoFunciona" className='flex justify-center flex-col items-center lg:py-32 p-2 m-2'>
                <h2 className="text-3xl tracking-wide text-[#78d64b] py-4 mb-8" style={{fontFamily:"helvetica"}}>Entenda o processo:</h2>
            <div className="lg:flex md:flex sm:flex-col md:flex-col lg:flex-row">
                <div className="flex flex-col justify-center items-center my-4 lg:my-0">
                    <div className="border-2 border-black rounded-full h-20 w-20">
                        <div className="w-8 h-6 rounded-full bg-lime-500 flex justify-center items-center" style={{fontFamily:"helvetica"}}>1</div>
                        <div className="flex justify-center items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                            </svg>
                        </div>

                    </div>
                    <div className="">
                        <h6 className="text-center pb-1 px-1 mb-1 text-[#78d64b] font-bold" style={{fontFamily:"helvetica"}}>Pesquisa de viabilidade:</h6>
                        <p className="text-center p-1 m-1 " style={{fontFamily:"helvetica"}}>Analisamos a disponibilidade <br /> da sua marca, uma etapa <br /> crucial para <br /> evitar futuros problemas.</p>

                    </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 self-start mt-5 lg:block sm:hidden md:hidden hidden">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>

                <div className="flex flex-col justify-center items-center my-4 lg:my-0">
                    <div className="border-2 border-black rounded-full h-20 w-20">
                        <div className="w-8 h-6 rounded-full bg-lime-500 flex justify-center items-center" style={{fontFamily:"helvetica"}}>2</div>
                        <div className="flex justify-center items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75" />
                        </svg>

                        </div>

                    </div>
                    <div>
                        <h6 className="text-center pb-1 px-1 mb-1 text-[#78d64b] font-bold" style={{fontFamily:"helvetica"}}>Protocolo do pedido:</h6>
                        <p className="text-center p-1 m-1" style={{fontFamily:"helvetica"}}>Realizamos todo o <br /> processo burocrático  para <br /> você. Relaxa, a Stamp <br /> cuida disso!</p>
                    </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 self-start mt-5 lg:block sm:hidden md:hidden hidden">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
                <div className="flex flex-col justify-center items-center my-4 lg:my-0">
                    <div className="border-2 border-black rounded-full h-20 w-20">
                        <div className="w-8 h-6 rounded-full bg-lime-500 flex justify-center items-center" style={{fontFamily:"helvetica"}}>3</div>
                        <div className="flex justify-center items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
                        </svg>

                        </div>

                    </div>
                    <div>
                        <h6 className="text-center pb-1 px-1 mb-1 text-[#78d64b] font-bold" style={{fontFamily:"helvetica"}}>Análise do INPI:</h6>
                        <p className="text-center p-1 m-1" style={{fontFamily:"helvetica"}}>Agora, é o momento de esperar a <br /> análise do INPI. A paciência é <br /> parte do processo. (leva em <br />
                     média de 6 a 12 meses)</p>

                    </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 self-start mt-5 lg:block sm:hidden md:hidden hidden">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
                <div className="flex flex-col justify-center items-center my-4 lg:my-0">
                    <div className="border-2 border-black rounded-full h-20 w-20">
                        <div className="w-8 h-6 rounded-full bg-lime-500 flex justify-center items-center" style={{fontFamily:"helvetica"}}>4</div>
                        <div className="flex justify-center items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 019 9v.375M10.125 2.25A3.375 3.375 0 0113.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 013.375 3.375M9 15l2.25 2.25L15 12" />
                        </svg>

                        </div>

                    </div>
                    <div>
                        <h6 className="text-center pb-1 px-1 mb-1 text-[#78d64b] font-bold" style={{fontFamily:"helvetica"}}>Decisão do INPI:</h6>
                        <p className="text-center p-1 m-1" style={{fontFamily:"helvetica"}}>A decisão do INPI é <br /> determinante. <br /> Vamos juntos <br /> nessa etapa decisiva!</p>

                    </div>
                </div>    
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 self-start mt-5 lg:block sm:hidden md:hidden hidden">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>            
                <div className="flex flex-col justify-center items-center my-4 lg:my-0">
                    <div className="border-2 border-black rounded-full h-20 w-20">
                        <div className="w-8 h-6 rounded-full bg-lime-500 flex justify-center items-center">5</div>
                        <div className="flex justify-center items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                        </svg>

                        </div>

                    </div>
                    <div>
                        <h6 className="text-center pb-1 px-1 mb-1 text-[#78d64b] font-bold" style={{fontFamily:"helvetica"}}>Emissão do certificado:</h6>
                        <p className="text-center p-1 m-1" style={{fontFamily:"helvetica"}}>Hora do pagamento da taxa final <br /> do INPI e comemorar <br /> a sua  marca com  o ® carimbado! <br /> (validade de 10 anos).</p>

                    </div>
                </div>            
            </div>
            <div className="my-20 " id="Advantages">
            <Link to="https://wa.me/+558199605252">
                <button className="bg-[--green] border-2 border-[--green] font-semibold hover:bg-white hover:text-[--green]  text-white p-3 rounded text-l">ENTRE EM CONTATO</button>
                </Link>
            </div>
        </div>
    </>
  )
}

export default HowItWorks