import {motion} from 'framer-motion';
import { useState } from 'react';


const ExpCards = () => {

    const [isOpen, setIsOpen] = useState(false);




  return (
    <div className='m-0 p-0 box-border'>
        <motion.div 
        transition={{layout:{duration:0.8, type:'spring'}}}
        layout 
        onClick={()=> setIsOpen(!isOpen)}
        className="card bg-[--green] py-8 px-14 rounded shadow-md shadow-gray-500">
            <motion.div layout="position" className='flex'>
            <motion.h2 className='text-[#f7f7f7] text-xl'>
                Oposição à Registro de Marcas
                
            </motion.h2>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 mx-2 text-[#f7f7f7]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            </motion.div>
            {isOpen && (
            <motion.div
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{duration:1}}
            className='expand'>
                <p className='p-4 leading-8 text-white' style={{fontFamily:"helvetica"}}>Quando outra empresa tenta registrar uma marca similar ou idêntica à sua, é crucial tomar medidas para proteger seus direitos comerciais. A oposição de marcas desempenha um papel fundamental nesse processo, permitindo que você conteste o registro da marca que possa causar confusão ou prejudicar sua identidade empresarial</p>
                <p className=''>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum, error!</p>
            </motion.div>)
            }
        </motion.div>
    </div>
  )
}

export default ExpCards