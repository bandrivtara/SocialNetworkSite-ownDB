import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY':'ec0e312a-1771-46e0-8aa8-a5d71744dc0b'
    }
})

export const usersAPI = {
    getUsers(pageSize, pageNumber) {
        return instance.get(`users?=${pageNumber}&count=${pageSize}`).then(response => {
                    return response.data;
                })
    },

    getUsersUnfollow(id) {
        return instance.delete(`follow/${id}`).then(response => {
            return response.data;
        })
    },

    getUsersFollow(id) {
        return instance.post(`follow/${id}`, {}).then(response => {
            return response.data;
        })
    },
    getUserData() {
        return instance.get(`auth/me`).then(response => {
            return response.data;
        });
    },
    getUserProfile(userId) {
        return instance.get(`profile/${userId ? userId : 2}`).then(response => {
            return response.data;
        });
    }
}
