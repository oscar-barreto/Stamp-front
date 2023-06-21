import whiteLogo from '../../assets/images/whiteLogo.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
        <div className="grid lg:grid-cols-2 bg-[#78d64b] p-5">
        {/* bg-gradient-to-b from-black to-gray-800 */}
            <div className="m-10">
                <h1 className="md:text-5xl text-5xl font-bold md:m-5 m-2 text-white p-1" style={{fontFamily:"helvetica"}}>Escolha a Stamp e dê proteção à marca que você construiu</h1>
                <p className="text-xl font-light md:m-5 text-white m-2 p-1" style={{fontFamily:"helvetica"}}>Carimbe o ® no seu legado no mundo dos negócios</p>
                <div>
                    <Link to="https://wa.me/+558199605252">
                        <button className="bg-[#78d64b] text-white m-2 font-bold border-2 border-white hover:text-white md:m-5 p-4 rounded text-xl" style={{fontFamily:"helvetica"}}>Converse com a gente</button>
                    </Link>
                    <Link to="#Custos">
                        <button className="bg-white text-[#78d64b] m-2 font-bold md:m-5 p-4 rounded text-xl" style={{fontFamily:"helvetica"}}>Me mostre os precos</button>
                    </Link>
                </div>
            </div>
            <div className='flex lg:justify-end items-end'>
                <img className='h-40 lg:p-5' src={whiteLogo} alt="" />
            </div>
        </div>
    </>
  )
}

export default Header