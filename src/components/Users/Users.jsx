import React from 'react'

import User from "./User";

let Users = (props) => {
    let users = props.users.map((user) => {
        return <User user={user} key={user.id} removeUser={props.removeUser}/>
    });

    return <div className='users'>
        {users}

        {!props.isEmptyRemoveUsers && <div className="addUser">
            <button onClick={props.addUser}>Add User</button>
        </div>}
    </div>
};

export default Users;