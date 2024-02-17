import {defineStore} from "pinia";

export const useClinicStore = defineStore('clinicsStore', {
    state: () =>({
        clinics:[
            {name:'Клиника 1', id:1, doctors:[{name:'Иванов 1', id:1}, {name:'Петров 1', id:2}]},
            {name:'Клиника 2', id:2, doctors:[{name:'Сидоров 2', id:3}, {name:'Жериков 2', id:4}]},
            {name:'Клиника 3', id:3, doctors:[{name:'Дижарев 3', id:5}, {name:'Периков 3', id:6}, {name:'Варесов 3', id:7}]},
        ],
    })
})