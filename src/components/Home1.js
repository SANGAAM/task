import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const Home1 = () => {
    const [username, setUsername] = useState('');
    const [number, setNumber] = useState('');
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/student-detail", {
            state: { username, number },
        });
    };

    return (
        <div>
            <h1>Home Page</h1>
            <form>
                <label>
                    <input
                        type="text"
                        placeholder='your name'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        type="number"
                        placeholder='mobile number'
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                    />
                    <button onClick={handleClick}>Go to Student Detail</button>
                </label>
            </form>
        </div>
    );
};

export default Home1;
