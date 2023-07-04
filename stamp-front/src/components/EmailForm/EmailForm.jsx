import { useState } from "react";
import emailjs from "@emailjs/browser"




const EmailForm = () => {

    const [name,setName]= useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [reason, setReason]= useState('')
    const [message, setMessage] = useState('');


  function sendEmail(e){
    e.preventDefault();
    if(name==''|| email ==''|| message== ''|| phone == ''){
      alert('Preencha todos os campos');
      return;
    }

    const templateParams = {
      from_name: name,
      message: message,
      phone: phone,
      reason: reason,
      email: email
    }

    emailjs.send('service_1ex69ch', 'template_hguemv4', templateParams, 'RSUSvedACuJwuKEfo')
    .then((response)=>{
      alert('email enviado')
      console.log('email enviado', response.status, response.text)
      setEmail('')
      setName('')
      setReason('')
      setPhone('')
      setMessage('')
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
          <input type="text" onChange={(e)=>setName(e.target.value)} value={name} id="name" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:outline-none focus:ring-[#78d64b]" placeholder="name" required/>

        </div>


        <div>

            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email: </label>
            <input type="email" onChange={(e)=>setEmail(e.target.value)} value={email} id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm shadow-sm focus:ring-2 focus:outline-none focus:ring-[#78d64b] rounded-lg block w-full p-2.5" placeholder=" email" required/>
        </div>


        <div>

        <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900">Telefone: </label>
        <input type="phone" onChange={(e)=>setPhone(e.target.value)} value={phone} id="phone" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm shadow-sm focus:ring-2 focus:outline-none focus:ring-[#78d64b] rounded-lg block w-full p-2.5" placeholder=" telefone" required/>

        </div>


        <div>

          <label htmlFor="reason" className="block mb-2 text-sm font-medium text-gray-900">Por que está buscando o registro? </label>

          <select onChange={(e)=>setReason(e.target.value)} id="reason" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm shadow-sm focus:ring-2 focus:outline-none focus:ring-[#78d64b] rounded-lg block w-full p-2.5" placeholder="Por que está buscando o registro?" required>

            <option value={reason}>Curiosidade/ Dúvida</option>
            <option value={reason}>Sei da importância e quero me precaver</option>
            <option value={reason}>Existe um concorrente que está me copiando</option>

          </select>
        </div>

        <div className="sm:col-span-2">
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 ">Your message</label>
              <textarea id="message" onChange={(e)=>setMessage(e.target.value)} value={message} rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-2 focus:outline-none focus:ring-[#78d64b]" placeholder="Leave a comment..."></textarea>
          </div>
          <button type="" className="bg-[#78d64b] text-white py-3 px-5 text-l font-medium text-center rounded-lg sm:w-fit ">Click me</button>




    </form>
  </div>

  
    </>
  )
}

export default EmailForm