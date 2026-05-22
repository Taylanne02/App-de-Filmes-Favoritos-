import { Link } from "react-router-dom";
import { useState } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

function Header() {
    return (
        <header>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/favoritos">Favoritos</Link>

            <button onClick={alternarTema}>
            Tema: {tema}
            </button>
        </nav>
        </header>
    );
    }

export default Header;