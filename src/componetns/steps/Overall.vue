<script>
import {useResultStore} from "@/componetns/stores/ResultStore.js";
export default {
    name: "Overall",

    setup() {
        const resultStore = useResultStore();



        return {resultStore}
    }
}
</script>

<template>
    <main>
        <h2>Шаг 4: Проверка данных перед отправкой</h2>

        <div>
            <p>ФИО: {{ resultStore.getUserData.name }}</p>
            <p>Телефон: {{ resultStore.getUserData.phone }}</p>
            <p>Дата рождения: {{ resultStore.getUserData.birthDate }}</p>
            <p>email: {{ resultStore.getUserData.email }}</p>
            <p>Клиника: {{ resultStore.getClinic }}</p>
            <p>Врач: {{ resultStore.getDoctor }}</p>
        </div>

    </main>
</template>

<style scoped>

</style>