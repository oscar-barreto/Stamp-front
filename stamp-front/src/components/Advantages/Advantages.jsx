import AdvantagesCarousel from "./AdvantagesCarousel";
import office from "../../assets/images/office.jpg";
import greenStamp from '../../assets/images/greenstamp.jpeg'

 
 const Advantages = ()=> {
  return (
    <>
      <section className="bg-white p-12" style={{backgroundImage:`url(${greenStamp})`}}>
          <div className="grid grid-cols-2">
            <div className="flex justify-end items-center">
              <AdvantagesCarousel/>
          </div>
            <div className="p-0 m-0 flex justify-end">
              <img className="lg:w-[500px] lg:h-[380px] rounded-2xl" src={office} alt="" srcset="" />
            </div>
          </div>
      </section>
    </>
  );
}

export default Advantages;