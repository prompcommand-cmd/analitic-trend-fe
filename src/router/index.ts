import { createRouter, createWebHistory } from 'vue-router';
import App from '@/App.vue';

import { authRouteList } from '@/auth/route/auth-route';
import { dashboardRoute } from '@/dashboard/route/dashboard-route'

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL ?? '/'),
    routes: [
        {
            path: '/',
            component: App,
            children: [
                ...dashboardRoute,
            ],
            beforeEnter: (to: any, from: any, next: any) => {
                const token = localStorage.getItem('token');
                if (token) {
                    next();
                } else {
                    next({ name: 'auth-login' });
                }
            },
        },
        ...authRouteList,
        {
            name: 'not-found',
            path: '/:pathMatch(.*)*',
            component: () => import('@/@/component/404-component.vue'),
            meta: {
                title: 'Page not found',
            },
        },
    ],
});

export default router;
