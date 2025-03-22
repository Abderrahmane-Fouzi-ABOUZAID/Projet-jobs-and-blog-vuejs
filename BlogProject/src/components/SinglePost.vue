<template>
    <div class="single-blog-container">
        <p>Title: {{ title }}</p>
        <div class="tag-container">
            <p>Tags:</p>
            <p v-for="(tag, index) in tags" :key="index">{{ tag }}</p>
        </div>
        <p>Content: {{ content.substring(0, 50) }}...</p>
        <router-link :to="{ name: 'showdetails', query: { title, tags: JSON.stringify(tags), content } }">
            Show more
        </router-link>
    </div>
</template>

<script setup>
defineProps({
    title: String,
    tags: Array,
    content: String
});
</script>

<style scoped>
.single-blog-container {
    background: #fff;
    padding: 15px;
    border-radius: 10px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    width: 350px;
    transition: transform 0.2s ease-in-out;
}

.single-blog-container:hover {
    transform: scale(1.02);
}

.tag-container {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
}

.tag-container p {
    background: #ddd;
    padding: 5px 10px;
    border-radius: 5px;
}

router-link {
    color: #007bff;
    text-decoration: none;
    font-weight: bold;
}

router-link:hover {
    text-decoration: underline;
}
</style>
