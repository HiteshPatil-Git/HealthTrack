import axios from 'axios';

const PRESCRIPTION_API_BASE_URL = "http://localhost:8080/api/prescriptions"
const TIMESLOT_API_BASE_URL = "http://localhost:8080/timeslot/";
class PrescriptionService {

    getEpass() {
        return axios.get(PRESCRIPTION_API_BASE_URL);
    }

    createPrescription(pres)  {
        console.log('in pres service create');
        return axios.post(PRESCRIPTION_API_BASE_URL + '/create', pres )
            .then(response => {

                if (response) {
                    localStorage.setItem("prescription", JSON.stringify(response.data));
                }
                return response;
            });
    }

    createPrescription(pres)  {
        console.log('in pres service update');
        return axios.post(PRESCRIPTION_API_BASE_URL + '/update', pres )
            .then(response => {

                if (response) {
                    localStorage.setItem("prescription", JSON.stringify(response.data));
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

    getPresByAppId(appId) {
        
        return axios.get(PRESCRIPTION_API_BASE_URL+'/appId', {
            params: {
                appId: appId,
            }
        })
            .then(presByAppId => {
                

                if (presByAppId) {
                    localStorage.setItem("presByAppId", JSON.stringify(presByAppId.data));

                }
                return presByAppId;
            });

    }
}
export default new PrescriptionService()