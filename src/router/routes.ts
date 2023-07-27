import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('../layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('../pages/BlogListPage.vue'),
      },
      {
        path: 'tag/:tagId',
        component: () => import('../pages/BlogListPage.vue'),
      },
      {
        path: '/post/:id',
        component: () => import('../pages/BlogDetailPage.vue'),
      },
    ],
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('../pages/ErrorNotFound.vue'),
  },
];

export default routes;
