import axiosClient from "./apiClient.js";

export const getToken =  (data) => {
    return axiosClient().post('token',JSON.stringify(data));
    // getToken({"email":"aa@gmail.com","password":"aa"});
}

export const getUser =(data) => {
    return axiosClient().get('user').then(response => response.data);
}


export const getUserProfile = () => {
    return axiosClient().get('user/profile').then(response => response.data);
}

export const updateUserProfile = (data) => {
    return axiosClient().patch('user/profile',data).then(response => response.data);
}

export const validateEmail = (data) => {
    return axiosClient().post('user/validate',data).then(response => response.data)
}


export const createUser = (data) => {
    return axiosClient().post('user/create/',JSON.stringify(data)).then(response => response.data);
}
