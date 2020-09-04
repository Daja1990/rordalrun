import React, { useState, useEffect } from 'react';
import NavbarSmall from '../../NavbarSmall/NavbarSmall';
import './Distancer.scss';
// import Slider from '../../Slider/Slider';

export default function Fun(props) {

    const [apiData, setApiData] = useState(null);

    const getRunName = (id) => {
        switch(id) {
            case "1":
                return "10 Km"
            case "2":
                return "5 Km"
            case "3":
                return "1 Mile"   
            default :
                return "Går istedet"
            }
    }

    async function getCategory() {
        const fetchHeaders = new Headers();
        fetchHeaders.append('Accept', 'application/json');
        try {
            const request = await fetch('https://api.mediehuset.net/rordal/registrations', { headers: fetchHeaders });
            const response = await request.json();
            console.log(response.items);
            setApiData(response.items);
        } catch (error) {
            console.log('getCategory -> Error', error);
        }
    }

    useEffect(() => {
        getCategory()
    }, [])

    return (
        <div>
            <NavbarSmall />
            <div  className="fullwrapper">
            <h2 className="distanceheader">Liste med deltagere i løbene</h2>
            <div className="name-show">
                <p>Fornavn</p>
                <p>Efternavn</p>
                <p>By</p>
                <p>Løb</p>
            </div>
            {
                    apiData && apiData.length > 0 && apiData.map((item, i) =>
                    <div className="list-race" key={item.title}>
                        <div className="distance-grid">
                        <p className="">{item.firstname}</p>
                        <p className="">{item.lastname}</p>
                        <p className="">{item.city}</p>
                        <p className="">{getRunName(item.run_id)}</p>
                            <br />
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}