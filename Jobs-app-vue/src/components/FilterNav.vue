<template>
    <div class="filter-container">
        <label>Entrer le titre du job : <input @input="handleLiveSearch" type="text" v-model="jobSearch"></label>
        <label >Salaire : 
            <select @change="handleSalaryChange" v-model="jobSalary">
                <option value="default">Selectionner une tranche (dollars)</option>
                <option v-for="(tranche, index) in trancheSalaire" :value="+ tranche" :key="index">
                   + {{tranche}}
                </option>
            </select>
        </label>

        <label >Année d'expérience : 
            <select @change="handleXpChange" v-model="jobXp">
                <option value="default">Selectionner une tranche (ans)</option>
                <option v-for="(year, index) in xpYears" :value="year" :key="index">
                   + {{year}}
                </option>
            </select>
        </label>
        <br><br><br>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { defineEmits } from 'vue';

const emit = defineEmits(["live-search", "xp-change", "salary-change"]);

const jobSearch = ref("");
const jobSalary = ref("default");
const jobXp = ref("default")

const trancheSalaire = [30000, 50000, 65000, 80000, 100000];
const xpYears = [0, 2, 4, 6, 8, 10];

const handleXpChange = () => {
    emit("xp-change", jobXp.value);
}

const handleLiveSearch = () => {
    emit("live-search", jobSearch.value);
}  

const handleSalaryChange = () => {
    emit("salary-change", jobSalary.value);
}

</script>

<style scoped>
.filter-container{
    display: flex;
    flex-direction: column;
    gap: 25px;
}
select{
    padding: 5px;
    font-size: large;
}
input{
    padding: 5px;
    font-size: large;
}
</style>
