import EyeIcon from "./EyeIcon";
import Modal from "./Modal";
import { useState } from "react";



const Options = () => {


    const [openModal, setOpenModal] = useState(false)
    const [openModal2, setOpenModal2] = useState(false)



  return (
    <>
        <div className="w-100 h-40 bg-white"></div>
        {/* DIV CONTAINING THE MODAL GRID */}
        <div className="flex justify-center items-center flex-col">

        Front Beginners
        <button onClick={()=>setOpenModal(true)}>Open Modal</button>
        <button onClick={()=>setOpenModal2(true)}>Open Modal2</button>
        <div></div>

        <Modal isOpen={openModal} setOpenModal={()=>setOpenModal(!openModal)}>
            Esse aqui eh o modal 1 funcionando e eu vou dormir
        </Modal>

        <Modal isOpen={openModal2} setOpenModal={()=>setOpenModal2(!openModal2)}>
            Esse aqui eh o modal 2 e finalmente funcionou
        </Modal>


        </div>
       
        <div className="w-100 h-96 bg-white"></div>

    </>
  )
}

export default Options