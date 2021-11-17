import { Link } from "react-router-dom";
import UsersTable from "../components/UsersTable";
import { useState, useEffect } from 'react';

function ViewUsers() {

    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        await fetch('http://flip1.engr.oregonstate.edu:9604/users')
            .then((response) => response.json())
            .then((data) => setUsers(data));
        
    };

    useEffect(() => {
        getUsers();
    }, []);
    return (
        <div>
            <UsersTable users={users} />
            <Link to="/">Return to Homepage</Link>
        </div>
    )
}

export default ViewUsers