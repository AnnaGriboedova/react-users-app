import React, {useState, useEffect} from 'react'
import {connect} from "react-redux";
import {removeUser, requestUsers, addUser} from "../../redux/usersReducer";
import Users from "./Users";


const UsersContainer = (props) => {
    let [isFetching, setIsFetching] = useState(true);
    useEffect(() => {
        if (!props.users.length) {
            props.requestUsers().then(() => {
                setIsFetching(false);
            });
        }
    }, []);

    if (isFetching && !props.users.length) {
        return "Загрузка"
    }
    const isEmptyRemoveUsers = !props.removeUsers.length;
    return <div>{<Users users={props.users} removeUser={props.removeUser} addUser={props.addUser}
                        isEmptyRemoveUsers={isEmptyRemoveUsers}/>}</div>
};

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        removeUsers: state.usersPage.removeUsers,
    }
};

export default connect(mapStateToProps, {requestUsers, removeUser, addUser})(UsersContainer);