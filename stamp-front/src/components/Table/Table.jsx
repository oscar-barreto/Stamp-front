
    const Table = () => {
    return (
        <>
            <div className="bg-gray-100 p-5 flex flex-col items-center">
                <div className="flex flex-col items-center m-12">
                <div className="w-40 h-0 border-2 border-lime-500"></div>
                <h1 className="p-3 m-8 tracking-wider text-black font-bold rounded text-5xl" style={{textShadow:"1px 1px #57504d"}}>Vantagens:</h1>
                <div className="w-40 h-0 border-2 border-lime-500"></div>
                </div>

                <table className="table-auto">
                    <thead>
                        <tr>
                        <th></th>
                        <th className="p-5 text-xl">Industry Average</th>
                        <th className="p-5 text-xl">Stamp</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style={{borderBottom: "1px solid grey"}}>
                        <td className="md:pr-10 text-xl font-bold">Initial risk assessement</td>
                        <td className="p-5 font-light">Paid search (~ $150)</td>
                        <td className="p-5 font-light">Free lawyer's check in 24 hours</td>
                        </tr>
                        <tr style={{borderBottom: "1px solid grey"}}>
                        <td className="md:pr-10 text-xl font-bold">Scope of services provided</td>
                        <td className="p-5 font-light">Registration only</td>
                        <td className="p-5 font-light">Registration, Litigation support, Monitoring</td>
                        </tr>
                        <tr style={{borderBottom: "1px solid grey"}}>
                        <td className="md:pr-10 text-xl font-bold">Coverage</td>
                        <td className="p-5 font-light">1-2 countries only</td>
                        <td className="p-5 font-light">Global</td>
                        </tr>
                        <tr style={{borderBottom: "1px solid grey"}}>
                        <td className="md:pr-10 text-xl font-bold">Registration Process</td>
                        <td className="p-5 font-light">Lengthy and often unclear</td>
                        <td className="p-5 font-light">Simple online 3-step process</td>
                        </tr>
                        <tr style={{borderBottom: "1px solid grey"}}>
                        <td className="md:pr-10 text-xl font-bold">Application Success Rate</td>
                        <td className="p-5 font-light">64.40%</td>
                        <td className="p-5 font-light">96.90%</td>
                        </tr>
                        <tr style={{borderBottom: "1px solid grey"}}>
                        <td className="md:pr-10 text-xl font-bold">Pricing Structure</td>
                        <td className="p-5 font-light">Unclear with hidden fees</td>
                        <td className="p-5 font-light">Transparent, including all fees</td>
                        </tr>
                        <tr>
                        <td className="md:pr-10 text-xl font-bold">Access to Amazon Brand Registry</td>
                        <td className="p-5 font-light">Months</td>
                        <td className="p-5 font-light">1-2 weeks</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
    }

    export default Table