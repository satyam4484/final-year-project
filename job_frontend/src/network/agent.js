import axios from "axios";
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

export const getUserProfile = () => {
    return axiosClient().get('user/profile').then(response => response.data);
}

export const updateUser = (data) => {
    return axiosClient().patch('user/',JSON.stringify(data)).then(response => console.log(response));
}


// create a user 
export const createUser = (data) => {
    return axiosClient().post('user/create/',JSON.stringify(data)).then(response => response.data);
}


// experiences
export const getExperience = () => {
    return axiosClient().get('user/experience').then(response => response.data);
}


// projects
export const getProjects = () => {
    return axiosClient().get('user/project').then(response => response.data);
}

export const addProjects = () => {
    return axiosClient();
}


// websites
export const getWebsites = () => {
    return axiosClient().get('user/website').then(response  => response.data);
}
export const addWebsites = (data) => {
    return axiosClient().post('user/website',data).then(response => response.data);
}
export const deleteWebsites = (id) => {
    return axiosClient().delete(`user/website/${id}`).then(response => response.data)
}

export const updateWebsite = (data,id) => {
    return axiosClient().patch(`user/website/${id}`,data).then(response => response.data);
}