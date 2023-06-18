import girl from "../../assets/images/girl.png"



const WhyUs = () => {
  return (
    <>  
      <div className="bg-white h-40">
        <div className="flex justify-center items-center">
        <div className="bg-[#78d64b] rounded-3xl flex">
            <div>
              <img className="h-[450px] w-96" src={girl} alt="" />
            </div>
            <div className="flex flex-col m-2 p-2 justify-center">
                <h3 className="p-1 m-1 text-xl font-semibold text-white">Você sabia que muitos empreendedores <br /> perdem as suas marcas?</h3>
                <p className="p-1 m-1 text-white">Se você é empreendedor e não tem registro da sua marca no INPI, <br /> você está correndo esse risco. Dono da marca é quem registra <br /> primeiro. Portanto, caso alguém faça o registro no INPI, você será <br /> impedido de usar o nome que escolheu para o seu negócio</p>
            </div>
        </div>

        </div>
        </div>
        <div className="bg-[#f7f7f7] h-40"></div>
    
    </>
  )
}

export default WhyUs