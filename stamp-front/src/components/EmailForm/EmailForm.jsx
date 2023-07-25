import { useState } from "react";
import emailjs from "@emailjs/browser";
import toast, {Toaster} from "react-hot-toast";




const EmailForm = () => {

    const [name,setName]= useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [reason, setReason]= useState();
    const [brandType, setBrandType] = useState();
    // const [message, setMessage] = useState('');


    const notify = () => toast.success('Email Enviado!')




  function sendEmail(e){
    e.preventDefault();

    // message== ''

    if(name==''|| email ==''|| phone == ''){
      alert('Preencha todos os campos');
      return;
    }

    const templateParams = {
      from_name: name,
      // message: message,
      phone: phone,
      reason: reason,
      brandType: brandType,
      email: email
    }



    emailjs.send('service_1ex69ch', 'template_hguemv4', templateParams, 'RSUSvedACuJwuKEfo')
    .then((response)=>{
      // alert('email enviado')
      // console.log('email enviado', response.status, response.text)
      setEmail('')
      setName('')
      setPhone('')
      notify();
      setReason(reason)
      setBrandType(brandType)
      // setMessage('')
    }, (err)=>{
      console.log('Error: ', err)
    })
    
  }




  return (
    <>
  <div className="py-8 lg:py-10 px-10 lg:w-[400px] mx-auto">

    <h2 className="mb-2 text-3xl md:text-2xl lg:text-3xl tracking-tight font-bold text-center text-[#f7f7f7]" style={{fontFamily:'helvetica'}}>Entre em Contato</h2>

    <form onSubmit={sendEmail} action="" className="space-y-2">


        
        <div>

          <label htmlFor="Name" className="block mb-1 text-sm font-medium text-gray-100">Nome: </label>
          <input type="text" onChange={(e)=>setName(e.target.value)} value={name} id="name" className="block p-2 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:outline-none focus:ring-[#78d64b]" placeholder="nome" required/>

        </div>


        <div>

            <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-100">Email: </label>
            <input type="email" onChange={(e)=>setEmail(e.target.value)} value={email} id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm shadow-sm focus:ring-2 focus:outline-none focus:ring-[#78d64b] rounded-lg block w-full p-2" placeholder="email" required/>
        </div>


        <div>

        <label htmlFor="phone" className="block mb-1 text-sm font-medium text-gray-100">Telefone: </label>
        <input type="phone" onChange={(e)=>setPhone(e.target.value)} value={phone} id="phone" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm shadow-sm focus:ring-2 focus:outline-none focus:ring-[#78d64b] rounded-lg block w-full p-2" placeholder=" telefone" required/>

        </div>


        <div>

          {/* REASON DROPDOWN SELECT */}


          <label htmlFor="reason" className="block mb-1 text-sm font-medium text-gray-100">Por que está buscando o registro? </label>

          <select name="reason"
          onChange={(e)=>setReason(e.target.value)} 
          id="reason" 
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm shadow-sm focus:ring-2 focus:outline-none focus:ring-[#78d64b] rounded-lg block w-full p-2" 
          placeholder="Por que está buscando o registro?"
          required>

            <option value={reason}></option>
            <option value={reason}>Curiosidade/ Dúvida</option>
            <option value={reason}>Sei da importância e quero me precaver</option>
            <option value={reason}>Existe um concorrente que está me copiando</option>

          </select>
        </div>

        <div>

          {/* BRAND TYPE DROPDOWN SELECT */}


          <label htmlFor="brandType" className="block mb-1 text-sm font-medium text-gray-100">Qual segmento de atuação da marca?</label>

          <select name="brandType"
          onChange={(e)=>setBrandType(e.target.value)} 
          id="brandType" 
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm shadow-sm focus:ring-2 focus:outline-none focus:ring-[#78d64b] rounded-lg block w-full p-2" 
          placeholder="Qual segmento de atuação da marca?"
          required>

            <option value={reason}></option>
            <option value={brandType}>Academias</option>
            <option value={brandType}>Agência de Marketing e Comunicação</option>
            <option value={brandType}>Agronegócio</option>
            <option value={brandType}>Artesanatos / Crochê</option>
            <option value={brandType}>Assistência técnica de eletrônicos</option>
            <option value={brandType}>Barbearia / Salão de Beleza</option>
            <option value={brandType}>Canal no Youtube</option>
            <option value={brandType}>Cantor / Ator / Artista</option>
            <option value={brandType}>Clínica Médica / Estética / Veterinária</option>
            <option value={brandType}>Construtora / Incorporadora / Imobiliária</option>
            <option value={brandType}>Corretora de Seguros / Seguradoras</option>
            <option value={brandType}>Cosméticos</option>
            <option value={brandType}>Decoração de Festas</option>
            <option value={brandType}>Delivery de alimentos</option>
            <option value={brandType}>Drogaria / Farmácia</option>
            <option value={brandType}>Ecommerce e Marketplaces</option>
            <option value={brandType}>Editora de Livros / Livraria</option>
            <option value={brandType}>Engenharia e Arquitetura</option>
            <option value={brandType}>Escritório de Advocacia / Serviços Jurídicos</option>
            <option value={brandType}>Infoproduto</option>
            <option value={brandType}>Loja de Roupas / Vestuário</option>
            <option value={brandType}>Mercearia / Fabricação de Móveis</option>
            <option value={brandType}>Loja de Roupas / Vestuário</option>
            <option value={brandType}>ONG's</option>
            <option value={brandType}>Pet shop e artigos pet</option>
            <option value={brandType}>Semijoias</option>
            <option value={brandType}>Serviços Financeiros e Crédito</option>
            <option value={brandType}>Tecnologia e Software</option>
            <option value={brandType}>Telecomunicação</option>
            <option value={brandType}>Turismo</option>
            <option value={brandType}>Outros</option>




        




          </select>
          </div>

         {/* <div className="sm:col-span-2">
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 ">Your message</label>
              <textarea id="message" onChange={(e)=>setMessage(e.target.value)} value={message} rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-2 focus:outline-none focus:ring-[#78d64b]" placeholder="Leave a comment..."></textarea>
          </div> */}
          <div className="flex justify-center">
          <button type="" className="bg-[#f7f7f7] hover:text-white border-2 hover:opacity-80 border-white hover:bg-[--green] text-[--green] shadow-sm shadow-zinc-400 py-3 px-6 lg:py-3 lg:px-6 md:py-2 md:px-4 font-medium self-center text-center rounded-lg sm:w-fit ">ENVIAR</button>
          </div>



    </form>
  </div>
  <Toaster
  position="top-center"
  reverseOrder={false}
/>
  
    </>
  )
}

export default EmailForm