import { Link } from "react-router-dom";
import UsersTable from "../components/UsersTable";
import { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
function ViewUsers({setUserToEdit}) {

    
    const [users, setUsers] = useState([]);

    const history = useHistory();

    const getUsers = async () => {
        await fetch('http://flip1.engr.oregonstate.edu:9604/users')
            .then((response) => response.json())
            .then((data) => setUsers(data));
        
    };

    const onEdit = user => {
        setUserToEdit(user);
        history.push('/EditUser')
    };

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <div>
            <UsersTable users={users} onEdit={onEdit} />
            <Link to="/">Return to Homepage</Link>
        </div>
    )
}

export default ViewUsers