
const Cartao = () => {
    return (
      <>
          <div className="border-2 sm:my-2 bg-lime-800 text-white border-white w-96 rounded-2xl">
                          <div className="p-1 m-1 flex justify-between">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 p-1 m-1 border-2 border-white rounded-full">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                            </svg>
                            <div className="p-2 border-2 border-white font-bold text-white rounded-xl">Mais facil</div>
                          </div>
                          <div className="">
                              <h2 className="m-2 p-2 text-2xl text-white">Cartao</h2>
                              <p className="m-2 p-2 text-sm">O modo preferido de pagamento dos nossos clientes</p>
                          </div>
                          <div>
                              <h1 className="m-2 p-2 font-bold text-white text-5xl">R$ 1.240</h1>
                          </div>
                          <div className="flex justify-center p-2 m-2">
                              <div className="border-2 w-80"></div>
                          </div>
                          <div>
                              <ul className="m-2 p-2">
                                  <li className="flex">
                                      

                                  </li>
                                  <li className="flex">
                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8 m-1 p-1 border-2 border-white rounded-full">
                                      <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                                  </svg>
                                      <p className="p-1 m-1">- Ate 12 vezes no Cartao</p>
                                  </li>
                              </ul>
                          </div>
                          
                      </div>
  
      </>
    )
  }
  
  export default Cartao