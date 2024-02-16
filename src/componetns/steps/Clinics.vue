<script>
import {useClinicStore} from "@/stores/ClinicStores.js";
import {useStepsStore} from "@/stores/StepsStore.js";

export default {
    name: "Clinics",

    setup() {
        const clinicStore = useClinicStore();
        const stepsStore = useStepsStore()

        // при нажатии на кнопку переключаемся на следующий шаг + передаем выбранную клинику;
        const switchStep = (id, name) => {
            stepsStore.nextStep();
            stepsStore.writeClinic({id: id, name: name});
            console.log('_______________________________')
            console.log('Шаг:' + stepsStore.currentStep);
            console.log('Клиника:' + stepsStore.selectedClinic.name);
        }

        return {clinicStore,stepsStore,switchStep}
    },
}
</script>

<template>
    <main>
        <!-- Рисуем все кнопки с клиниками-->
        <h2>Шаг 1: Выбор клиники</h2>
        <div class="buttons" v-for="clinic in clinicStore.clinics" :key="clinic.id">
            <button @click="switchStep(clinic.id, clinic.name)">{{ clinic.name }}</button>
        </div>
    </main>
</template>

<style scoped>

</style>