<script>
import {useStepsStore} from "@/OLDstores/StepsStoreOld.js";

export default {
    name: "Overall",

    setup() {
        const stepsStore = useStepsStore();

        return {stepsStore}
    }
}
</script>

<template>
    <main>
        <!-- Выводим все данные-->
        <h2>Шаг 4: Проверка данных перед отправкой</h2>
        <div>
            <p>Клиника : {{ stepsStore.selectedClinic.name }}</p>
            <p>Врач : {{ stepsStore.selectedDoctor }}</p>
            <ul>
                <li v-for="user in stepsStore.userData">
                    <p>Имя: {{ user.name }}</p>
                    <p>Телефон: {{ user.phone }}</p>
                    <p>Дата рождения: {{ user.birthDate }}</p>
                    <p>E-mail: {{ user.email }}</p>
                </li>
            </ul>
        </div>

    </main>
</template>

<style scoped>

</style>