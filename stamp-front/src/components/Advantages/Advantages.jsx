import AdvantagesCarousel from "./AdvantagesCarousel";
import nobgStamp from "../../assets/images/nobgstamp.png";
import office from "../../assets/images/office.jpg";
import greenStamp from '../../assets/images/greenstamp.jpeg'

 
 const Advantages = ()=> {
  return (
    <>
      <section className="bg-[#f7f7f7] pt-2">
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
      </section>
    </>
  );
}

export default Advantages;