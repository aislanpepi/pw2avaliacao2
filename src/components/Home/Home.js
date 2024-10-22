import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import './Home.css';

const Home = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://671653ff3fcb11b265d1ee09.mockapi.io/avaliation2')
            .then(res => setData(res.data))
            .catch(err => console.log(err));
    }, []);

    return (
        <div className="w-50 mx-auto">
            <div className="table-responsive">
                <table className="table table-striped table-hover">
                    <thead className="thead-light">
                        <tr>
                            <th>ID</th>
                            <th>Filme</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((d) => (
                            <tr key={d.id} className="user-row">
                                <td>{d.id}</td>
                                <td>
                                    <Link to={`/read/${d.id}`} className="text-decoration-none text-dark">
                                        {d.movie}
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Home;
