import React, { useState } from "react";
import './Create.css';

const Create = () => {
    const [name, setName] = useState('');
    const [gender, setGender] = useState('');
    const [year, setYear] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ name, gender, year });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">Nome:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="gender">Gênero:</label>
                <input
                    type="text"
                    id="gender"
                    name="gender"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="year">Ano:</label>
                <input
                    type="text"
                    id="year"
                    name="year"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}

export default Create;