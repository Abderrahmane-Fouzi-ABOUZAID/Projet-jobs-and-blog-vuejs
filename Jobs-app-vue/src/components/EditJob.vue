<template>
    <div class="edit-container">
        <h2>Edit Job</h2>
        <label>Entrer le nom du job : <input type="text" v-model="jobTitle"></label><br><p>Le nom du job doit être écrit exactement comme celui dans la liste. Vaut mieux copier coller le nom du job pour eviter toute erreur</p>
        <button @click="handleModifyJob">Modifier le job</button>
        <div class="modifications-container" v-if="showModificationBoard">
            <div class="modal">
                <label>Titre : <input type="text" v-model="jobTitre"></label>        
                <label>Description : <input type="text" v-model="jobDescription"></label>        
                <label>Salaire : <input type="text" v-model.number="jobSalaire"></label>        
                <label>Date de création : <input type="text" v-model="jobDateCreation"></label>        
                <label>Année d'expérience : <input type="text" v-model.number="jobXp"></label>        
                <button @click="handleModifiedJob">Save modifications</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, defineProps } from 'vue'; 
import { useToast } from 'vue-toastification';

const emit = defineEmits(["modified-job"])

const toast = useToast();

const props = defineProps({
    jobs: Array
});

const jobTitre = ref("");
const jobDescription = ref("");
const jobSalaire = ref(null);
const jobDateCreation = ref("");
const jobXp = ref(null);


const showModificationBoard = ref(false);

const jobTitle = ref("");

const handleModifyJob = () => {
    const job = props.jobs.find(job => job.titre === jobTitle.value);
    if (job) {
        showModificationBoard.value = true; 
        jobTitre.value = job.titre;
        jobDescription.value = job.description;
        jobSalaire.value = job.salaire;
        jobDateCreation.value = job.date_creation
        jobXp.value = job.annee_experience;
    }
    else{
        toast.error("Can not find job");
    }
}; 

const handleModifiedJob = () => {
    const modifiedJob = {
        titre: jobTitre.value,
        description: jobDescription.value,
        salaire: jobSalaire.value,
        date_creation: jobDateCreation.value,
        annee_experience: jobXp.value
    }

    emit("modified-job", modifiedJob);
    toast.success("Job modified successfully")
    showModificationBoard.value = false;
    jobTitle.value = "";

    jobTitre.value = "";
    jobDescription.value = "";
    jobSalaire.value = null;
    jobDateCreation.value = "";
    jobXp.value = null;

}

</script>

<style scoped>
.edit-container{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.modifications-container{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(10px);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
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
label{
    margin: 12px;

}
input{
    padding: 6px;
    font-size: large;
}
.modal{
    display: flex;
    flex-direction: column;
    background: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
}
</style>
