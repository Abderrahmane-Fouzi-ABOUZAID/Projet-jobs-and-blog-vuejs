<template>
    <div class="tag-container">
        <div v-for="tag in allTags" :key="tag">
            {{ tag }}
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
    blogs: Array
});

const allTags = computed(() => {
    return [...new Set(props.blogs.flatMap(blog => blog.tags))];
});
</script>

<style scoped>
.tag-container {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
    padding: 10px;
}

.tag-container div {
    background: #007bff;
    color: white;
    padding: 5px 10px;
    border-radius: 5px;
    font-weight: bold;
}
</style>
