<template>
    <div class="JobList">
       <p v-if="jobs.length === 0">
            Aucun job à afficher
        </p> 
        <div class="job-container" v-for="(job, index) in props.jobs" :key="index" >
            Title : {{job.titre}} <br><br>
            Salary : {{job.salaire}} <br><br>
            <button @click="showMoreDetails(index)">Show more details</button><button @click="deleteJob(index)" class="delete-button">Delete job</button>
            <div v-if="showDetailIndex === index" class="details" >
                <div class="modal">
                    Title : {{job.titre}} <br><br>
                    Description : {{job.description}} <br><br>
                    Salaire : {{job.salaire}} <br><br>
                    Date de création : {{job.date_creation}} <br><br>
                    Année d'expérience : {{job.annee_experience}} <br><br>
                    <button @click="closeDetails">Fermer details</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps, ref } from 'vue'; 

const emit = defineEmits(["delete-job"]);

const props = defineProps({
    jobs: Array
});

const showDetailIndex = ref(null);

const showMoreDetails = (index) => {
    showDetailIndex.value = index;
} ;

const closeDetails = () => {
    showDetailIndex.value = null;
}

const deleteJob = (index) => {
    emit("delete-job", index);
}


</script>


<style scoped>
.delete-button{
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
    background-color: red;
    border: none;
    border-radius: 6px;
    font-size: large;
    cursor: pointer;
    margin-left: 15px;
}
.details{
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
}    
.modal{
    background: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
}
.job-container{
    margin: 30px;
    padding: 30px;
    background-color: lightgreen;
    border: none;
    border-radius: 6px;
}
button{
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
    background-color: lightseagreen;
    border: none;
    border-radius: 6px;
    font-size: large;
    cursor: pointer;
}
</style>
