import work from "../../assets/images/work.jpg"

const Card = () => {
  return (
    <div className="card bg-gray-50 border-2 border-black rounded-xl w-[150px] h-[180px] m-2 shadow-lg">
        <div className="top flex justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 p-1 m-1 border-2 border-lime-500 rounded-full text-lime-800">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5" />
            </svg>

        </div>
          <div className="bottom flex flex-col justify-center items-start p-3">
            <p className="text-center font-semibold">Uso exclusivo da marca em todo o Brasil</p>
        </div>
    </div>
  )
}

export default Card