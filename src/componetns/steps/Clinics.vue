<script>
import axios from "axios";
import {useStepsStore} from "@/componetns/stores/StepsStore.js";
import {useResultStore} from "@/componetns/stores/ResultStore.js";

export default {
    name: "Clinics",
    data() {
        return {
            clinics: null
        }
    },
    setup() {
        const stepsStore = useStepsStore();
        const resultStore = useResultStore();

        const nextStep = (clinicId, title) => {
            stepsStore.nextStep();
            resultStore.writeClinic(clinicId, title);

            //временно
            console.log('_________________________')
            console.log('Step: ' + stepsStore.getCurrentStep)
            console.log('Clinic:  ' + resultStore.getClinic)
        }

        return {stepsStore, resultStore, nextStep};
    },

    methods: {
        getClinics() {
            axios.get("https://dev-app.rnova.org/api/public/getClinics", {
                params: {api_key: '8471e36fd1d7d22996278025475d6593'},
            }).then((response) => {
                this.clinics = response.data.data
            });
        }

    },
    mounted() {
        this.getClinics()
    }
}
</script>

<template>
    <main>
        <!-- Рисуем все кнопки с клиниками-->
        <h2>Шаг 1: Выбор клиники</h2>

        <div class="buttons">
            <div v-for="clinic in this.clinics">
                <button @click="nextStep(clinic.id, clinic.title)">{{ clinic.title }}</button>
            </div>

        </div>

    </main>
</template>

<style scoped>

</style>