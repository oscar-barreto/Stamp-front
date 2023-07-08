
const Modal = ({isOpen,setOpenModal, children}) => {


if(isOpen) { return (
    
    <div className="fixed bg-gray-200 z-2" style={{left:"0",top:"0", right:"0", bottom:'0'}}>
        <div className="fixed top-1/2 left-1/2 p-5 shadow-lg shadow-gray-400 rounded-xl bg-[#f7f7f7] text-gray-600 text-xl font-light" style={{transform:"translate(-50%,-50%)"}}>
                <div>
                    {children}
                </div>
                <button className="text-white text-lg shadow shadow-md hover:opacity-95 shadow-gray-400 hover:opacity-95 hover:shadow-gray-500 px-4 py-2 rounded my-10" onClick={(setOpenModal)} style={{backgroundColor:"var(--green)"}}>Fechar</button>
        </div>
    </div>
    
  )
}
return null
}

export default Modal