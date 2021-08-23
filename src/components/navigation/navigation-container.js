import React from "react";
import { NavLink } from 'react-router-dom';

const NavigationComponent = (props) => {
    const dynamicLink = (route, linkText) => {
        return (
            <div className="nav-link-wrapper">
                <NavLink exact to="/blog" activeClassName="nav-link-active">
                    Blog
                </NavLink>
            </div>
        )
    }


    return (
        <div className="nav-wrapper">
            <div className="left-side">
                <div className="nav-link-wrapper">
                    <NavLink exact to="/" activeClassName="nav-link-active">
                        Home
                    </NavLink>
                </div>

                <div className="nav-link-wrapper">
                    <NavLink exact to="/about" activeClassName="nav-link-active">
                        About Me
                    </NavLink>
                </div>

                <div className="nav-link-wrapper">
                    <NavLink exact to="/contact" activeClassName="nav-link-active">
                        Contact
                    </NavLink>
                </div>

                {props.loggedInStatus === "LOGGED_IN" ? dynamicLink("/blog", "Blog") : null}
            </div>

            <div className="right-side">
                Courtney Morris
            </div>
        </div>
    );
}

    export default NavigationComponent