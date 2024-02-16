import {defineStore} from "pinia";

export const useStepsStore = defineStore('stepsStore', {
    state: () => ({
        currentStep: 1,
        selectedClinic: null,
        selectedDoctor: null,
        userData: [],

    }),
    actions: {
        nextStep() {
            this.currentStep += 1;
        },
        writeClinic(clinic) {
            this.selectedClinic = clinic;
        },
        writeDoctor(doctor) {
            this.selectedDoctor = doctor;
        },
        writeUserData(userInput) {
            this.userData.push(userInput);
        },
    },
    getters: {
        getCurrentStep(state) {
            return state.currentStep;
        },
        getSelectedClinic(state) {
            return state.selectedClinic.id - 1;
        }
    }
})