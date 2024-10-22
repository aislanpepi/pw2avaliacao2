import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Update = () =>{

    const[id,setId] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.get(`https://671653ff3fcb11b265d1ee09.mockapi.io/avaliation2/${id}`)
                .then(res => console.log(res))
                .catch(err => console.log(err));
    };
    
    const navigate = useNavigate(); 

    return(
        <form onSubmit={handleSubmit} className="container mt-4 col-md-6 mx-auto">
            <div className="mb-3">
                <label htmlFor="id" className="form-label">Id:</label>
                <input
                    type="text"
                    id="id"
                    name="id"
                    className="form-control"
                    onChange={e => setId(e.target.value)}
                />
            </div>
            <div className="d-flex justify-content-between">
                <button type="submit" className="btn btn-primary">Buscar</button>
                <button type="button" className="btn btn-secondary" onClick={() => navigate('/')}>
                    Cancelar
                </button>
            </div>
        </form>
    );
}

export default Update;