<template>
    <div class="navbar">
        <p>Welcome to Blog Site</p>
        <router-link class="navbar-links" to="/">Home</router-link>
        <router-link class="navbar-links" to="/addpost">Add post</router-link>
    </div>
</template>


<script setup>
    
</script>

<style scoped>
.navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #007bff;
    padding: 15px 30px;
    color: white;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
}

.navbar p {
    font-size: 1.5rem;
    font-weight: bold;
}

.navbar-links {
    color: white;
    text-decoration: none;
    font-size: 1.2rem;
    margin-left: 20px;
}

.navbar-links:hover {
    text-shadow: 2px 2px 4px rgba(255, 255, 255, 0.5);
    font-weight: bold;
}
</style>
