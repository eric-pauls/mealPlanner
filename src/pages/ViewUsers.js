import { Link } from "react-router-dom";
import UsersTable from "../components/UsersTable";
import { useState, useEffect } from 'react';

function ViewUsers() {

    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        const response = await fetch('http://flip1.engr.oregonstate.edu:9604/users');
        
        const data = await response.json();

        if (response.ok) {
            setUsers(data);
        }
        else {
            console.error(`Could not fetch, status code = ${response.status}`)
        }
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