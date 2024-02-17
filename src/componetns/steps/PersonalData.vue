<script>
import {useStepsStore} from "@/componetns/stores/StepsStore.js";
import {useResultStore} from "@/componetns/stores/ResultStore.js";
import {ref} from "vue";

export default {
    name: "PersonalData",

    setup() {
        const stepsStore = useStepsStore();
        const resultStore = useResultStore();

        const name = ref('')
        const phone = ref('')
        const birthDate = ref('')
        const email = ref('')

        const nextStep = () => {
            resultStore.writeUserData({
                name: name.value,
                phone: phone.value,
                birthDate: birthDate.value,
                email: email.value
            });
            stepsStore.nextStep();

            //временно
            console.log('_________________________')
            console.log('Step: ' + stepsStore.getCurrentStep)
            console.log('Clinic:  ' + resultStore.getClinic)
            console.log('Doctor:  ' + resultStore.getDoctor)
            console.log('UserData:  ' + resultStore.getUserData)
        }

        return {stepsStore, resultStore, name, phone, birthDate, email, nextStep};
    }
}
</script>

<template>
    <main>
        <h2>Шаг 3: Ваши данные</h2>

        <form>
            <div><input type="text" placeholder="ФИО" v-model="name"></div>
            <div><input type="text" placeholder="Телефон" v-model="phone"></div>
            <div><input type="text" placeholder="Дата рождения" v-model="birthDate"></div>
            <div><input type="text" placeholder="email" v-model="email"></div>
            <button @click.prevent="nextStep(name)">Отправить</button>
        </form>
    </main>
</template>

<style scoped>

</style>