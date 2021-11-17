import React from 'react';
import {useState, useEffect, useCallback} from 'react';



function UserDropdown({userID, onUserChange}) {

    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        await fetch('http://flip1.engr.oregonstate.edu:9604/users')
            .then((response) => response.json())
            .then((data) => setUsers(data));
        
    };


    useEffect(() => {
        getUsers();
    }, []);

    const changeUser = useCallback(

        e => {
            onUserChange(e.target.value)
        },
        [onUserChange]
    );

    const mapping = () => {
        if (users !== null) {
            return users.map((user) => (
                <option key = {user.userID} value={user.userID}>{user.userName}</option>
            ));
        };
    };

    return (
        <div>
            <label>Choose User: </label>
            <select onChange={changeUser} val={userID}>
                <option>--Select User--</option>
                {mapping()}
            </select>
        </div>
    )
}

export default UserDropdown