import NavbarSmall from '../../NavbarSmall/NavbarSmall';
import React, { useState, useEffect } from 'react';
import '../../../App.css';
import './Tilmelding.css';
import { Link } from 'react-router-dom';
import PostComment from '../../PostComment/PostComment';

export default function Kontakt(props) {

    return (
        <div className="contactMain">
            <NavbarSmall />
            <PostComment />
        </div>
    );
}
