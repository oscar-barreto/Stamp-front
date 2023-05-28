import whiteLogo from '../../assets/images/whiteLogo.png'

const Header = () => {
  return (
    <>
        <div className="grid lg:grid-cols-2 bg-black p-5" style={{backgroundColor:""}}>
        {/* bg-gradient-to-b from-black to-gray-800 */}
            <div className="m-10">
                <h1 className="text-5xl font-bold m-5 text-white p-1">Protecting the heart<br></br> and soul of your business</h1>
                <p className="text-xl font-light m-5 text-white p-1">Simple, fast & affordable trademark registration.</p>
                <div>
                    <button className="bg-zinc-950 text-lime-500 hover:text-gray-500 m-5 p-4 rounded text-l">Start with free laywers check</button>
                    <button className="bg-gray-100 text-black m-5 p-4 rounded text-l">Show Price List</button>
                </div>
            </div>
            <div className='flex lg:justify-end items-end'>
                <img className='h-40 lg:p-5' src={whiteLogo} alt="" srcset="" />
            </div>
        </div>
    </>
  )
}

export default Header