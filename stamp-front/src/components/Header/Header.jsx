import whiteLogo from '../../assets/images/whiteLogo.png'

const Header = () => {
  return (
    <>
        <div className="grid lg:grid-cols-2 bg-black p-5" style={{backgroundColor:""}}>
        {/* bg-gradient-to-b from-black to-gray-800 */}
            <div className="m-10">
                <h1 className="text-5xl font-bold m-5 text-white p-1">Escolha a Stamp e dê proteção à marca que você construiu</h1>
                <p className="text-xl font-light m-5 text-white p-1">Carimbe o ® no seu legado no mundo dos negócios</p>
                <div>
                    <button className="bg-zinc-950 text-lime-500 font-bold border-2 border-lime-500 hover:text-white m-5 p-4 rounded text-xl">Start with free laywers check</button>
                    <button className="bg-lime-500 text-white font-bold m-5 p-4 rounded text-xl">Me mostre os precos</button>
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