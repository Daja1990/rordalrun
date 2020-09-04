import React from 'react';
import Styles from "./Footer.css";
import fb from './fb-logo.svg';
import ig from './ig-logo.svg';

export default function Footer(props) {
    return (
        <footer className={Styles.sitefooter}>
            <section className="footer-sec">
                <div className="footer-logos">
                <img className="sm-logo" src={fb} alt="Logo" />
                <img className="sm-logo2" src={ig} alt="Logo" fill="white" stroke="green" />
                </div>
                <div className="info-footer">
                <h3>Information</h3>
                <br />
                <p>Om Rørdal Run</p>
                <p>Ruter</p>
                <p>Tilmelding</p>
                <p>Distancer</p>
                </div>
                <div className="info-footer">
                <h3>Kontakt Os</h3>
                <br />
                <p>+ 45 35 67 90 87</p>
                <p>roerdalrun@mail.com</p>
                </div>
            </section>
        </footer>
    )
}