import * as axios from "axios";

const axiosInstance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '17258c28-6624-4307-888a-943249367465'
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 5) {
        return axiosInstance
            .get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    followUser(userId) {
        return axiosInstance
            .post(`follow/${userId}`)
            .then(response => response.data)
    },
    unfollowUser(userId) {
        return axiosInstance
            .delete(`follow/${userId}`)
            .then(response => response.data)
    },
    getProfile(userId) {
        console.warn('You are using obsolete method. Use profileAPI object');
        return profileAPI.getProfile(userId);
    }
}

export const profileAPI = {
    getProfile(userId) {
        return axiosInstance
            .get(`profile/${userId}`)
            .then(response => response.data)
    },
    getStatus(userId) {
        return axiosInstance
            .get(`profile/status/${userId}`)
            .then(response => response.data)
    },
    updateStatus(status) {
        return axiosInstance
            .put(`profile/status`, {status: status})
            .then(response => response.data)
    },
    savePhoto(photoFile) {
        const formData = new FormData();
        formData.append('image', photoFile);

        return axiosInstance
            .put(`/profile/photo`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            .then(response => response.data)
    },
    saveProfile(profile) {
        return axiosInstance
            .put(`profile`, profile)
            .then(response => response.data)
    },
}

export const authAPI = {
    authMe() {
        return axiosInstance
            .get(`auth/me`)
            .then(response => response.data)
    },
    login(email, password, rememberMe = false, captcha=null) {
        return axiosInstance
            .post('auth/login', {email, password, rememberMe, captcha})
            .then(response => response.data)
    },
    logout() {
        return axiosInstance
            .delete('auth/login')
            .then(response => response.data)
    }
}

export const securityAPI = {
    getCaptchaUrl() {
        return axiosInstance
            .get(`security/get-captcha-url`)
            .then(response => response.data)
    },
}
