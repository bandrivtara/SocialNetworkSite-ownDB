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
        console.warn('Obsolute method. Please use ProfilAPI method')
        return profileAPI.getUserProfile(userId);
    }
}
export const profileAPI = {
    getUserProfile(userId) {
        return instance.get(`profile/${userId ? userId : 6677}`).then(response => {
            return response.data;
        });
    },
    getStatusProfile(userId) {
        return instance.get(`profile/status/${userId ? userId : 6677}`).then(response => {
            return response.data;
        });
    },
    
    updateStatusProfile(status) {
        return instance.put(`profile/status`, { status: status }).then(response => {
            return response.data;
        });
    },
    savePhoto(photoFile) {
        let formData = new FormData();
        formData.append('image', photoFile)
        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
              }
        }).then(response => {
            return response.data;
        });
    },
    
}

export const authAPI = {
   
    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe});
    },
    logout() {
        return instance.delete(`auth/login`);
    },
}
