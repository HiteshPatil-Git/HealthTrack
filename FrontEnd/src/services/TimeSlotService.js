import axios from 'axios';

const TIMESLOT_API_BASE_URL = "http://localhost:8080/api/timeslots"
class TimeSlotService {

    getAllTimeSlot() {
        return axios.get(TIMESLOT_API_BASE_URL).then(response => {

            if (response) {
                localStorage.setItem("allslot", JSON.stringify(response.data));
            }
            return response;
        });
    }

    createTimeSlot(timeslot, doctorName) {
        console.log('In timeslotService =>' + doctorName);
        return axios.post(TIMESLOT_API_BASE_URL + '/create', timeslot,
            {
                params: {
                    slot1: timeslot.slot1,
                    maxPersonPerSlot1: timeslot.maxPersonPerSlot1,
                    slot2: timeslot.slot2,
                    maxPersonPerSlot2: timeslot.maxPersonPerSlot2,
                    slot3: timeslot.slot3,
                    maxPersonPerSlot3: timeslot.maxPersonPerSlot3,
                    slot4: timeslot.slot4,
                    maxPersonPerSlot4: timeslot.maxPersonPerSlot4,
                    doctorName: doctorName,
                }
            })
            .then(response => {

                if (response) {
                    localStorage.setItem("timeslot", JSON.stringify(response.data));
                }
                return response;
            });
    }

    deleteTimeSlot(slotId) {
        return axios.delete(TIMESLOT_API_BASE_URL + '/' + slotId);

    }
    getTimeSlotById(slotId) {
        return axios.get(TIMESLOT_API_BASE_URL + '/' + slotId)

    }


    getSlotByDoctorName(doctorName) {
        console.log('in timeslot service');
        return axios.get(TIMESLOT_API_BASE_URL + '/doctor/' + doctorName).then(response => {

            if (response) {
                localStorage.setItem("slotbydoctor", JSON.stringify(response.data));
            }
            return response;
        });


    }
}
export default new TimeSlotService()
