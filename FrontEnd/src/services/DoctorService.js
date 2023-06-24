import axios from 'axios';

const DOCTOR_API_BASE_URL = "http://localhost:8080/api/doctors";

class DoctorService {

    createDoctor(user) {
        
        return axios.post(DOCTOR_API_BASE_URL+'/create', user)
    }

    updateUser(user, userId) {
        return axios.put(DOCTOR_API_BASE_URL + '/' + userId, user)
            .then(updatedresponse => {

                if (updatedresponse) {
                    localStorage.setItem("user", JSON.stringify(updatedresponse.data));
                    console.log('In Doctor service =>' + updatedresponse.data.role);
                }
                return updatedresponse;
            });
    }

    getAllDoctor() {
        return axios.get(DOCTOR_API_BASE_URL+'/').then(response => {
            console.log('In Doctor service  all doctor call=>');
            if (response) {
                console.log('response received');
                localStorage.setItem("alldoctor", JSON.stringify(response.data));
            }
        return response;
        });
    }

}
export default new DoctorService()