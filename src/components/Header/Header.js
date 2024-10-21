import React from "react";
import './Header.css';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header >
            <h1>Catalogo de Filmes</h1>
            <nav className="header">
                <ul>
                    <li><Link to="/">Início</Link></li>
                    <li><Link to="./create">Criar</Link></li>
                    <li><Link to="/update">Atualizar</Link></li>
                    <li><Link to="/delete">Deletar</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
