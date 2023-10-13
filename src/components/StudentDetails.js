import React, { useState } from 'react';
import { useLocation } from "react-router-dom";

const StudentDetails = () => {
    const location = useLocation();
    const [username, setUsername] = useState(location.state.username);
    const [number, setNumber] = useState(location.state.number);

    return (
        <div>

            <p>name is: {username}</p>
            <p>number is:{number}</p>
        </div>
    );
};

export default StudentDetails;
