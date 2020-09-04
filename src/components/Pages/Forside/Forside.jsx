import React from 'react';
import './Forside.scss';
import NavbarSmall from '../../NavbarSmall/NavbarSmall';
import NewsFetch from '../../NewsFetch/NewsFetch';
import Pagefetch from '../../Pagefetch/Pagefetch';


export default function Forside(props) {

    return (
        <div>
            <NavbarSmall />
            <div className="filler">
                <section className="fp-first">
                <h2 className="h2-size">Velkommen til Rørdal Run!</h2>
                <p className="hero-p">Tilmelding? <button className="tilmeld-knap">Klik her</button></p>
                <p className="hero-p">Ikke logget ind? <button className="tilmeld-knap">Klik her</button></p>
                <br />
                </section>
                <Pagefetch />
                <NewsFetch />
            </div>
        </div>
    )
}

