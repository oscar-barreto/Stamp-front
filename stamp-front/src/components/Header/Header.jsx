import greenWhiteLogo from '../../assets/images/greenWhiteLogo.jpg';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
        <div className="grid lg:grid-cols-2 bg-[#78d64b] p-5">
        {/* bg-gradient-to-b from-black to-gray-800 */}
            <div className="m-10">
                <h1 className="sm:text-5xl text-[33px] font-bold md:m-5 m-2 text-white p-1" style={{fontFamily:"helvetica"}}>Escolha a Stamp e dê proteção à marca que você construiu</h1>
                <p className="text-xl font-light md:m-5 text-white m-2 p-1" style={{fontFamily:"helvetica"}}>Carimbe o ® no seu legado no mundo dos negócios</p>
                <div className='md:block lg:flex'>
                    <Link to="https://wa.me/+558199605252">
                        <button className="bg-[#78d64b] w-[200px]  md:w-[250px] text-white m-2 font-bold border-2 p-3 border-white md:m-5 md:p-4 rounded text-l  md:text-xl hover:bg-white hover:text-[#78d64b]" style={{fontFamily:"helvetica"}}>Converse com a gente</button>
                    </Link>
                    <a href="#Custos">
                        <button className="bg-white w-[200px] text-[#78d64b] m-2 md:w-[250px] font-bold md:m-5 p-3 md:p-4 rounded text-l md:text-xl border-2 border-white hover:bg-[#78d64b] hover:text-white" style={{fontFamily:"helvetica"}}>Me mostre os preços</button>
                    </a>
                </div>
            </div>
            <div className='flex justify-end lg:justify-end items-end'>
                <img  id="Sobre-a-Stamp" className='md:h-40 h-20 lg:p-5' src={greenWhiteLogo} alt="" />
            </div>
        </div>
    </>
  )
}

export default Header