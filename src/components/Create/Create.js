import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './Create.css';

const Create = () => {
    const [values, setValues] = useState({
        movie: '',
        year: '',
        gender: ''
    });

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://671653ff3fcb11b265d1ee09.mockapi.io/avaliation2', values)
            .then(res => {
                console.log(res);
                navigate('/');
            })
            .catch(err => console.log(err));
    };

    return (
        <form onSubmit={handleSubmit} className="container mt-4 col-md-6 mx-auto">
            <div className="mb-3">
                <label htmlFor="movie" className="form-label">Nome:</label>
                <input
                    type="text"
                    id="movie"
                    name="movie"
                    className="form-control"
                    value={values.movie}
                    onChange={e => setValues({ ...values, movie: e.target.value })}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="gender" className="form-label">Gênero:</label>
                <input
                    type="text"
                    id="gender"
                    name="gender"
                    className="form-control"
                    value={values.gender}
                    onChange={e => setValues({ ...values, gender: e.target.value })}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="year" className="form-label">Ano:</label>
                <input
                    type="text"
                    id="year"
                    name="year"
                    className="form-control"
                    value={values.year}
                    onChange={e => setValues({ ...values, year: e.target.value })}
                />
            </div>
            <div className="d-flex justify-content-between">
                <button type="submit" className="btn btn-primary">Criar</button>
                <button 
                    type="button" 
                    className="btn btn-secondary" 
                    onClick={() => navigate('/')}
                >
                    Cancelar
                </button>
            </div>
        </form>
    );
}

export default Create;