import logoVerde from "../../assets/images/logoVerde.jpg"
import { useState } from "react";

const Navbar = () => {

    let Links =[
        {name:"HOME",link:"/"},
        {name:"SERVIÇOS",link:"/Services"},
        {name:"ENTENDA O PROCESSO",link:"/#ComoFunciona"},
        {name:"VANTAGENS",link:"/#Advantages"},
        {name:"INVESTIMENTO",link:"/#Custos"},
        {name:"CONTATO",link:"/#Contato"},

      ];

    const [open,setOpen]= useState(false);

  return (
    <>
        <div id="nav-bar" className='shadow-md w-full fixed top-0 left-0 bg-slate-950  z-[1]'>
            <div className='md:flex items-center justify-between md:px-10 bg-[#78d64b] px-7'>
            <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
            text-gray-800 '>
                
                <span className='text-3xl text-gray-50 mr-1 pt-2'>
                    <img className='w-50 h-28' src={logoVerde} alt="" /> 
                </span>
            </div>
            
            <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden text-grey-50'>
            <ion-icon style={{color:"white"}} name={open ? 'close':'menu'}></ion-icon>
            </div>

            <ul className={`md:flex md:items-center md:pb-0 pb-10 absolute md:static bg-[#78d64b] md:z-auto z-[-1] sm:z-auto  z-[-1]
            left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
                {
                Links.map((link)=>(
                    <li key={link.name} className='md:ml-8 text-l md:text-sm lg:text-xl md:my-0 my-7 z-2'>
                    <a href={link.link} className='scroll-smooth text-gray-50 hover:text-amber-700 duration-500 z-2'>{link.name}</a>
                    </li>
                ))
                }
            </ul>
            </div>
            </div>
    
    </>
  )
}

export default Navbar