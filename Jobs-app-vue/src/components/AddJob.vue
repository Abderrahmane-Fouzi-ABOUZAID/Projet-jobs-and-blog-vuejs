<template>
    <div class="addJob-container">
        <h2>Ajouter job</h2>
        <label>Titre : <input type="text" v-model="jobTitre"></label>        
        <label>Description : <input type="text" v-model="jobDescription"></label>        
        <label>Salaire : <input type="text" v-model.number="jobSalaire"></label>        
        <label>Date de création : <input type="text" v-model="jobDateCreation"></label>        
        <label>Année d'expérience : <input type="text" v-model.number="jobXp"></label>        
        <button @click="handleAddJob">Add job</button>
    </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue';
import { useToast } from 'vue-toastification';

const toast = useToast();

const emit = defineEmits(["add-job"]);

const jobTitre = ref("");
const jobDescription = ref("");
const jobSalaire = ref(null);
const jobDateCreation = ref("");
const jobXp = ref(null);

const handleAddJob = () => {
    if(!checkNonEmptyFields()){
        toast.error("All the field must be field");
        return;
    }
    const newJob = {
        titre: jobTitre.value,
        description: jobDescription.value,
        salaire: jobSalaire.value,
        date_creation: jobDateCreation.value,
        annee_experience: jobXp.value
    }
    emit("add-job", newJob);
    toast.success("Job ajouté !")
    jobTitre.value = "";
    jobDescription.value = "";
    jobSalaire.value = null;
    jobDateCreation.value = "";
    jobXp.value = null;
}

const checkNonEmptyFields = () => {
    return jobTitre.value && jobDescription.value && jobSalaire.value && jobDateCreation.value && jobXp.value;
}

</script>

<style scoped>
.addJob-container{
    display: flex;
    flex-direction: column;
    align-items: center;
}  
label{
    margin: 12px;
}
input{
    padding: 6px;
}
button{
    margin-top: 20px;
    padding: 8px;
    padding-left: 22px;
    padding-right: 22px;
    font-size: large;
    background-color: lightseagreen;
    border: none;
    border-radius: 6px;
}
</style>
