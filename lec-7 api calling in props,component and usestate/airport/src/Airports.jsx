import React from 'react'

const Airports = ({ airport }) => {
    return (
        <div>
            <h1>Airports api</h1>


            <table border={1} cellPadding={1}>
                <thead>
                    <tr>
                        <td>id</td>
                        <td>name</td>
                        <td>code</td>
                        <td>city</td>
                        <td>airlines</td>
                        <td>location</td>
                        <td>country</td>
                        <td>timezone</td>
                        <td>terminals</td>
                        <td>services</td>
                        <td>contact</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        airport.map((a, i) => {
                            return (
                                <tr key={i}>

                                    <td>{a.id}</td>
                                    <td>{a.name}</td>
                                    <td>{a.code}</td>
                                    <td>{a.city}</td>
                                    <td>
                                        <ul>
                                            {
                                                a.airlines.map((air, i) => {
                                                    return (
                                                        <li key={i}>{air}</li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </td>
                                    <td>
                                        <ul>
                                            <li>{a.location.latitude}</li>
                                            <li>{a.location.longitude}</li>
                                        </ul>
                                    </td>
                                    <td>{a.country}</td>
                                    <td>{a.timezone}</td>
                                    <td>{
                                        <table border={1} cellPadding={2}>
                                            <thead>
                                                <tr>
                                                    <td>name</td>
                                                    <td>gates</td>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    a.terminals.map((p, i) => {


                                                        return (
                                                            < tr >
                                                                <td>{p.name}</td>
                                                                <td>
                                                                    {
                                                                        p.gates.map((g, i) => {
                                                                            return (
                                                                                <tr>
                                                                                    <td>{g.gate_number}</td>
                                                                                    <td>
                                                                                        <ul>
                                                                                            <li>{g.airlines}</li>
                                                                                        </ul>
                                                                                    </td>
                                                                                </tr>
                                                                            )
                                                                        })
                                                                    }
                                                                </td>
                                                            </tr>
                                                        )

                                                    })
                                                }
                                            </tbody>
                                        </table>
                                    }</td>
                                    <td>
                                        {
                                            <ul>
                                                <li>{a.services}</li>
                                            </ul>
                                        }
                                    </td>
                                    <td>
                                        {a.contact_info.phone}
                                        {a.contact_info.email}
                                        {a.contact_info.website}

                                    </td>

                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>

        </div >
    )
}

export default Airports
