import React, { useState, useEffect } from 'react';
import './Pagefetch.scss';
import jogger from './jogging.jpg';

export default function FetchPageData(props) {
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
            <section className="rungrid">
                {
                    apiData && apiData.length > 0 && apiData.slice(0,1).map((item, i) =>
                    <div className="dangerhtml" key={item.title}>
                        <div className="wrappings">
                        <h3 className="pageheader">{item.title}</h3>
                        {/* <p>{item.teaser}</p> */}
                        {/* <div>{item.content}</div> */}
                        <div className="danger-txt" dangerouslySetInnerHTML={{ __html: item.content}}></div>
                            <br />
                            </div>
                        </div>
                    )
                }
                                {
                    apiData && apiData.length > 0 && apiData.slice(1,2).map((item, i) =>
                    <div className="dangerhtml" key={item.title}>
                        <div className="wrappings">
                        <h3 className="pageheader">{item.title}</h3>
                        <div className="danger-txt" dangerouslySetInnerHTML={{ __html: item.content}}></div>
                            <br />
                            <img className="joggerimg" src={jogger} alt="Logo" />
                            </div>
                        </div>
                    )
                }
                <h3 className="h2-fp">Info om de forskellige Rørdal Runs</h3>
            </section>
        </div>
    )
}