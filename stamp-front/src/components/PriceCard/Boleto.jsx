
const Boleto = () => {
  return (
    <>
        <div className="border-2 bg-gray-100 border-black w-96 rounded-2xl">
                        <div className="p-1 m-1 flex justify-between">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 p-1 m-1 border-2 border-black rounded-full">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                            </svg>
                            <div className="p-2 border-2 border-lime-800 font-bold text-lime-800 rounded-xl">Most Popular</div>
                        </div>
                        <div className="">
                            <h2 className="m-2 p-2 text-2xl text-lime-800">Boleto ou Pix</h2>
                            <p className="m-2 p-2 text-sm">O modo preferido de pagamento dos nossos clientes</p>
                        </div>
                        <div>
                            <h1 className="m-2 p-2 font-bold text-lime-800 text-5xl">R$ 1.175</h1>
                        </div>
                        <div className="flex justify-center p-2 m-2">
                            <div className="border-2 w-80"></div>
                        </div>
                        <div>
                            <ul className="m-2 p-2">
                                <li className="flex">
                                    
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8 border-2 border-black rounded-full p-1 m-1">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                                        </svg>
                                
                                    <p className="p-1 m-1">- A vista ate 5% de desconto</p>
                                </li>
                                <li className="flex">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8 m-1 p-1 border-2 border-black rounded-full">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                                </svg>
                                    <p className="p-1 m-1">- Boleto de ate 4 vezes</p>
                                </li>
                            </ul>
                        </div>
                        
                    </div>

    </>
  )
}

export default Boleto

/* <div className="flex justify-center bg-white">
                <div className="border-2 rounded-xl border-black">
                    <div className="border-2 border-black rounded-full m-1 p-1 w-10 h-10 flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                    </svg>
                    </div>
                    <div className="">
                        <h2 className="text-2xl m-2 p-2 font-bold text-lime-800">Taxas INPI</h2>
                        <p className="m-2 p-2 text-sm">taxa de decênio após o processo - não inclusa</p>
                    </div>
                    <div>
                        <h1 className="m-2 p-2 font-bold text-lime-800 text-5xl">R$ 298</h1>
                    </div>
                    <div className="flex justify-center p-2 m-2">
                        <div className="border-2 w-80"></div>
                    </div>
                </div>
            </div> */