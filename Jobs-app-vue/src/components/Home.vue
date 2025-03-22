<template>
    <div class="home">
        <h2>Job App</h2>        
        <h4>Cherchez les jobs que vous voulez</h4>
        <FilterNav  @salary-change="handleSalaryChange" @xp-change="handleXpChange" @live-search="handleLiveSearch"/>
        <JobDetail @delete-job="handleDeletedJob" :jobs="props.jobs"/>
    </div>
</template>

<script setup>


import FilterNav from './FilterNav.vue';
import JobDetail from './JobDetail.vue';
import { defineProps } from 'vue';

const emit = defineEmits(["live-search", "xp.change", "salary-change", "delete-job"]);

const props = defineProps({
    jobs: Array
});

console.log(props.jobs)

const handleLiveSearch = (liveText) => {
    emit("live-search", liveText);
}

const handleXpChange = (xp) => {
    emit("xp-change", xp);
}

const handleSalaryChange = (salary) => {
    emit("salary-change", salary);
}

const handleDeletedJob = (index) => {
    emit("delete-job", index);
}

</script>

<style scoped>
.home{
    background-color: lightblue;
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>
