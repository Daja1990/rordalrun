import React, { useState, useEffect } from 'react';
import './NewsFetch.css';

export default function FetchData(props) {
    const [apiData, setApiData] = useState(null);

    const [isShown, setIsShown] = useState(false);


    async function getCategory() {
        const fetchHeaders = new Headers();
        fetchHeaders.append('Accept', 'application/json');
        try {
            const request = await fetch('https://api.mediehuset.net/rordal/run', { headers: fetchHeaders });
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
            <section className="fetchclass">
                {
                    apiData && apiData.length > 0 && apiData.slice().reverse().map((item, i) =>
                    <div key={item.title}>
                        <h3 className="api-header">{item.title}</h3>
                        <p>{item.description.slice(0, 489)}</p>
                        {/* <p className="p-hidden">{item.description.slice(489)}</p> */}
                            <br />
                                {isShown && (
                                    <div>
                                     <p>{item.description.slice(489)}</p>
                                    </div>
                                )}
                            <button
                            className="unhide-button"
                            onClick={() => setIsShown(true)}
                            onDoubleClick={() => setIsShown(false)}>
                            Klik for mere!
                            </button>
                        </div>
                    )
                }
            </section>
        </div>
    )
}