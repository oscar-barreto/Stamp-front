import { useState } from "react";
import emailjs from "@emailjs/browser"




const EmailForm = () => {

    const [name,setName]= useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [reason, setReason]= useState();
    const [brandType, setBrandType] = useState();
    // const [message, setMessage] = useState('');


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
      alert('email enviado')
      console.log('email enviado', response.status, response.text)
      setEmail('')
      setName('')
      setPhone('')
      setReason(reason)
      setBrandType(brandType)
      // setMessage('')
    }, (err)=>{
      console.log('Error: ', err)
    })
    
  }




  return (
    <>
  <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">

    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-[--green]" style={{fontFamily:'helvetica'}}>Entre em Contato</h2>
    <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 sm:text-xl"  style={{fontFamily:'helvetica'}}>Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>


    <form onSubmit={sendEmail} action="" className="space-y-8">


        
        <div>

          <label htmlFor="Name" className="block mb-2 text-sm font-medium text-gray-900">Nome: </label>
          <input type="text" onChange={(e)=>setName(e.target.value)} value={name} id="name" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:outline-none focus:ring-[#78d64b]" placeholder="nome" required/>

        </div>


        <div>

            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email: </label>
            <input type="email" onChange={(e)=>setEmail(e.target.value)} value={email} id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm shadow-sm focus:ring-2 focus:outline-none focus:ring-[#78d64b] rounded-lg block w-full p-2.5" placeholder="email" required/>
        </div>


        <div>

        <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900">Telefone: </label>
        <input type="phone" onChange={(e)=>setPhone(e.target.value)} value={phone} id="phone" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm shadow-sm focus:ring-2 focus:outline-none focus:ring-[#78d64b] rounded-lg block w-full p-2.5" placeholder=" telefone" required/>

        </div>


        <div>

          {/* REASON DROPDOWN SELECT */}


          <label htmlFor="reason" className="block mb-2 text-sm font-medium text-gray-900">Por que está buscando o registro? </label>

          <select name="reason"
          onChange={(e)=>setReason(e.target.value)} 
          id="reason" 
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm shadow-sm focus:ring-2 focus:outline-none focus:ring-[#78d64b] rounded-lg block w-full p-2.5" 
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


          <label htmlFor="brandType" className="block mb-2 text-sm font-medium text-gray-900">Qual segmento de atuação da marca?</label>

          <select name="brandType"
          onChange={(e)=>setBrandType(e.target.value)} 
          id="brandType" 
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm shadow-sm focus:ring-2 focus:outline-none focus:ring-[#78d64b] rounded-lg block w-full p-2.5" 
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
          <button type="" className="bg-[#78d64b] text-white py-3 px-5 text-l font-medium text-center rounded-lg sm:w-fit ">ENVIAR</button>
 



    </form>
  </div>

  
    </>
  )
}

export default EmailForm