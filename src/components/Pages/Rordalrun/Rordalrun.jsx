import React, { useState, useEffect } from 'react';
import NavbarSmall from '../../NavbarSmall/NavbarSmall';
import './Rordalrun.css';

export default function Produkter(props) {

    const [apiData, setApiData] = useState(null);

    async function getCategory() {
        const fetchHeaders = new Headers();
        fetchHeaders.append('Accept', 'application/json');
        try {
            const request = await fetch('https://api.mediehuset.net/rordal/pages', { headers: fetchHeaders });
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
            <section className="run-wrapper">
                                {
                    apiData && apiData.length > 0 && apiData.slice(3,4).map((item, i) =>
                    <div className="" key={item.title}>
                        <div className="">
                        <h3 className="pageheader">{item.title}</h3>
                        <div className="run-text" dangerouslySetInnerHTML={{ __html: item.content}}></div>
                            <br />
                            </div>
                        </div>
                    )
                }
            </section>
        </div>
    )
}