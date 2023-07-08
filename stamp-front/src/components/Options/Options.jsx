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
        <div className="flex flex-col justify-center items-center my-10">
            <h1 className="text-4xl font-semibold text-[--green] my-5">Serviços Stamp:</h1>
            <h2 className="text-xl font-light text-gray-500">Além do registro de marcas na Stamp, nós oferecemos os seguintes serviços:</h2>
        </div>
        <div className="grid grid-cols-4">
        
        
        <div className="flex">
        <button className="bg-[--green] text-xl font-medium py-10 shadow-lg shadow-gray-400  hover:shadow-gray-500 hover:opacity-95 m-2 p-3 rounded text-[#f7f7f7] flex justify-center items-center" onClick={()=>setOpenModal(true)}> 
        <EyeIcon/>
        Oposição à Registro de Marcas</button>
        </div>


        <div className="flex">
        <button className="bg-[--green] text-xl font-medium m-2 p-3 rounded shadow-lg shadow-gray-400 hover:opacity-95 hover:shadow-gray-500 text-[#f7f7f7] flex justify-center items-center" onClick={()=>setOpenModal2(true)}>

        <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 mr-2 text-gray-700">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3l1.664 1.664M21 21l-1.5-1.5m-5.485-1.242L12 17.25 4.5 21V8.742m.164-4.078a2.15 2.15 0 011.743-1.342 48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185V19.5M4.664 4.664L19.5 19.5" />
        </svg>

        Manifestação à Oposição ao Registro de Marcas</button>
        
        </div>

        {/* BUTTON PART OVER */}

        <Modal isOpen={openModal} setOpenModal={()=>setOpenModal(!openModal)}>
            <h1 className="text-2xl font-medium my-4 tracking-wide text-[--green]">Oposição à Registro de Marcas</h1>
            <div className="border-b-2 my-2"></div>
            <p className="leading-8 text-base tracking-wide text-gray-600 font-light">O serviço de oposição ao registro de marcas é uma estratégia fundamental de defesa dos direitos de propriedade intelectual. Ele age como uma barreira protetora, permitindo que uma entidade intervenha quando uma marca similar está em processo de registro, preservando a unicidade das marcas existentes e evitando confusões de mercado. A importância deste serviço para a segurança das identidades comerciais e direitos de propriedade é inestimável. A atuação ágil e certeira da Stamp, especialista no registro de marcas, é vital nesse processo. Os profissionais da Stamp trabalham de forma diligente para identificar conflitos potenciais, para intervir prontamente no processo de registro. </p>
        </Modal>

        <Modal isOpen={openModal2} setOpenModal={()=>setOpenModal2(!openModal2)}>
        <h1 className="text-2xl font-medium my-4 tracking-wide text-[--green]">Manifestação à Oposição ao Registro de Marcas</h1>
            <div className="border-b-2 my-2"></div>
            <p className="leading-8 text-base tracking-wide text-gray-600 font-light">O serviço de Manifestação à Oposição de Registro de Marcas é uma importante ferramenta legal no campo de Propriedade Intelectual. Ele permite que as partes interessadas apresentem objeções formalmente contra o registro de uma marca que possa infringir seus próprios direitos de marca. Esse processo normalmente é conduzido pelo Instituto Nacional da Propriedade Industrial no Brasil, onde se pode contestar a originalidade, a confusibilidade ou a imitação de marcas já existentes. Este serviço é crucial para manter a justiça e a equidade no mercado, protegendo as empresas contra possíveis abusos. Através dele, pode-se garantir que cada marca registrada seja única e não cause confusão entre os consumidores, fortalecendo a identidade e a integridade das marcas. Além disso, reforça a importância de uma pesquisa prévia e um planejamento cuidadoso ao escolher uma marca. Os profissionais da Stamp trabalham de forma diligente para identificar conflitos potenciais, para defender prontamente o seu processo de registro. </p>
        </Modal>


        </div>
       
        <div className="w-100 h-96 bg-white"></div>

    </>
  )
}

export default Options