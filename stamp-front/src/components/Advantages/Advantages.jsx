import AdvantagesCarousel from "./AdvantagesCarousel";
import sectionPhoto from "../../assets/images/sectionphoto.png"
// import nobgStamp from "../../assets/images/nobgstamp.png";
// import office from "../../assets/images/office.jpg";
// import greenStamp from '../../assets/images/greenstamp.jpeg'


 
 const Advantages = ()=> {
  return (
    <>

      <div className="bg-[#f7f7f7] flex">
        <div className="lg:w-1/2 sm:w-100">
            <div className="px-9">
                <h2 className="px-3 p-1 m-1 py-2 my-2 text-5xl font-semibold text-lime-800">Vantagens de ter sua Marca Registrada</h2>
                <p className=" px-3 py-2 my-1 p-1 font-thin m-1">Veja as vantagens de registrar suar marca com a Stamp </p>
                <div className="px-3 p-1 m-1 py-2 my-2">
                  <button className="border-2 hover:border-lime-800 bg-lime-800 text-white  hover:text-lime-800 hover:bg-white p-4 rounded-xl">Converse com a gente</button>
                </div>
            </div>
            
            <div className="carousel-container px-5">
                <AdvantagesCarousel/>
            </div>
          
        </div>
        <div className="lg:w-1/2 lg:h-100 sm:w-100">
            <img className="lg:h-100 lg:h-100 sm:w-100 lg:w-100" src={sectionPhoto} alt="" />
        </div>
      </div>



      {/* <section className="bg-[#f7f7f7] pt-2">
          <div className="z-[-1] flex justify-start pl-48">
            <h2 className="text-lime-800 font-light tracking-wide text-3xl"> Vantagens de ter sua marca registrada</h2>
          </div>
          <img className="z-[0] h-[600px] lg:pl-32 w-[1000px] absolute left-10" src={nobgStamp} alt="" srcset="" />
          <div className="grid grid-cols-2">
            <div className="flex justify-center items-start]">
              
              <AdvantagesCarousel/>
          </div>
            <div className="pl-2 flex justify-end">
              <img className="lg:w-[550px] z-[1] lg:h-[450px] relative left-4 rounded-3xl" src={office} alt="" srcset="" />
            </div>
          </div>
      </section> */}
    </>
  );
}

export default Advantages;