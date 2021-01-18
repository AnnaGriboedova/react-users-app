import React from 'react'

let User = ({user, removeUser}) => {
    return (
        <div className='user'>
            <div>
                <img alt='avatar' src={user['avatar']}/>
            </div>
            <div>
                <div>
                    <b>
                        <span>{user['first_name']}</span>
                        <span>{user['last_name']}</span>
                    </b>
                </div>
                <div>{user['email']}</div>
            </div>
            <button onClick={() => {
                removeUser(user.id)
            }}>Remove
            </button>
        </div>
    )
};

export default User;