import http from './http-common';

const getUsers = () => {

    return http.get('/users');
}

const getUser = (user) => {

    return http.get(`/users/${user}`);
}

const UserService = {
    getUser,
    getUsers
};

export default UserService;
