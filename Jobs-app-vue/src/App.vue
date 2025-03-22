<template>
    <div class="app-container">
        <Home @xp-change="handleXpChange" @live-search="handleLiveSearch" :jobs="filtredJobs" @delete-job="handleDeletedJob" @salary-change="handleSalaryChange"/>
        <div class="job-change">
            <AddJob @add-job="handleAddedJob"/> 
            <EditJob :jobs="jobs" @modified-job="handleModifiedJob"/>
        </div>
    </div>
</template>

<script setup>
import Home from './components/Home.vue';
import AddJob from './components/AddJob.vue';
import EditJob from './components/EditJob.vue';
import { ref, computed } from 'vue';

const jobs = ref([
    {
      "titre": "Développeur Web",
      "description": "Conçoit et développe des sites et applications web.",
      "salaire": 35000,
      "date_creation": "2020-05-15",
      "annee_experience": 2
    },
    {
      "titre": "Ingénieur en Intelligence Artificielle",
      "description": "Développe des modèles d'IA pour résoudre des problèmes complexes.",
      "salaire": 60000,
      "date_creation": "2018-09-10",
      "annee_experience": 5
    },
    {
      "titre": "Analyste Cybersécurité",
      "description": "Identifie et corrige les failles de sécurité informatique.",
      "salaire": 55000,
      "date_creation": "2019-03-20",
      "annee_experience": 4
    },
    {
      "titre": "Architecte Logiciel",
      "description": "Conçoit l'architecture des systèmes logiciels complexes.",
      "salaire": 75000,
      "date_creation": "2016-07-30",
      "annee_experience": 7
    },
    {
      "titre": "Data Scientist",
      "description": "Analyse des données pour en extraire des insights exploitables.",
      "salaire": 65000,
      "date_creation": "2017-11-05",
      "annee_experience": 5
    },
    {
      "titre": "Chef de Projet IT",
      "description": "Gère et coordonne des projets informatiques.",
      "salaire": 70000,
      "date_creation": "2015-06-12",
      "annee_experience": 6
    },
    {
      "titre": "Administrateur Réseau",
      "description": "Assure la maintenance et la sécurité des réseaux informatiques.",
      "salaire": 48000,
      "date_creation": "2019-08-25",
      "annee_experience": 3
    },
    {
      "titre": "Développeur Mobile",
      "description": "Développe des applications mobiles sur Android et iOS.",
      "salaire": 42000,
      "date_creation": "2021-02-10",
      "annee_experience": 2
    },
    {
      "titre": "Ingénieur DevOps",
      "description": "Automatise et optimise les processus de développement et de déploiement.",
      "salaire": 68000,
      "date_creation": "2017-04-15",
      "annee_experience": 5
    },
    {
      "titre": "Consultant ERP",
      "description": "Implémente et personnalise les solutions ERP en entreprise.",
      "salaire": 62000,
      "date_creation": "2016-10-01",
      "annee_experience": 6
    },
    {
      "titre": "Ingénieur Cloud",
      "description": "Déploie et administre des infrastructures cloud.",
      "salaire": 70000,
      "date_creation": "2018-05-20",
      "annee_experience": 5
    },
    {
      "titre": "Ingénieur Systèmes",
      "description": "Gère les infrastructures systèmes et assure leur bon fonctionnement.",
      "salaire": 58000,
      "date_creation": "2017-09-18",
      "annee_experience": 4
    },
    {
      "titre": "UX/UI Designer",
      "description": "Crée des interfaces utilisateur ergonomiques et attractives.",
      "salaire": 45000,
      "date_creation": "2020-03-22",
      "annee_experience": 3
    },
    {
      "titre": "Spécialiste SEO",
      "description": "Optimise les sites web pour améliorer leur référencement.",
      "salaire": 40000,
      "date_creation": "2019-06-10",
      "annee_experience": 2
    },
    {
      "titre": "Expert Blockchain",
      "description": "Développe des applications basées sur la blockchain.",
      "salaire": 85000,
      "date_creation": "2017-12-05",
      "annee_experience": 6
    },
    {
      "titre": "Ingénieur Robotique",
      "description": "Conçoit et programme des robots pour différentes applications.",
      "salaire": 72000,
      "date_creation": "2016-04-15",
      "annee_experience": 7
    }
  ]);

const handleAddedJob = (newJob) => {
    jobs.value.push(newJob);
}

const liveSearchText = ref("");
const xpValue = ref(null);
const salaryValue = ref(null)

const handleLiveSearch = (text) => {
    liveSearchText.value = text;
}

const handleXpChange = (xp) => {
    xpValue.value = xp;
}

const handleSalaryChange = (salary) => {
    salaryValue.value = salary;
}

const filtredJobs = computed(() => {
    return jobs.value.filter(job => {
        const matchesSearch = !liveSearchText.value || job.titre.toLowerCase().includes(liveSearchText.value.toLowerCase());
        const matchesSalary = !salaryValue.value || salaryValue.value === "default" || job.salaire >= salaryValue.value;
        const matchesXp = !xpValue.value || xpValue.value === "default" || job.annee_experience >= xpValue.value;
        return matchesSearch && matchesXp && matchesSalary;
    })
})

const handleModifiedJob = (modifiedJob) => {
    const oldJob = jobs.value.find(job => job.titre === modifiedJob.titre);  
    oldJob.description = modifiedJob.description;
    oldJob.salaire = modifiedJob.salaire;
    oldJob.date_creation = modifiedJob.date_creation;
    oldJob.annee_experience = modifiedJob.annee_experience;
}

const handleDeletedJob = (index) => {
    jobs.value.splice(index, 1);
    toast.success("Job retiré !")
}

</script>

<style scoped>
.app-container{
    display: flex;
    flex-direction: row;
    width: 100%;
    background-color: lightblue;
    font-size: large;
}
.job-change{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 30%;
}
</style>
