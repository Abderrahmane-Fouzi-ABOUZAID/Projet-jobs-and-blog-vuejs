<template>
    <div class="overlay">
        <div class="modal">
            <p>Title : {{title}}</p>
            <div class="tags-container">
                <p>Tags : </p>
                <p v-for="(tag, index) in tags" :key="index">{{tag}}</p>
            </div>
            <p>Content : {{content}}</p>
            <router-link to="/">Close details</router-link>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    title: String,
    tags: Array,
    content: String
})

console.log(props.title);

</script>

<style scoped>
.overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
}

.modal {
    width: 50%;
    background: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
}

.tags-container {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
}

.tags-container p {
    background: #eee;
    padding: 5px 10px;
    border-radius: 5px;
}
</style>
