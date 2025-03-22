<template>
    <div>
        <h2>Welcome home</h2> 
        <PostList :blogs="blogs"/>
        <CloudTag :blogs="blogs"/>
    </div>
</template>

<script setup>
import PostList from '@/components/PostList.vue';
import CloudTag from '@/components/CloudTag.vue';

defineProps({
    blogs: Array
});
</script>

<style scoped>
    
h2 {
    text-align: center;
    margin-bottom: 20px;
    font-size: 2rem;
    color: #333;
}
</style>
