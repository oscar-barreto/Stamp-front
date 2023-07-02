import ExpCards from "./ExpCards"


const Options = () => {
  return (
    <>
        <div className="w-100 h-96 bg-white"></div>
        <div className="p-5 m-10 lg:grid lg:grid-cols-2">
            <div className="m-2">
                <ExpCards/>
            </div>
            <div className="m-2">
            <ExpCards/>
            </div>
        </div>
        <div className="p-5 m-10 grid grid-cols-2">
            <div className="m-2">
                <ExpCards/>
            </div>
            <div className="m-2">
            <ExpCards/>
            </div>
        </div>
        <div className="p-5 m-10 grid grid-cols-2">
            <div className="m-2">
                <ExpCards/>
            </div>
            <div className="m-2">
            <ExpCards/>
            </div>
        </div>
        <div className="w-100 h-96 bg-white"></div>

    </>
  )
}

export default Options