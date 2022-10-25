import axiosClient from "./apiClient.js";

// accounts urls
export const getToken =  (data) => {
    return axiosClient().post('token',JSON.stringify(data));
    // getToken({"email":"aa@gmail.com","password":"aa"});
}

export const validateEmail = (data) => {
    return axiosClient().post('user/validate',data).then(response => response.data)
}

export const getUser =(data) => {
    return axiosClient().get('user').then(response => response.data);
    //   getUser();
}

export const updateUser = (data) => {
    return axiosClient().patch('user/',JSON.stringify(data)).then(response => console.log(response));
}


// create a user 
export const createUser = (data) => {
    return axiosClient().post('user/create/',JSON.stringify(data)).then(response => response.data);
}