import EyeIcon from "./EyeIcon";
import Modal from "./Modal";
import { useState } from "react";
import {Link} from "react-router-dom";



const Options = () => {


    const [openModal, setOpenModal] = useState(false)
    const [openModal2, setOpenModal2] = useState(false)
    const [openModal3, setOpenModal3] = useState(false)
    const [openModal4, setOpenModal4] = useState(false)
    const [openModal5, setOpenModal5] = useState(false)
    const [openModal6, setOpenModal6] = useState(false)
    const [openModal7, setOpenModal7] = useState(false)
    const [openModal8, setOpenModal8] = useState(false)
    const [openModal9, setOpenModal9] = useState(false)
    const [openModal10, setOpenModal10] = useState(false)
    const [openModal11, setOpenModal11] = useState(false)
    const [openModal12, setOpenModal12] = useState(false)





  return (
    <>
        <div className="w-100 h-40 bg-white"></div>
        {/* DIV CONTAINING THE MODAL GRID */}
        <div className="flex flex-col justify-center items-center my-10">
            <h1 className="text-4xl text-center font-semibold text-[--green] my-5" style={{fontFamily:"helvetica"}}>Serviços Stamp:</h1>
            <h2 className="text-xl text-center font-light text-gray-500" style={{fontFamily:"helvetica"}}>Além do registro de marcas na Stamp, nós oferecemos os seguintes serviços:</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 mx-5 sm:mx-20">
        
        {/* BUTTON ONE */}


        <div className="bg-[--green] text-lg md:text-xl h-auto font-medium m-2 p-3 rounded shadow-lg shadow-gray-400 hover:opacity-95 hover:shadow-gray-500 text-[#f7f7f7] flex flex-col" onClick={()=>setOpenModal(true)}>
        <div className="flex justify-center flex-col items-center">        
        <EyeIcon/>
        <p className="text-center" style={{fontFamily:"helvetica"}}>Oposição à Registro de Marcas</p>
        </div>
        </div>

        {/* BUTTON TWO */}


        <div className="bg-[--green]  text-lg md:text-xl h-auto  font-medium m-2 p-4 rounded shadow-lg shadow-gray-400 hover:opacity-95 hover:shadow-gray-500 text-[#f7f7f7] flex flex-col" onClick={()=>setOpenModal2(true)}>
        <div className="flex justify-center flex-col items-center">

        <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 my-2 text-gray-700">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3l1.664 1.664M21 21l-1.5-1.5m-5.485-1.242L12 17.25 4.5 21V8.742m.164-4.078a2.15 2.15 0 011.743-1.342 48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185V19.5M4.664 4.664L19.5 19.5" />
        </svg>
        <p className="text-center" style={{fontFamily:"helvetica"}}>Manifestação à Oposição ao Registro de Marcas</p>
        </div>
        
        </div>


        {/* BUTTON 3 */}


        <div className="bg-[--green]  text-lg md:text-xl h-auto font-medium m-2 p-3 rounded shadow-lg shadow-gray-400 hover:opacity-95 hover:shadow-gray-500 text-[#f7f7f7] flex justify-center items-center" onClick={()=>setOpenModal3(true)}>
        <div className="flex justify-center flex-col items-center">

        <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 my-2 h-7  text-gray-700">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>

        <p className="text-center mb-8" style={{fontFamily:"helvetica"}}>
            Pedido de Nulidade de Marcas
        </p>
        </div>
        
        </div>

        {/* BUTTON 4  */}

        <div className="bg-[--green]  text-lg md:text-xl h-auto  font-medium m-2 p-3 rounded shadow-lg shadow-gray-400 hover:opacity-95 hover:shadow-gray-500 text-[#f7f7f7] flex justify-center items-center" onClick={()=>setOpenModal4(true)}>
        <div className="flex justify-center flex-col items-center">

        <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="w-7 h-7 my-2 text-gray-700">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46" />
        </svg>



        <p className="text-center mb-1" style={{fontFamily:"helvetica"}}>Recurso contra Nulidade de Marcas</p>
        
        </div>
    
        </div>
        {/* BUTTON FIVE */}


        <div className="bg-[--green]  text-lg md:text-xl h-auto  font-medium m-2 p-3 rounded shadow-lg shadow-gray-400 hover:opacity-95 hover:shadow-gray-500 text-[#f7f7f7] flex flex-col" onClick={()=>setOpenModal5(true)}>
        <div className="flex justify-center flex-col items-center">        
        <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 my-2 text-gray-700">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>

        <p className="text-center" style={{fontFamily:"helvetica"}}>Pedido de Caducidade de Marcas</p>
        </div>
        </div>

        {/* BUTTON SIX */}


        <div className="bg-[--green]  text-lg md:text-xl h-auto  font-medium m-2 p-4 rounded shadow-lg shadow-gray-400 hover:opacity-95 hover:shadow-gray-500 text-[#f7f7f7] flex flex-col" onClick={()=>setOpenModal6(true)}>
        <div className="flex justify-center flex-col items-center">

        <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 my-2 text-gray-700">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
        </svg>

        <p className="text-center" style={{fontFamily:"helvetica"}}>Manifestação contra à Caducidade de Marcas</p>
        </div>
        
        </div>


        {/* BUTTON SEVEN */}


        <div className="bg-[--green]  text-lg md:text-xl h-auto  font-medium m-2 p-3 rounded shadow-lg shadow-gray-400 hover:opacity-95 hover:shadow-gray-500 text-[#f7f7f7] flex justify-center items-center" onClick={()=>setOpenModal7(true)}>
        <div className="flex justify-center flex-col items-center">

        <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 my-2 mb-3 text-gray-700">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
        </svg>


        <p className="text-center mb-5" style={{fontFamily:"helvetica"}}>
        Prorrogação do Registro de Marca
        </p>
        </div>
        
        </div>

        {/* BUTTON EIGHT  */}

        <div className="bg-[--green] t text-lg md:text-xl h-auto  font-medium m-2 p-3 rounded shadow-lg shadow-gray-400 hover:opacity-95 hover:shadow-gray-500 text-[#f7f7f7] flex justify-center items-center" onClick={()=>setOpenModal8(true)}>
        <div className="flex justify-center flex-col items-center">

        <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 my-2 mb-3 text-gray-700">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
        </svg>




        <p className="text-center mb-10" style={{fontFamily:"helvetica"}}>Notificação Extrajudicial</p>
        
        </div>
    
        </div>
        {/* BUTTON NINE */}


        <div className="bg-[--green]  text-lg md:text-xl h-auto  font-medium m-2 p-3 rounded shadow-lg shadow-gray-400 hover:opacity-95 hover:shadow-gray-500 text-[#f7f7f7] flex flex-col" onClick={()=>setOpenModal9(true)}>
        <div className="flex justify-center flex-col items-center"> 

        <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 my-2 mb-4 text-gray-700">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
        </svg>

        <p className="text-center" style={{fontFamily:"helvetica"}}>Resposta à Notificação Extrajudicial</p>
        </div>
        </div>

        {/* BUTTON TEN */}


        <div className="bg-[--green]  text-lg md:text-xl h-auto  font-medium m-2 p-4 rounded shadow-lg shadow-gray-400 hover:opacity-95 hover:shadow-gray-500 text-[#f7f7f7] flex flex-col" onClick={()=>setOpenModal10(true)}>
        <div className="flex justify-center flex-col items-center">

        <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 my-2 text-gray-700">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 00.658-.663 48.422 48.422 0 00-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 01-.61-.58v0z" />
        </svg>

        <p className="text-center mb-4" style={{fontFamily:"helvetica"}}>Naming e Criação de Marca Figurativa</p>
        </div>
        
        </div>


        {/* BUTTON ELEVEN */}


        <div className="bg-[--green]  text-lg md:text-xl h-auto  font-medium m-2 p-3 rounded shadow-lg shadow-gray-400 hover:opacity-95 hover:shadow-gray-500 text-[#f7f7f7] flex justify-center items-center" onClick={()=>setOpenModal11(true)}>
        <div className="flex justify-center flex-col items-center">

        <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="w-7 h-7 my-2 text-gray-700">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
        </svg>


        <p className="text-center mb-10" style={{fontFamily:"helvetica"}}>
        Pesquisa de Viabilidade
        </p>
        </div>
        
        </div>

        {/* BUTTON TWELVE  */}

        <div className="bg-[--green]  text-lg md:text-xl h-auto  font-medium m-2 p-3 rounded shadow-lg shadow-gray-400 hover:opacity-95 hover:shadow-gray-500 text-[#f7f7f7] flex justify-center items-center" onClick={()=>setOpenModal12(true)}>
        <div className="flex justify-center flex-col items-center">

        <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 my-2 text-gray-700">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
        </svg>





        <p className="text-center mb-10" style={{fontFamily:"helvetica"}}>Monitoramento da Marca</p>
        
        </div>
    
        </div>
        
        

        




        {/* BUTTON PART OVER */}



        {/* FIRST MODAL */}

        <Modal isOpen={openModal} setOpenModal={()=>setOpenModal(!openModal)} style={{fontFamily:"helvetica"}}>
        <h1 className="text-l md:text-2xl font-medium my-2 md:my-4 tracking-tight sm:tracking-wide text-[--green]" style={{fontFamily:"helvetica"}}>
                Oposição à Registro de Marcas
                </h1>
                <div className="border-b-2 my-2 sm:my-2"></div>
            <p className="leading-4 sm:leading-5 text-sm md:text-base tracking-tight sm:tracking-wide text-gray-600 font-light" style={{fontFamily:"helvetica"}}>
                O serviço de oposição ao registro de marcas é uma estratégia fundamental de defesa dos direitos de propriedade intelectual. Ele age como uma barreira protetora, permitindo que uma entidade intervenha quando uma marca similar está em processo de registro, preservando a unicidade das marcas existentes e evitando confusões de mercado. A importância deste serviço para a segurança das identidades comerciais e direitos de propriedade é inestimável. A atuação ágil e certeira da Stamp, especialista no registro de marcas, é vital nesse processo. Os profissionais da Stamp trabalham de forma diligente para identificar conflitos potenciais, para intervir prontamente no processo de registro.
            </p>
            <p className="leading-4 sm:leading-5 text-[--green] text-sm md:text-base tracking-tight sm:tracking-wide text-gray-600 font-light mt-2" style={{fontFamily:"helvetica"}}>
                    Não deixe sua marca desprotegida, fale com a Stamp hoje e garanta a proteção adequada do seu maior ativo, sua Marca.
                </p>
        </Modal>


        {/* SECOND MODAL */}


        <Modal isOpen={openModal2} setOpenModal={()=>setOpenModal2(!openModal2)}>
        <h1 className="text-l md:text-2xl font-medium my-2 md:my-4 tracking-tight sm:tracking-wide text-[--green]" style={{fontFamily:"helvetica"}}>
            Manifestação à Oposição ao Registro de Marcas
            </h1>
            <div className="border-b-2 my-2 sm:my-2"></div>
            <p className="leading-4 sm:leading-5 text-sm md:text-base tracking-tight sm:tracking-wide text-gray-600 font-light" style={{fontFamily:"helvetica"}}>
                O serviço de Manifestação à Oposição de Registro de Marcas é uma importante ferramenta legal no campo de Propriedade Intelectual. Ele permite que as partes interessadas apresentem objeções formalmente contra o registro de uma marca que possa infringir seus próprios direitos de marca. Esse processo normalmente é conduzido pelo Instituto Nacional da Propriedade Industrial no Brasil, onde se pode contestar a originalidade, a confusibilidade ou a imitação de marcas já existentes. Este serviço é crucial para manter a justiça e a equidade no mercado, protegendo as empresas contra possíveis abusos. Através dele, pode-se garantir que cada marca registrada seja única e não cause confusão entre os consumidores, fortalecendo a identidade e a integridade das marcas. Além disso, reforça a importância de uma pesquisa prévia e um planejamento cuidadoso ao escolher uma marca. Os profissionais da Stamp trabalham de forma diligente para identificar conflitos potenciais, para defender prontamente o seu processo de registro. 
            </p>
            <p className="leading-4 sm:leading-5 text-[--green] text-sm md:text-base tracking-tight sm:tracking-wide text-gray-600 font-light mt-2" style={{fontFamily:"helvetica"}}>
            Entre em Contato com a Stamp, manifeste-se à oposições, proteja sua marca e preserve sua identidade empresarial.                
            </p>
        </Modal>


        {/* THIRD MODAL */}


        <Modal isOpen={openModal3} setOpenModal={()=>setOpenModal3(!openModal3)}>
        <h1 className="text-l md:text-2xl font-medium my-2 md:my-4 tracking-tight sm:tracking-wide text-[--green]" style={{fontFamily:"helvetica"}}>
            Pedido de Nulidade de Marcas
            </h1>
            <div className="border-b-2 my-2 sm:my-2"></div>
            <p className="leading-4 sm:leading-5 text-sm md:text-base tracking-tight sm:tracking-wide text-gray-600 font-light" style={{fontFamily:"helvetica"}}>
                O serviço de Pedido de Nulidade Administrativa de Marcas é um processo fundamental na gestão de propriedade intelectual. Ele possibilita a impugnação do registro de uma marca que se considera indevido ou em violação de direitos pré-existentes. Tal pedido pode ser feito por qualquer pessoa com legítimo interesse, perante o órgão regulador como o Instituto Nacional da Propriedade Industrial no Brasil. A nulidade pode ser requerida por diversos motivos, tais como quando a marca é considerada genérica, descritiva, enganosa, ou quando há suspeita de má-fé no registro. O serviço de Pedido de Nulidade Administrativa de Marcas serve como uma proteção para os direitos de propriedade intelectual, garantindo a singularidade e a integridade das marcas no mercado. Este processo, além de ajudar a evitar confusões entre marcas semelhantes.
                </p>
                <p className="leading-4 sm:leading-5 text-[--green] text-sm md:text-base tracking-tight sm:tracking-wide text-gray-600 font-light mt-2" style={{fontFamily:"helvetica"}}>
                Entre em Contato com a Stamp para dar a proteção a marca que você construiu!            
                </p>
        </Modal>


        {/* FOURTH MODAL */}

        <Modal isOpen={openModal4} setOpenModal={()=>setOpenModal4(!openModal4)}>
        <h1 className="text-l md:text-2xl font-medium my-2 md:my-4 tracking-tight sm:tracking-wide text-[--green]" style={{fontFamily:"helvetica"}}>
            Recurso contra Nulidade de Marcas
            </h1>
            <div className="border-b-2 my-2 sm:my-2"></div>
            <p className="leading-4 sm:leading-5 text-sm md:text-base tracking-tight sm:tracking-wide text-gray-600 font-light" style={{fontFamily:"helvetica"}}>
            O serviço de Recurso contra Nulidade de Marcas é uma salvaguarda essencial para os detentores de marcas, proporcionando uma plataforma legal para contestar uma decisão de anulação de marca. Esse recurso é apresentado perante uma entidade reguladora, como o Instituto Nacional da Propriedade Industrial no Brasil. Através deste serviço, o titular da marca tem a oportunidade de defender a legitimidade e a originalidade de sua marca, reivindicando seu direito à propriedade intelectual. Cada caso de recurso é examinado de forma individual, levando em consideração a singularidade da marca, sua distinção em relação a outras marcas e o valor agregado que traz ao mercado. Esse serviço é crucial para manter a justiça e a integridade do cenário de marcas, protegendo as empresas contra decisões possivelmente injustas e garantindo que a propriedade intelectual seja respeitada e protegida de forma adequada.
            </p>
            <p className="leading-4 sm:leading-5 text-[--green] text-sm md:text-base tracking-tight sm:tracking-wide text-gray-600 font-light mt-2" style={{fontFamily:"helvetica"}}>
            Entre em Contato com a Stamp para dar a proteção a marca que você construiu!
                </p>
        </Modal>

        {/* FITH MODAL */}

        <Modal isOpen={openModal5} setOpenModal={()=>setOpenModal5(!openModal5)}>
        <h1 className="text-l md:text-2xl font-medium my-2 md:my-4 tracking-tight sm:tracking-wide text-[--green]" style={{fontFamily:"helvetica"}}>
            Pedido de Caducidade de Marcas
            </h1>
            <div className="border-b-2 my-2 sm:my-2"></div>
            <p className="leading-4 sm:leading-5 text-sm md:text-base tracking-tight sm:tracking-wide text-gray-600 font-light" style={{fontFamily:"helvetica"}}>
            O serviço de Pedido de Caducidade de Marcas é uma ferramenta legal significativa que possibilita a revogação do registro de uma marca caso não seja utilizada por um determinado período de tempo, geralmente de 5 anos. Este processo é executado perante o órgão regulador, como o Instituto Nacional da Propriedade Industrial no Brasil. O pedido pode ser feito por qualquer pessoa com legítimo interesse, frequentemente um concorrente, que perceba que a marca não está sendo efetivamente usada no mercado. O serviço destina-se a assegurar que o registro de marcas não seja usado meramente como um meio de bloquear outros de utilizá-las, mas para designar uma fonte de bens ou serviços específica. Ao tornar as marcas inutilizadas disponíveis novamente, este serviço contribui para um mercado mais dinâmico e competitivo, e evita a monopolização de marcas sem uma finalidade comercial real.
            </p>
            <p className="leading-4 sm:leading-5 text-[--green] text-sm md:text-base tracking-tight sm:tracking-wide text-gray-600 font-light mt-2" style={{fontFamily:"helvetica"}}>
            Entre em Contato com a Stamp, defenda seus direitos, proteja seu espaço e assegure seu crescimento no mercado.
            </p>
        </Modal>

        {/* SIXTH MODAL */}

        <Modal isOpen={openModal6} setOpenModal={()=>setOpenModal6(!openModal6)}>
        <h1 className="text-l md:text-2xl font-medium my-2 md:my-4 tracking-tight sm:tracking-wide text-[--green]" style={{fontFamily:"helvetica"}}>
            Manifestação contra à Caducidade de Marcas
            </h1>
            <div className="border-b-2 my-2 sm:my-2"></div>
            <p className="leading-4 sm:leading-5 text-sm md:text-base tracking-tight sm:tracking-wide text-gray-600 font-light" style={{fontFamily:"helvetica"}}>
            O serviço de Manifestação contra a Caducidade de Marcas é uma proteção crucial no cenário da propriedade intelectual, permitindo que o titular de uma marca conteste um pedido de caducidade. Realizado perante o órgão regulador competente, como o Instituto Nacional da Propriedade Industrial no Brasil, o titular tem a oportunidade de comprovar o uso efetivo de sua marca no mercado dentro do período estipulado. Este serviço permite aos titulares defenderem seus direitos de propriedade intelectual, demonstrando que a marca em questão está ativa e mantendo a sua exclusividade no mercado. Para isso, é preciso apresentar provas convincentes de uso da marca, que podem incluir publicidade, faturas de venda, contratos, entre outros. Essa ferramenta é crucial para evitar a perda injusta de uma marca e manter a competitividade no mercado, garantindo que cada marca registrada seja efetivamente usada e mantida.
            </p>
            <p className="leading-4 sm:leading-5 text-[--green] text-sm md:text-base tracking-tight sm:tracking-wide text-gray-600 font-light mt-2" style={{fontFamily:"helvetica"}}>
            Não hesite em defender sua marca contra a caducidade. Entre em Contato com a Stamp, Manifeste-se, proteja sua marca e assegure sua identidade empresarial.            
            </p>

        </Modal>


        {/* SEVENTH MODAL */}


        <Modal isOpen={openModal7} setOpenModal={()=>setOpenModal7(!openModal7)}>
        <h1 className="text-l md:text-2xl font-medium my-2 md:my-4 tracking-tight sm:tracking-wide text-[--green]" style={{fontFamily:"helvetica"}}>
            Prorrogação do Registro de Marca
            </h1>
            <div className="border-b-2 my-2 sm:my-2"></div>
            <p className="leading-4 sm:leading-5 text-sm md:text-base tracking-tight sm:tracking-wide text-gray-600 font-light" style={{fontFamily:"helvetica"}}>
            O serviço de Prorrogação do Registro de Marca é um recurso essencial que permite a extensão da proteção legal de uma marca registrada. Normalmente, os registros de marcas têm um prazo de validade, que no Brasil é de 10 anos conforme o Instituto Nacional da Propriedade Industrial. Antes deste prazo expirar, o titular da marca pode solicitar uma prorrogação para manter a proteção de sua marca e impedir que outros a registrem. Este serviço requer a apresentação de documentos específicos e o pagamento de uma taxa. A prorrogação do registro de marca é crucial para manter a identidade e a exclusividade de uma empresa no mercado. Ela permite que as empresas continuem a se beneficiar dos direitos associados à propriedade da marca, incluindo a proteção contra o uso indevido e a capacidade de licenciar ou vender a marca.
            </p>
            <p className="leading-4 sm:leading-5 text-[--green] text-sm md:text-base tracking-tight sm:tracking-wide text-gray-600 font-light mt-2" style={{fontFamily:"helvetica"}}>
            Entre em contato com a Stamp para garantir a proteção contínua de sua marca, assegure seu espaço no mercado e fortaleça sua identidade empresarial através da prorrogação do registro de marca.            </p>
        </Modal>



        {/* EIGHT MODAL */}

        <Modal isOpen={openModal8} setOpenModal={()=>setOpenModal8(!openModal8)}>
        <h1 className="text-l md:text-2xl font-medium my-2 md:my-4 tracking-tight sm:tracking-wide text-[--green]" style={{fontFamily:"helvetica"}}>
            Notificação Extrajudicial
            </h1>
            <div className="border-b-2 my-2 sm:my-2"></div>
            <p className="leading-4 sm:leading-5 text-sm md:text-base tracking-tight sm:tracking-wide text-gray-600 font-light" style={{fontFamily:"helvetica"}}>
            A notificação extrajudicial é uma ferramenta valiosa para proteger seus direitos de marca e buscar uma solução amigável em casos de violação. Ao comunicar de forma assertiva e legalmente fundamentada a parte infratora, você está demonstrando sua determinação em proteger sua marca e evitar conflitos desnecessários.
            Não hesite em buscar a orientação de profissionais especializados em propriedade intelectual ao elaborar uma notificação extrajudicial. Com a abordagem correta, você estará tomando medidas efetivas para proteger sua marca, preservar sua identidade empresarial e buscar uma resolução justa.
            </p>
            <p className="leading-4 sm:leading-5 text-[--green] text-sm md:text-base tracking-tight sm:tracking-wide text-gray-600 font-light mt-2" style={{fontFamily:"helvetica"}}>
            Entre em Contato com a Stamp para proteger seus direitos, comunique-se por meio de uma notificação extrajudicial e assegure a integridade de sua marca.            
            </p>
        </Modal>



        {/* NINTH MODAL */}

        <Modal isOpen={openModal9} setOpenModal={()=>setOpenModal9(!openModal9)}>
        <h1 className="text-l md:text-2xl font-medium my-2 md:my-4 tracking-tight sm:tracking-wide text-[--green]" style={{fontFamily:"helvetica"}}>
            Resposta à Notificação Extrajudicial
            </h1>
            <div className="border-b-2 my-2 sm:my-2"></div>
            <p className="leading-4 sm:leading-5 text-sm md:text-base tracking-tight sm:tracking-wide text-gray-600 font-light" style={{fontFamily:"helvetica"}}>
            A resposta à notificação extrajudicial é uma ferramenta importante para proteger seus direitos comerciais e buscar uma solução adequada em questões de marca. Ao responder de forma estratégica, clara e embasada legalmente, você está defendendo sua marca, preservando sua identidade empresarial e buscando uma resolução justa para o conflito.
            Não hesite em buscar a orientação de profissionais especializados em propriedade intelectual ao elaborar sua resposta à notificação extrajudicial. Com a abordagem correta, você estará tomando medidas efetivas para proteger sua marca, comunicar sua posição e buscar uma resolução satisfatória            
            </p>
            <p className="leading-4 sm:leading-5 text-[--green] text-sm md:text-base tracking-tight sm:tracking-wide text-gray-600 font-light mt-2" style={{fontFamily:"helvetica"}}>
            Entre em Contato com a Stamp para defender seus direitos, responda à notificações extrajudiciais e assegure a integridade de sua marca.
            </p>
        </Modal>



        {/* TENTH MODAL */}


        <Modal isOpen={openModal10} setOpenModal={()=>setOpenModal10(!openModal10)}>
        <h1 className="text-l md:text-2xl font-medium my-2 md:my-4 tracking-tight sm:tracking-wide text-[--green]" style={{fontFamily:"helvetica"}}>
            Naming e Criação de Marca Figurativa
            </h1>
            <div className="border-b-2 my-2 sm:my-2"></div>
            <p className="leading-4 sm:leading-5 text-sm md:text-base tracking-tight sm:tracking-wide text-gray-600 font-light" style={{fontFamily:"helvetica"}}>
            O serviço de Naming e Criação de Marcas Figurativas é uma peça fundamental no desenvolvimento da identidade de uma empresa. No processo de "naming", os profissionais utilizam técnicas de branding e linguagem para criar um nome distintivo e memorável que represente a essência da marca. Já a criação de marcas figurativas envolve o design de logotipos, ícones ou símbolos que sejam visualmente atraentes e façam uma conexão emocional com o público-alvo. Ambos os elementos são cruciais para a construção da identidade da marca e para se destacar num mercado competitivo. Esse serviço integra com a pesquisa de viabilidade perante o INPI para a garantia do nascimento de uma Marca original e autêntica.   
            </p>
            <p className="leading-4 sm:leading-5 text-[--green] text-sm md:text-base tracking-tight sm:tracking-wide text-gray-600 font-light mt-2" style={{fontFamily:"helvetica"}}>
            Seja uma startup ou uma empresa estabelecida, este serviço é essencial para transmitir profissionalismo, confiança e diferenciar-se da concorrência. Conte com a Stamp para assessorar na construção da sua Identidade Visual e destacar sua empresa no mercado.
            </p>  
        </Modal>


        {/* ELVENTH MODAL */}



        <Modal isOpen={openModal11} setOpenModal={()=>setOpenModal11(!openModal11)}>
        <h1 className="text-l md:text-2xl font-medium my-2 md:my-4 tracking-tight sm:tracking-wide text-[--green]" style={{fontFamily:"helvetica"}}>
            Pesquisa de Viabilidade
            </h1>
            <div className="border-b-2 my-2 sm:my-2"></div>
            <p className="leading-4 sm:leading-5 text-sm md:text-base tracking-tight sm:tracking-wide text-gray-600 font-light" style={{fontFamily:"helvetica"}}>
            Tomar decisões inteligentes para sua marca começa com uma pesquisa de viabilidade abrangente. Oferecemos serviços especializados de pesquisa de viabilidade para ajudar a avaliar a viabilidade de registrar ou utilizar uma marca específica.
            Nossa equipe experiente realiza uma análise minuciosa, investigando a disponibilidade da marca desejada e verificando se há conflitos com marcas já existentes. Além disso, examinamos as implicações legais e as possibilidades de proteção da marca em diferentes jurisdições.
            Com base em nossa pesquisa detalhada, fornecemos relatórios completos que ajudam você a tomar decisões informadas sobre a escolha de uma marca.
            </p>
            <p className="leading-4 sm:leading-5 text-[--green] text-sm md:text-base tracking-tight sm:tracking-wide text-gray-600 font-light mt-2" style={{fontFamily:"helvetica"}}>
            Seja para o lançamento de um novo produto, expansão para novos mercados ou renovação de sua estratégia de marca, nossa pesquisa de viabilidade é essencial para garantir que você esteja no caminho certo para o sucesso.
            </p>       
            </Modal>


            {/* TWELVETH MODAL */}


            <Modal isOpen={openModal12} setOpenModal={()=>setOpenModal12(!openModal12)}>
            <h1 className="text-l md:text-2xl font-medium my-2 md:my-4 tracking-tight sm:tracking-wide text-[--green]" style={{fontFamily:"helvetica"}}>
                Monitoramento da Marca
                </h1>
                <div className="border-b-2 my-2 sm:my-2"></div>
            <p className="leading-4 sm:leading-5 text-sm md:text-base tracking-tight sm:tracking-wide text-gray-600 font-light" style={{fontFamily:"helvetica"}}>
                Proteger sua marca é um trabalho contínuo. Oferecemos serviços especializados de monitoramento da marca para ajudar a detectar qualquer violação ou uso indevido de sua marca no mercado.
                Nossa equipe dedicada faz bom uso das ferramentas tecnológicas disponíveis e uma abordagem abrangente para monitorar constantemente o cenário do mercado, identificando possíveis violações de marca. Isso inclui o monitoramento de registros de marca, uso em publicidade, mídias sociais, comércio eletrônico e muito mais.
                Com nosso serviço de monitoramento da marca, você pode ter tranquilidade, sabendo que estamos vigilantes em relação à proteção de sua marca. Em caso de violação, tomaremos medidas rápidas e eficazes para defendê-la, ajudando a preservar sua reputação e valor de mercado.
                Não deixe sua marca desprotegida. Conte com nosso serviço de monitoramento da marca para garantir sua segurança contínua no mercado competitivo atual.            
            </p>
            <p className="leading-4 sm:leading-5 text-[--green] text-sm md:text-base tracking-tight sm:tracking-wide text-gray-600 font-light mt-2" style={{fontFamily:"helvetica"}}>
            Seja para o lançamento de um novo produto, expansão para novos mercados ou renovação de sua estratégia de marca, nossa pesquisa de viabilidade é essencial para garantir que você esteja no caminho certo para o sucesso.
            </p>           
            </Modal>

        </div>
       
        <div className="w-100 h-40 bg-white"></div>

    </>
  )
}

export default Options