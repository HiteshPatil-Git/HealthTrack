import axios from 'axios';

const APPOINTMENT_API_BASE_URL = "http://localhost:8080/api/appointments"
const TIMESLOT_API_BASE_URL = "http://localhost:8080/timeslot/";
class EpassService {

    getEpass() {
        return axios.get(APPOINTMENT_API_BASE_URL);
    }

    createAppointment(pass, slotId) {
        return axios.post(APPOINTMENT_API_BASE_URL + '/create', pass,
            {
                params: {
                    slotId: slotId,
                }
            })
            .then(response => {

                if (response) {
                    localStorage.setItem("bookedappointment", JSON.stringify(response.data));
                }
                return response;
            });
    }

    deleteEpass(passId) {
        return axios.delete(APPOINTMENT_API_BASE_URL + passId);

    }
    getPassByPassId(passv) {
        console.log('Epass service method called');
        return axios.post(APPOINTMENT_API_BASE_URL+'/verification',passv).then(epassByPassId => {
            console.log('response received');

                if (epassByPassId != null) {
                    localStorage.setItem("epassByPassId", JSON.stringify(epassByPassId.data));
                }
                else{
                    console.log('response received is null');
                }
                return epassByPassId;
            });
    }

    getPassByUserId(userId) {
        return axios.get(APPOINTMENT_API_BASE_URL+'/userId', {
            params: {
                userId: userId,
            }
        })
            .then(epassByUserId => {

                if (epassByUserId) {
                    localStorage.setItem("epassByUserId", JSON.stringify(epassByUserId.data));
                }
                return epassByUserId;
            });

    }
}
export default new EpassService()