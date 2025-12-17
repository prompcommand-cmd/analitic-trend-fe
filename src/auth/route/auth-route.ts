export const authRouteList = [
    {
        path: '/auth/login',
        name: 'auth-login',
        component: () => import('@/auth/login-with-email-page.vue'),
        meta: {
            title: 'Login',
        },
    },
];