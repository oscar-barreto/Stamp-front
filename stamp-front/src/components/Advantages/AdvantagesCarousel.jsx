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

          
          
          <div id="content" className="carousel scroll-smooth py-2 flex items-center justify-start overflow-x-auto w-[500px] relative scrollbar-hide">

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
          <div className="m-2 p-2 absolute">

            <button onClick={scrollLeft} className=" p-1 m-1 bg-gray-100 text-xl rounded-xl"><FiChevronLeft/></button>
            <button onClick={scrollRight} className="p-1 m-1 bg-gray-100 text-xl rounded-xl"><FiChevronRight/></button>

          </div>
      
    </div>
    
   
   </>
  )
}

export default AdvantagesCarousel