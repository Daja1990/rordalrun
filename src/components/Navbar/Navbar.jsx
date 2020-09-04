import React from 'react';
import Styles from "./Navbar.css";
import { slide as Menu } from "react-burger-menu";
import "./Navbar.css";
import routes from '../Router/routes';
import { NavLink } from 'react-router-dom';
// import Login from '../Pages/Login/Login';
import LoginComp from '../LoginComp/LoginComp';

const Li = props => {
    const { name, exact, path } = props;

    return (
        <li>
            <NavLink to={path} exact={exact}>
                {name}
            </NavLink>
        </li>
    );
}

export default function Navbar(props) {
    return (
        <div>
        <nav className="full-nav">
            <h2 className="navtext">Rørdal Run</h2>
            <ul>
                {routes.map((navelement, i) => {
                    // console.log(navelement);
                    if (!navelement.hidden){
                    return (
                        <Li key={navelement.name}
                        {...navelement}
                        />
                        );
                    }
                })}
            </ul>
        </nav>

{/* Burger Mobile Menu */}
                <div className="burger-nav">
        <Menu right {...props}>
            <nav className="burger-nav">
                <ul>
                {routes.map((navelement, i) => {
                    // console.log(navelement);
                    if (!navelement.hidden){
                    return (
                        <div>
                        <Li key={navelement.name}
                        {...navelement}
                        />
                        <hr />
                        </div>
                        );
                    }
                })}
                </ul>
                    <LoginComp />
            </nav>
        </Menu>
            </div>

        </div>
    );
}