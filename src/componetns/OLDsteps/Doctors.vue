<script>
import {useClinicStore} from "@/OLDstores/ClinicStores.js";
import {useStepsStore} from "@/OLDstores/StepsStoreOld.js";

export default {
    name: "Doctors",

    setup() {
        const clinicStore = useClinicStore();
        const stepsStore = useStepsStore();
        const selectedClinic = stepsStore.getSelectedClinic;
        const switchStep = (name) => {
            stepsStore.nextStep();
            stepsStore.writeDoctor(name);
            console.log('_______________________________')
            console.log('Шаг:' + stepsStore.currentStep);
            console.log('Клиника:' + stepsStore.selectedClinic.name);
            console.log(stepsStore.selectedDoctor)
        }

        return {clinicStore, stepsStore, selectedClinic, switchStep};

    }
}
</script>

<template>
    <main>
        <!-- Рисуем все кнопки с докторами-->
        <h2>Шаг 2: Выбор доктора</h2>
        <div v-for="doctor in clinicStore.clinics[selectedClinic].doctors">
            <button @click="switchStep(doctor.name)">{{ doctor.name }}</button>
        </div>
    </main>
</template>

<style scoped>

</style>