import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

function Read() {
    const [data, setData] = useState({});
    const { id } = useParams();

    useEffect(() => {
        axios.get(`https://671653ff3fcb11b265d1ee09.mockapi.io/avaliation2/${id}`)
            .then(res => setData(res.data))
            .catch(err => console.log(err));
    }, [id]);

    return (
        <div className='d-flex w-100 justify-content-center align-items-center bg-light'>
            <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
                <h3 className='text-center'>Detalhes do Filme</h3>
                <div className='mb-2'>
                    <strong>Filme:</strong> {data.movie}
                </div>
                <div className='mb-2'>
                    <strong>Gênero:</strong> {data.gender}
                </div>
                <div className='mb-3'>
                    <strong>Ano:</strong> {data.year}
                </div>
                <Link to="/" className='btn btn-primary'>Cancelar</Link>
            </div>
        </div>
    );
}

export default Read;
