<template>
    <div>
        <h2>Welcome home</h2> 
        <PostList :blogs="blogs"/>
        <CloudTag @update-current-blog="handleCurrentBlogs" :blogs="allblogs"
        />
    </div>
</template>

<script setup>
import PostList from '@/components/PostList.vue';
import CloudTag from '@/components/CloudTag.vue';

const emit = defineEmits(["update-current-blog"]);

defineProps({
    blogs: Array,
    allblogs: Array
});

const handleCurrentBlogs = (tag) => {
    emit("update-current-blog", tag);
}

</script>

<style scoped>
    
h2 {
    text-align: center;
    margin-bottom: 20px;
    font-size: 2rem;
    color: #333;
}
</style>
