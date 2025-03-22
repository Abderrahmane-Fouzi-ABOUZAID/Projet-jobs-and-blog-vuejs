import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import CreatePostView from '@/views/CreatePostView.vue';
import PostDetailView from '@/views/PostDetailView.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: "home",
            component: Home
        },
        {
            path: '/addpost',
            name: 'addpost',
            component: CreatePostView
        },
        {
            path: '/showdetails',
            name: 'showdetails',
            component: PostDetailView,
            props: route => ({
                title: route.query.title,
                tags: JSON.parse(route.query.tags || "[]"),
                content: route.query.content
            })
        }
    ],
});

export default router;
