import React from 'react';
import Styles from "./MainStyle.css";

export default function MainStyle(props) {
    return (
        <main className={Styles.sitemain}>
            {props.children}
        </main>
    )
}