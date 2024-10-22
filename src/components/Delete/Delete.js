import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Delete = () => {
    const [id, setId] = useState('');
    const navigate = useNavigate();

    const handleDelete = (e) => {
        e.preventDefault();
        const confirm = window.confirm("Quer mesmo apagar este usuário?");
        if (confirm) {
            axios.delete(`https://671653ff3fcb11b265d1ee09.mockapi.io/avaliation2/${id}`)
                .then(() => {
                    alert('Usuário apagado com sucesso!');
                    navigate('/');
                })
                .catch(err => {
                    console.error(err);
                    alert('Erro ao apagar usuário. Tente novamente.');
                });
        }
    };

    return (
        <div>
            <form onSubmit={handleDelete} className="container mt-4 col-md-6 mx-auto">
                <div className="mb-3">
                    <label htmlFor="id" className="form-label">Id:</label>
                    <input
                        type="text"
                        id="id"
                        className="form-control"
                        onChange={e => setId(e.target.value)}
                        value={id}
                    />
                </div>
                <div className="d-flex justify-content-between">
                    <button type="submit" className="btn btn-danger">Delete</button>
                    <button type="button" className="btn btn-secondary" onClick={() => navigate('/')}>
                        Cancelar
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Delete;
