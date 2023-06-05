import Card from "./Card";
import {FiChevronRight, FiChevronLeft} from "react-icons/fi";



const AdvantagesCarousel = () => {

  const scrollLeft = () => {
    document.getElementById("content").scrollLeft -= 400;
  }

  const scrollRight = () =>{
    document.getElementById("content").scrollLeft += 400;
  }


  return (
   <>
    <div className="relative w-96">

          <div className="text-end text-lime-900 tracking-wide text-3xl">Vantagens de ter sua<br></br> marca registrada</div>
          
          <div className="absolute m-2 p-2 top-5">

            <button onClick={scrollLeft} className="p-2 m-1 bg-gray-100 rounded-xl"><FiChevronLeft/></button>
            <button onClick={scrollRight} className="p-2 m-1 bg-gray-100 rounded-xl"><FiChevronRight/></button>

          </div>

          <div id="content" className="carousel scroll-smooth p-2 flex items-center justify-start overflow-x-auto w-[500px] relative scrollbar-hide">

                <div>
                  <Card/>
                </div>
                <div>
                  <Card/>
                </div>
                <div>
                  <Card/>
                </div>
                <div>
                  <Card/>
                </div>
                <div>
                  <Card/>
                </div>
                <div>
                  <Card/>
                </div>
                <div>
                  <Card/>
                </div>
                <div>
                  <Card/>
                </div>
          </div>
    </div>
   
   </>
  )
}

export default AdvantagesCarousel