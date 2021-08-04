import React from "react";
import { Link } from "react-router-dom";
import "../style.css";

const Navigation = () => {
    return (
        <div className="Navigation">
            <Link to="/">HOME</Link>
            <Link to="/about">ABOUT</Link>
        </div>
    );
};

export default Navigation;
