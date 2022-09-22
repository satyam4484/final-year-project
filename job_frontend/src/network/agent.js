import axiosClient from "./apiClient.js";


// accounts urls
export const getToken =(data) => {
    return axiosClient().post('token/',JSON.stringify(data)).then(response => console.log(response));
    // getToken({"email":"aa@gmail.com","password":"aa"});
}

export const getUser =(data) => {
    return axiosClient().get('user/').then(response => console.log(response));
    //   getUser();
}
