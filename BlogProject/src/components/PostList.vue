<template>
    <div class="blog-list-container">
        <div v-for="(blog, index) in blogs" :key="index" class="single-blog-container">
            <SinglePost :title="blog.title" :tags="blog.tags" :content="blog.content"/>
        </div>
    </div>
</template>

<script setup>
import SinglePost from '@/components/SinglePost.vue';

defineProps({
    blogs: Array
});
</script>

<style scoped>
.blog-list-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    padding: 20px;
}
</style>
