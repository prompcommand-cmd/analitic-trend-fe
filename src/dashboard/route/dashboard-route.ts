export const dashboardRoute = [
    {
        path: '/',
        name: 'dashboard',
        component: () => import('@/dashboard/dashboard-page.vue'),
        meta: {
            title: 'Dashboard',
        },
    },
];