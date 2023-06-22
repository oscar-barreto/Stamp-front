import sectionphoto from "../../assets/images/sectionphoto.png";
import Slider from "react-slick";
import { Link } from "react-router-dom";


const Advantages = () => {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 900,
        autoplaySpeed: 2000,
        cssEase: "linear"
      };



  return (
    <>  
        <div id="Advantages" className="w-100 h-40 bg-[#f7f7f7]"></div>
        <div className="lg:grid lg:grid-cols-9 bg-[#f7f7f7] flex flex-col-reverse">
            <div className="lg:flex lg:flex-col lg:overflow-hidden col-span-1 lg:justify-end">
            </div>
            <div className="p-10 col-span-4">
                <h2 className=" text-3xl text-[Poppins] border-white p-2 py-4 my-4 tracking-wide text-[#78d64b]" style={{fontFamily:"helvetica"}}>Vantagens de ter sua marca registrada pela Stamp:</h2>
                <Slider className="py-2" {...settings}>
                    <div className="card p-2">
                        <div>

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mx-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.05 4.575a1.575 1.575 0 10-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 013.15 0v1.5m-3.15 0l.075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 013.15 0V15M6.9 7.575a1.575 1.575 0 10-3.15 0v8.175a6.75 6.75 0 006.75 6.75h2.018a5.25 5.25 0 003.712-1.538l1.732-1.732a5.25 5.25 0 001.538-3.712l.003-2.024a.668.668 0 01.198-.471 1.575 1.575 0 10-2.228-2.228 3.818 3.818 0 00-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0116.35 15m.002 0h-.002" />
                            </svg>

                        </div>
                        <p className="text-sm font-thin p-2 my-2" style={{fontFamily:"helvetica"}}>Impedir a utilização indevida por terceiros</p>
                    </div>
                    <div className="card p-2">
                        <div>
                            
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mx-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5" />
                            </svg>


                        </div>
                        <p className="text-sm font-thin  p-2 my-2" style={{fontFamily:"helvetica"}}>Uso exclusivo em território nacional</p>
                    </div>
                    <div className="card p-2">
                    <div>
                                
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mx-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>


                        </div>
                        <p className="text-sm font-thin  p-2 my-2" style={{fontFamily:"helvetica"}}>Agregar valor a sua empresa</p>
                    </div>
                    <div className="card p-2">
                    <div>
                            
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mx-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
                        </svg>


                        </div>
                        <p className="text-sm font-thin  p-2 my-2" style={{fontFamily:"helvetica"}}>Poder utilizar o símbolo ® na sua marca</p>
                    </div>
                    <div className="card p-2">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mx-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
                        </svg>

                    </div>
                        <p className="text-sm font-thin  p-2 my-2" style={{fontFamily:"helvetica"}}>Direito de licenciar, vender ou franquear a sua marca</p>
                    </div>
                    <div className="card p-2">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mx-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                        </svg>

                    </div>
                    <p className="text-sm font-thin p-2 my-2" style={{fontFamily:"helvetica"}}>Evitar o risco de indenizações por uso indevido de marca</p>
                    </div>
                    <div className="card p-2 ">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mx-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6L9 12.75l4.286-4.286a11.948 11.948 0 014.306 6.43l.776 2.898m0 0l3.182-5.511m-3.182 5.51l-5.511-3.181" />
                        </svg>


                    </div>
                    <p className="text-sm font-thin  p-2 my-2" style={{fontFamily:"helvetica"}}>Evitar risco de perder todo investimento em identidade visual física e digital </p>
                    </div>
                    <div className="card p-2">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mx-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M22 10.5h-6m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
                        </svg>

                    </div>
                    <p className="text-sm font-thin  p-2 my-2" style={{fontFamily:"helvetica"}}>Evitar risco de perder os clientes que conheceram a empresa pelo nome da marca</p>
                    </div>

                    <div className="card p-2">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mx-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                        </svg>

                    </div>
                    <p className="text-sm font-thin p-2 my-2" style={{fontFamily:"helvetica"}}>Evitar o risco de ter franqueamento da marca vedado por lei</p>
                    </div>
                    
                </Slider>
                <Link to="https://wa.me/+558199605252">
                <button className="bg-[#78d64b] self-center text-xl hover:bg-white hover:text-[#78d64b] border-2 border-white hover:border-[#78d64b] text-white px-4 py-3 m-1 rounded">Entrar em contato</button>
                </Link>
            </div>
            <div className="md:py-0 md:my-0 md:py-10 md:my-10 lg:my-0 my-8 sm:my-0 lg:py-0 md:pl-2 md:col-span-4 flex justify-center items-center">
                <img className='md:rounded-tl-2xl' src={sectionphoto} alt="" />
            </div>
        </div>
    </>

  )

}

export default Advantages