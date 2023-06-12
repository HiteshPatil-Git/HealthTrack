import axios from 'axios';

const USER_API_BASE_URL = "http://localhost:8080/api/users";

class UserService {
    loginUser(user) {
       
        //backend login URL
        return axios.post(USER_API_BASE_URL+'/login', user)
            .then(response => {

                if (response) {
                    localStorage.setItem("user", JSON.stringify(response.data));
                    console.log('In user service =>' + response.data.role);
                }
                return response;
            });
    }

    getUserById(userId) {
        return axios.get(USER_API_BASE_URL + '/' + userId)
    }



}
export default new UserService()