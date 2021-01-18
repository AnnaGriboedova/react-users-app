import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://reqres.in/api/',
    headers: {
        'Content-Type': 'application/json'
    }
});


export const usersAPI = {
    getUsers() {
        return instance.get('users?per_page=12').then(response => {
            return response.data
        })
    }
};

