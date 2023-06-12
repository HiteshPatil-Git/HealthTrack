import axios from 'axios';

const PATIENT_API_BASE_URL = "http://localhost:8080/api/patients";

class PatientService {

    createPatient(user) {
        return axios.post(PATIENT_API_BASE_URL+'/create', user)
    }

    updateUser(user, userId) {
        return axios.put(PATIENT_API_BASE_URL + '/' + userId, user)
            .then(updatedresponse => {

                if (updatedresponse) {
                    localStorage.setItem("user", JSON.stringify(updatedresponse.data));
                    console.log('In Doctor service =>' + updatedresponse.data.role);
                }
                return updatedresponse;
            });
    }

}
export default new PatientService()