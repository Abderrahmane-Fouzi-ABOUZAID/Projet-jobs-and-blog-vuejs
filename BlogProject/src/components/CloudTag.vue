<template>
    <div class="tag-container">
        <div 
            @click="updateBlogs(tag)" 
            v-for="tag in allTags" 
            :key="tag" 
            class="tag"
        >
            {{ tag }}
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';

const emit = defineEmits(["update-current-blog"]);

const props = defineProps({
    blogs: Array
});

const updateBlogs = (tag) => {
    emit("update-current-blog", tag);
};

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

.tag {
    background: #007bff;
    color: white;
    padding: 5px 10px;
    border-radius: 5px;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.tag:hover {
    background-color: #0056b3;
}
</style>
