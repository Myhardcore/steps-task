<script>
import Clinics from "@/componetns/steps/Clinics.vue";
import Doctors from "@/componetns/steps/Doctors.vue";
import PersonalData from "@/componetns/steps/PersonalData.vue";
import Overall from "@/componetns/steps/Overall.vue";
import {useStepsStore} from "@/componetns/stores/StepsStore.js";

export default {
    name: "App",

    components: {Doctors, Clinics, PersonalData, Overall},

    setup() {
        const stepsStore = useStepsStore();
        return {stepsStore};

    },
    computed: {
        currentStep() {
            return this.stepsStore.getCurrentStep
        }
    },

}

</script>

<template>
    <Clinics v-if="currentStep === 1"/>
    <Doctors v-if="currentStep === 2"/>
    <PersonalData v-if="currentStep === 3"/>
    <Overall v-if="currentStep === 4"/>
</template>

<style>
body {
    background: #232323;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    font-family: 'Helvetica', 'Arial', sans-serif;
}

main {
    max-width: 600px;
    background: antiquewhite;
    padding: 50px;
    border-radius: 15px;
}

h2 {
    text-align: center;
    margin-bottom: 30px;
    font-weight: bold;
    font-size: 22px;
}

.buttons {
    display: flex;
    flex-direction: column;
}

button {
    font-size: 18px;
}
</style>
