import axios from 'axios';

const PRESCRIPTION_API_BASE_URL = "http://localhost:8080/api/prescriptions"
const TIMESLOT_API_BASE_URL = "http://localhost:8080/timeslot/";
class PrescriptionService {

    getEpass() {
        return axios.get(PRESCRIPTION_API_BASE_URL);
    }

    createPrescription(pres)  {
        console.log('in pres service create');
        return axios.post(PRESCRIPTION_API_BASE_URL + '/create',pres,
            {
                params: {
                    excercisePlan: pres.excercisePlan,
                    dietPlan: pres.dietPlan,
                    morning: pres.morning,
                    noon: pres.noon,
                    evening: pres.evening,
                    night: pres.night,
                    
                    doctorName: pres.doctorName,
                    patientName: pres.patientName,
                    preDate: pres.preDate,
                    nextVisitDate: pres.nextVisitDate,
                    appId: pres.appId,
                }
            })
            .then(response => {

                if (response) {
                    localStorage.setItem("timeslot", JSON.stringify(response.data));
                }
                return response;
            });
    }

    deleteEpass(passId) {
        return axios.delete(PRESCRIPTION_API_BASE_URL + passId);

    }
    getPassByPassId(passv) {
        console.log('Epass service method called');
        return axios.post(PRESCRIPTION_API_BASE_URL+'/verification',passv).then(epassByPassId => {
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
        return axios.get(PRESCRIPTION_API_BASE_URL+'/userId', {
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
export default new PrescriptionService()