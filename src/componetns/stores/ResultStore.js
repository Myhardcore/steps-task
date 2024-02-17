import {defineStore} from "pinia";

export const useResultStore = defineStore('resultStore', {
    state: () => ({
        clinic: {},
        doctor: null,
        userData: {},
    }),

    getters: {
        getClinic(state) {
            return state.clinic.title;
        },
        getClinicId(state) {
            return state.clinic.id;
        },
        getDoctor(state) {
            return state.doctor;
        },
        getUserData(state) {
            return state.userData;
        }

    },

    actions: {
        writeClinic(id, title) {
            this.clinic = {
                id: id,
                title: title
            };
        },
        writeDoctor(doctor) {
            this.doctor = doctor;
        },
        writeUserData(userInput) {
            this.userData = userInput
        }
    }
})