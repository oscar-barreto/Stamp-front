import Marketing from '../../assets/images/marketing.jpg'

const AboutUs = () => {
  return (
    <div className='container p-10 m-10'>
        <div className='grid grid-cols-8'>
            <div></div>
            <div className='bg-lime-800 rounded-xl col-span-6 flex'>
                <div className='m-1 p-1 flex justify-center'>
                    <img className='m-1 p-1 w-60 h-60' src={Marketing} alt="" />
                </div>
                <div>
                    <div className='p-1 m-1 text-2xl text-white'>Você sabia que muitos empreendedores perdem as suas marcas?</div>
                    <p>Se você é empreendedor e não tem registro da sua marca no INPI, você está correndo esse risco. Dono da marca é quem registra primeiro. Portanto, caso alguém faça o registro no INPI, você será impedido de usar o nome que escolheu para o seu negócio.</p>
                    <a href="">Quero registrar minha marca</a>
                </div>
            </div>
            <div></div>
        </div>
    </div>
  )
}

export default AboutUs