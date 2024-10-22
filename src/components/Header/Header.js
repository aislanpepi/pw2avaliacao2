import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css'; // Optional, if you have any remaining custom styles

const Header = () => {
    return (
        <header className="bg-dark text-white py-3 rounded mb-4 border border-dark">
            <div className="container">
                <h1 className="text-center mb-4">Catálogo de Filmes</h1>
                <nav>
                    <ul className="nav justify-content-center">
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/">Início</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/create">Criar</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/update">Atualizar</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/delete">Deletar</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
