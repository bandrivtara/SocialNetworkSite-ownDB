import * as axios from 'axios';


const instanceMy = axios.create({
    // baseURL: 'https://my-json-server.typicode.com/bandrivtara/Social-Network-db',
    baseURL: 'http://localhost:3000/',
}) 

export const photosAPI = {
    getPhotos(limitOfPhoto) {
        return instanceMy.get(`photos`)
    }
}

export const usersJsonAPI = {
    getUsers(pageSize, pageNumber) {
        return instanceMy.get(`users?_page=${pageNumber}&_limit=${pageSize}`).then(response => {
                    return response.data;
                })
    },
    getUsersUnfollow(id) {
        return instanceMy.patch(`users/${id}`, {"followed": false}).then(response => {
            return response.data;
        })
    },
    getUsersFollow(id) {
        return instanceMy.patch(`users/${id}`, {"followed": true}).then(response => {
            return response.data;
        })
    },
    getUserData() {
        return instanceMy.get(`auth/`).then(response => {
            return response.data;
        });
    },
}

export const authAPI = {
   
    login(change) {
        return instanceMy.patch(`auth/`, {"isAuth": change}).then(response => {
            return response.data;
        })
    },
    logout(change) {
        return instanceMy.patch(`auth/`, {"isAuth": change}).then(response => {
            return response.data;
        })
    },
}