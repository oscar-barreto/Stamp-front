
const Modal = ({isOpen,setOpenModal, children}) => {


if(isOpen) { return (
    
    <div className="fixed bg-gray-300 z-2" style={{left:"0",top:"0", right:"0", bottom:'0'}}>
        <div className="fixed top-1/2 left-1/2 p-40 rounded bg-[#f7f7f7] text-gray-600 text-xl font-light" style={{transform:"translate(-50%,-50%)"}}>
                <div>
                    {children}
                </div>
                <button className="text-[--green] text-sm" onClick={(setOpenModal)}>Fechar</button>
        </div>
    </div>
    
  )
}
return null
}

export default Modal