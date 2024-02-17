<script>
import axios from "axios";
import {useResultStore} from "@/componetns/stores/ResultStore.js";
import {useStepsStore} from "@/componetns/stores/StepsStore.js";
import {toNumber} from "@vue/shared";

export default {
    name: "Doctors",

    data(){
        return{
            doctors: null
        }
    },

    setup() {
        const resultStore = useResultStore();
        const stepsStore = useStepsStore();
        const clinicId = resultStore.getClinicId;
        const nextStep = (doctor) => {
            resultStore.writeDoctor(doctor);
            stepsStore.nextStep();

            //временно
            console.log('_________________________')
            console.log('Step: ' + stepsStore.getCurrentStep)
            console.log('Clinic:  ' + resultStore.getClinic)
            console.log('Doctor:  ' + resultStore.getDoctor)
        }





        return {resultStore,clinicId,nextStep};
    },

    methods: {
        toNumber,
        getUsers() {
            axios.get("https://dev-app.rnova.org/api/public/getUsers", {
                params: {
                    api_key: '8471e36fd1d7d22996278025475d6593'
                }
            }).then((response) => {
                this.doctors = response.data.data
            })
        },

    },
    mounted() {
        this.getUsers()
    }
}
</script>

<template>
    <main>
        <!-- Рисуем все кнопки с врачами-->
        <h2>Шаг 2: Выбор врача</h2>

        <div class="buttons">
            <div v-for="doctor in this.doctors">
                <div v-for="clinic in doctor.clinic">
                    <button v-if="toNumber(clinic) === clinicId" @click="nextStep(doctor.name)">{{doctor.name}}</button>
                </div>
            </div>
        </div>

    </main>
</template>

<style scoped>

</style>