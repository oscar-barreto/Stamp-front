
    const Table = () => {
    return (
        <>
            <div className="mt-10 bg-gray-100 p-5 flex flex-col items-center">
                <h1 className="p-5 m-5">How do we compared to the industry</h1>
                <table class="table-auto">
                    <thead>
                        <tr>
                        <th></th>
                        <th className="p-5 text-xl">Industry Average</th>
                        <th className="p-5 text-xl">Stamp</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style={{borderBottom: "1px solid grey"}}>
                        <td className="p-5 text-xl font-bold">Initial risk assessement</td>
                        <td className="p-5 font-light">Paid search (~ $150)</td>
                        <td className="p-5 font-light">Free lawyer's check in 24 hours</td>
                        </tr>
                        <tr style={{borderBottom: "1px solid grey"}}>
                        <td className="p-5 text-xl font-bold">Scope of services provided</td>
                        <td className="p-5 font-light">Registration only</td>
                        <td className="p-5 font-light">Registration, Litigation support, Monitoring</td>
                        </tr>
                        <tr style={{borderBottom: "1px solid grey"}}>
                        <td className="p-5 text-xl font-bold">Coverage</td>
                        <td className="p-5 font-light">1-2 countries only</td>
                        <td className="p-5 font-light">Global</td>
                        </tr>
                        <tr style={{borderBottom: "1px solid grey"}}>
                        <td className="p-5 text-xl font-bold">Registration Process</td>
                        <td className="p-5 font-light">Lengthy and often unclear</td>
                        <td className="p-5 font-light">Simple online 3-step process</td>
                        </tr>
                        <tr style={{borderBottom: "1px solid grey"}}>
                        <td className="p-5 text-xl font-bold">Application Success Rate</td>
                        <td className="p-5 font-light">64.40%</td>
                        <td className="p-5 font-light">96.90%</td>
                        </tr>
                        <tr style={{borderBottom: "1px solid grey"}}>
                        <td className="p-5 text-xl font-bold">Pricing Structure</td>
                        <td className="p-5 font-light">Unclear with hidden fees</td>
                        <td className="p-5 font-light">Transparent, including all fees</td>
                        </tr>
                        <tr>
                        <td className="p-5 text-xl font-bold">Access to Amazon Brand Registry</td>
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