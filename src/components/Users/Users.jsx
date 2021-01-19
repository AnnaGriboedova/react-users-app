import React, {useState} from 'react'

import {UserBlock, UserListItem} from "./User";

const Users = (props) => {
    let [displayAsList, setDisplayAsList] = useState(true);

    const AddButtonEl = !props.isEmptyRemoveUsers && <div className="addUser ">
        <button className='button' onClick={props.addUser}>Add User</button>
    </div>;

    const Settings = <div className='settings'>
        <button className='displayButton' onClick={() => {
            setDisplayAsList(!displayAsList)
        }}>display blocks
        </button>
    </div>;

    return displayAsList ?
        <UsersList users={props.users} removeUser={props.removeUser} AddButton={AddButtonEl} Settings={Settings}/> :
        <UsersBlocks users={props.users} removeUser={props.removeUser} AddButton={AddButtonEl} Settings={Settings}/>
};

const UsersList = ({users, AddButton, Settings, removeUser}) => {
    const Users = users.map((user) => {
        return <UserListItem user={user} key={user.id} removeUser={removeUser}/>
    });

    return <div className='users_display_list'>
        {Settings}
        <ul className='users'>{Users}</ul>
        {AddButton}
    </div>
};
const UsersBlocks = ({users, AddButton, Settings, removeUser}) => {
    const Users = users.map((user) => {
        return <UserBlock user={user} key={user.id} removeUser={removeUser}/>
    });

    return <div className='users_display_blocks'>
        {Settings}
        <div className='users'>{Users}{AddButton}</div>
    </div>
};

export default Users;