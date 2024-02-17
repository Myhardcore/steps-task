import {defineStore} from "pinia";

export const useStepsStore = defineStore('stepsStore', {
    state: () => ({
        currentStep: 1,
    }),

    getters: {
        getCurrentStep(state) {
            return state.currentStep;
        }
    },

    actions: {
        nextStep() {
            this.currentStep += 1;
        }
    }
})