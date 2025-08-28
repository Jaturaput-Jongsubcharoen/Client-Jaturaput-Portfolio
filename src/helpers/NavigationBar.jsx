import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavigationBar.css';

const NavigationBar = () => {
    return (
        <nav className="navbar">
            <ul style={{ listStyle: "none", display: "flex", gap: "1rem", margin: 0, padding: 0 }}>
                <li>
                    <Link to="/" style={{ color: "white", textDecoration: "none" }}>Home</Link>
                </li>
                <li>
                    <Link to="/about" style={{ color: "white", textDecoration: "none" }}>About</Link>
                </li>
                <li>
                    <Link to="/contact" style={{ color: "white", textDecoration: "none" }}>Contact</Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavigationBar;