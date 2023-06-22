import { Link } from "react-router-dom"



const InterSection1 = () => {
  return (
    <>
    <div className="flex bg-[#78d64b] justify-center py-32">
        <div className="flex flex-col justify-center items-center lg:py-10">
            <p className="p-2 m-2 text-white  text-l text-center" style={{fontFamily:"helvetica"}}>VAMOS CARIMBAR O ® NA SUA MARCA?<br/> REGISTRE SUA MARCA DE FORMA SIMPLES E SEGURA.</p>
            <Link to="https://wa.me/+558199605252">
            <button className="p-3 rounded border-2 font-semibold hover:bg-[#78d64b] w-48 hover:text-white bg-white text-[#78d64b] border-white hover:w-48 m-2" style={{fontFamily:"helvetica"}}>ENTRE EM CONTATO</button>
            </Link>
        </div>
    </div>
    <div className="h-2  bg-[#78d64b]"></div>

    </>

  )
}

export default InterSection1