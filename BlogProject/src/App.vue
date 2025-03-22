<template>
    <div class="app-container">
        <NavBar />
        <router-view class="router-view" :blogs="blogs" @add-blog="handleAddBlog"/>
    </div>
</template>

<script setup>
import NavBar from './components/NavBar.vue';
import { ref, provide } from 'vue';
import { useToast } from 'vue-toastification';
import { useRouter } from 'vue-router';

const router = useRouter();
const toast = useToast();

const blogs = ref([]);

const handleAddBlog = (newBlog) => {
    blogs.value.push(newBlog);
    toast.success("Blog added");
    router.push({ name: 'home' });
}

provide('blogs', blogs);
</script>

<style scoped>
.app-container {
    background-color: #f5f5f5;
    font-family: 'Roboto', sans-serif;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}
.router-view {
    flex-grow: 1;
    padding: 20px;
}
</style>
