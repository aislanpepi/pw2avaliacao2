import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Home.css';

const Home = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://671653ff3fcb11b265d1ee09.mockapi.io/avaliation2')
            .then(res => setData(res.data))
            .catch(err => console.log(err));
    }, []);

    const handleRead = (id) => {
        console.log('Reading:', id);
    };

    const handleEdit = (id) => {
        console.log('Editing:', id);
    };

    const handleDelete = (id) => {
        console.log('Deleting:', id);
    };

    return (
        <div className="w-50 mx-auto">
            <h1 className="text-center">Lista de Usuários</h1>
            <div className="table-responsive">
                <table className="table table-striped">
                    <thead className="thead-light">
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th className="w-50 text-center">Ação</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((d) => (
                                <tr className="user-row" key={d.id}>
                                    <td>{d.id}</td>
                                    <td>{d.movie}</td>
                                    <td className="text-end">
                                        <button className="btn btn-info btn-sm me-2" onClick={() => handleRead(d.id)}>Ler</button>
                                        <button className="btn btn-primary btn-sm me-2" onClick={() => handleEdit(d.id)}>Editar</button>
                                        <button className="btn btn-danger btn-sm me-2" onClick={() => handleDelete(d.id)}>Apagar</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Home;
