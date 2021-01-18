import {usersAPI} from "../api/api";

const SET_USERS = 'SET_USERS';
const REMOVE_USERS = 'REMOVE_USERS';
const ADD_USER = 'ADD_USER';

let initialState = {
    users: [],
    removeUsers: []
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {...state, users: action.users};
        case REMOVE_USERS:
            let removeUser = [];
            let users = state.users.filter((user) => {
                if (user.id !== action.userId) {
                    return true;
                } else {
                    removeUser = user;
                    return false
                }
            });
            return {
                ...state, users: users, removeUsers: [...state.removeUsers, removeUser]
            };
        case ADD_USER:
            let user = state.removeUsers[0];
            return {
                ...state, users: [...state.users, user], removeUsers: state.removeUsers.filter((removeUser) => {
                    return removeUser.id !== user.id;
                })
            };

    }
    return state
};


export const setUsers = (users) => ({
    type: SET_USERS,
    users
});

export const removeUser = (userId) => ({
    type: REMOVE_USERS,
    userId
});

export const addUser = () => ({
    type: ADD_USER
});

export const requestUsers = () =>
    async (dispatch) => {
        let data = await usersAPI.getUsers();

        dispatch(setUsers(data.data));

        return Promise.resolve();
    };


export default usersReducer;