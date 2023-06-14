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

          
          
          <div id="content" className="carousel scroll-smooth flex items-center px-4 justify-start overflow-x-auto lg:w-[630px] sm:w-[200px] relative scrollbar-hide">

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
          <div className=" p-2 absolute top-28">

            <button onClick={scrollLeft} className=" p-1 mx-1 bg-gray-100 text-xl rounded-xl"><FiChevronLeft/></button>
            <button onClick={scrollRight} className="p-1 mx-1 bg-gray-100 text-xl rounded-xl"><FiChevronRight/></button>

          </div>
      
    </div>
    
   
   </>
  )
}

export default AdvantagesCarousel