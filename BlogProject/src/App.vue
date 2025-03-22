<template>
    <div class="app-container">
        <NavBar />
        <router-view class="router-view" @update-current-blog="handleCurrentTag" :blogs="currentBlogs" :allblogs="blogs" @add-blog="handleAddBlog"/>
    </div>
</template>

<script setup>
import NavBar from './components/NavBar.vue';
import { ref, provide } from 'vue';
import { useToast } from 'vue-toastification';
import { useRouter } from 'vue-router';
import { computed } from 'vue';

const router = useRouter();

const toast = useToast();

const blogs = ref([]);

const currentSelectedTag = ref("");

console.log(currentSelectedTag.value)

const handleAddBlog = (newBlog) => {
    blogs.value.push(newBlog);
    toast.success("Blog added");
    router.push({ name: 'home' });
}

const handleCurrentTag = (tag) => {
    currentSelectedTag.value = tag;
    console.log(currentSelectedTag.value);
}

const currentBlogs = computed(() => {
    if (currentSelectedTag.value === "") return blogs.value;
    return blogs.value.filter(blog => blog.tags.includes(currentSelectedTag.value));
})
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
