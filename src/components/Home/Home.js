import React, { useEffect,useState } from 'react';
import axios from 'axios';



const Home = () =>{

    const [data, setData] = useState([]);

    useEffect( () => {
        axios.get('https://671653ff3fcb11b265d1ee09.mockapi.io/avaliation2')
        .then( res => setData(res.data) )
        .catch( err => console.log(err) );
        }, [] );

        return (
                <div className='d-flex flex-column justify-content-center
                align-items-center bg-light vh-100'>
                <h1>Lista de Usuários</h1>
                <div className='w-75 rounded bg-white border shadow p-4'>
                <table className='table table-striped'>
                <thead>
                <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Email</th>
                <th>Celular</th>
                <th>Ação</th>
                </tr>
                </thead>
                <tbody>
                {
                data.map( (d,i) => (
                <tr key={i}>
                <td>{d.id}</td>
                <td>{d.name}</td>
                <td>{d.gender}</td>
                <td>{d.year}</td>
                <td>
                <button className='btn btn-sm btn-info me-2'>Ler</button>
                <button className='btn btn-sm btn-primary me-2'>Editar</button>
                <button className='btn btn-sm btn-danger'>Apagar</button>
                </td>
                </tr>
                ) )
                }
                </tbody>
                </table>        
                </div>
                </div>
        );
}
export default Home;