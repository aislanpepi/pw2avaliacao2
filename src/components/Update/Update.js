import React, { useState } from "react";
import axios from "axios";
import { useNavigate} from "react-router-dom";

const Update = () => {
    const [id, setId] = useState('');
    const [values, setValues] = useState({ movie: '', gender: '', year: '' });
    const [isFetched, setIsFetched] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.get(`https://671653ff3fcb11b265d1ee09.mockapi.io/avaliation2/${id}`)
            .then(res => {
                setValues({
                    movie: res.data.movie,
                    year: res.data.year,
                    gender: res.data.gender
                });
                setIsFetched(true);
            })
            .catch(err => {
                alert("Filme não encontrado!")
                navigate('/');
            });
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        axios.put(`https://671653ff3fcb11b265d1ee09.mockapi.io/avaliation2/${id}`, values)
            .then(res => {
                navigate('/');
            })
            .catch(err => console.log(err));
    };


    return (
        <div>
            <form onSubmit={handleSubmit} className="container mt-4 col-md-6 mx-auto">
                <div className="mb-3">
                    <label htmlFor="id" className="form-label">Id:</label>
                    <input
                        type="text"
                        id="id"
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
            {isFetched && (
                <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
                    <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
                        <h1>Editar Filme</h1>
                        <form onSubmit={handleUpdate}>
                            <div className='mb-2'>
                                <label htmlFor="movie">Filme:</label>
                                <input
                                    type="text"
                                    name='movie'
                                    className='form-control'
                                    value={values.movie}
                                    onChange={e => setValues({ ...values, movie: e.target.value })}
                                />
                            </div>
                            <div className='mb-2'>
                                <label htmlFor="year">Ano:</label>
                                <input
                                    type="number"
                                    name='year'
                                    className='form-control'
                                    value={values.year}
                                    onChange={e => setValues({ ...values, year: e.target.value })}
                                />
                            </div>
                            <div className='mb-3'>
                                <label htmlFor="gender">Genero:</label>
                                <input
                                    type="text"
                                    name='gender'
                                    className='form-control'
                                    value={values.gender}
                                    onChange={e => setValues({ ...values, gender: e.target.value })}
                                />
                            </div>
                            <div className='d-flex justify-content-between'>
                                <button className='btn btn-success'>Atualizar</button>
                                <button type="button" className='btn btn-primary' onClick={() => navigate('/')}>Voltar</button>
                            </div>
                        </form>
                    </div>  
                </div>
            )}
        </div>
    );
};

export default Update;
