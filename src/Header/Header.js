import React from "react";
import './Header.css';

const Header = () => {
    return (
        <nav className="header">
            <ul>
                <li><a href="/">Inicio</a></li>
                <li><a href="/">Criar</a></li>
                <li><a href="/">Atualizar</a></li>
                <li><a href="/">Deletar</a></li>
            </ul>
        </nav>
    );
}

export default Header;
