import React from 'react'

export const UserListItem = ({user, removeUser}) => {
    let UserNameEl = <UserName firstName={user.first_name} lastName={user.last_name}/>;
    let UserRemoveBtnEl = <UserRemoveBtn removeUser={removeUser}
                                         userId={user.id}/>;

    return <li className='user'>{UserNameEl}{UserRemoveBtnEl}</li>
};

export const UserBlock = ({user, removeUser}) => {
    let UserNameEl = <UserName firstName={user.first_name} lastName={user.last_name}/>;
    let UserRemoveBtnEl = <UserRemoveBtn removeUser={removeUser}
                                         userId={user.id}/>;

    return (
        <div className='user'>
            <div>
                <img alt='avatar' src={user.avatar}/>
            </div>
            <div>
                {UserNameEl}
                <div>{user.email}</div>
            </div>
            {UserRemoveBtnEl}
        </div>
    )
};

const UserName = ({firstName, lastName}) => {
    return <b>
        <span>{firstName}</span>
        <span>{lastName}</span>
    </b>
};

const UserRemoveBtn = ({removeUser, userId}) => {
    return <button className='user__buttonRemove' onClick={() => {
        removeUser(userId)
    }}>Remove
    </button>
};