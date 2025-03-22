<template>
    <div class="add-blog-container">
        <h2>Create your blog here</h2> 
        <label>Title: <input v-model="blogTitle" type="text"></label>
        <label>Tags: <input v-model="blogTag" type="text"><button class="addblog-button" @click="addTag">Add tag</button></label>
        <div class="show-tags">
            <p v-for="(tag, index) in tags" :key="index">{{ tag }}</p>
        </div>
        <label>Content: <textarea v-model="blogContent"></textarea></label>
        <button @click="addBlog" class="addblog-button">Add blog</button>
    </div>
</template>

<script setup>
import { ref } from 'vue';  
import { useToast } from 'vue-toastification';

const toast = useToast();
const emit = defineEmits(["add-blog"]);

const blogTitle = ref("");
const blogTag = ref("");
const blogContent = ref("");
const tags = ref([]);

const addTag = () => {
    if (blogTag.value.trim() === "") {
        toast.error("Tag field empty");
        return;
    }
    tags.value.push(blogTag.value.trim());
    toast.success("Tag added");
    blogTag.value = "";
}

const addBlog = () => {
    if (!blogTitle.value || !blogContent.value) {
        toast.error("Please fill all the fields");
        return;
    }
    if (tags.value.length === 0) {
        toast.error("You should add at least one tag");
        return;
    }
    
    emit("add-blog", {
        title: blogTitle.value,
        tags: [...tags.value],
        content: blogContent.value
    });

    blogTitle.value = "";
    blogContent.value = "";
    tags.value = [];
}
</script>

<style scoped>
.add-blog-container {
    display: flex;
    flex-direction: column;
    max-width: 500px;
    margin: 0 auto;
    padding: 20px;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

label {
    font-weight: bold;
    margin-bottom: 5px;
}

input {
    padding: 8px;
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 6px;
}

.show-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
}

.show-tags p {
    background: #ddd;
    padding: 5px 10px;
    border-radius: 5px;
}

.addblog-button {
    background: #007bff;
    color: white;
    padding: 10px;
    border-radius: 6px;
    cursor: pointer;
    font-size: 1rem;
    transition: background 0.3s ease-in-out;
}

.addblog-button:hover {
    background: #0056b3;
}
</style>
