<script>
import {useStepsStore} from "@/stores/StepsStore.js";
import {ref} from "vue";
export default {
    name: "PersonalData",
    setup() {
        const stepsStore = useStepsStore();
        const username = ref('');
        const phone = ref('');
        const birthDate = ref('');
        const email = ref('');
        const switchStep = (name, phone, birthDate, email) => {
            stepsStore.nextStep();
            stepsStore.writeUserData({name: name, phone: phone, birthDate: birthDate, email: email});

            console.log('_______________________________')
            console.log('Шаг:' + stepsStore.currentStep);
            console.log('Клиника:' + stepsStore.selectedClinic.name);
            console.log(stepsStore.selectedDoctor);
            console.log(stepsStore.userData);
        }

        return {stepsStore, username, phone,birthDate,email, switchStep}
    }
}
</script>

<template>
<main>
    <!-- Рисуем формы с инпутами для ввода данных -->
    <h2>Шаг 3: Введите персональные данные</h2>
    <form>
        <input type="text" placeholder="ФИО" v-model="username">
        <input type="text" placeholder="Телефон" v-model="phone">
        <input type="text" placeholder="Дата рождения" v-model="birthDate">
        <input type="text" placeholder="E-mail" v-model="email">

        <button @click.prevent="switchStep(username, phone, birthDate, email)">Далее</button>
    </form>
</main>
</template>

<style scoped>

</style>