import React, { useState } from "react";
import './Create.css';

const Create = () => {
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Filme adicionado:", name);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Nome:
                <input 
                    type="text" 
                    name="name" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
}

export default Create;