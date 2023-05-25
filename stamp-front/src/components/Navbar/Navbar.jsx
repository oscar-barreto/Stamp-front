import logo from '../../assets/images/logo.png'
import { useState } from "react";

const Navbar = () => {

    let Links =[
        {name:"HOME",link:"/"},
        {name:"SERVICE",link:"/"},
        {name:"ABOUT",link:"/"},
        {name:"BLOG'S",link:"/"},
      ];

    const [open,setOpen]= useState(false);

  return (
    <>
        <div id="nav-bar" className='shadow-md w-full fixed top-0 left-0 bg-slate-950'>
            <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7' style={{backgroundColor:"black"}}>
            <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
            text-gray-800 '>
                
                <span className='text-3xl text-gray-50 mr-1 pt-2'>
                    <img className='w-50 h-32' src={logo} alt="" /> 
                </span>
            </div>
            
            <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden text-grey-50'>
            <ion-icon style={{color:"white"}} name={open ? 'close':'menu'}></ion-icon>
            </div>

            <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`} style={{backgroundColor:"black"}}>
                {
                Links.map((link)=>(
                    <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
                    <a href={link.link} className='text-gray-50 hover:text-lime-500 duration-500'>{link.name}</a>
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