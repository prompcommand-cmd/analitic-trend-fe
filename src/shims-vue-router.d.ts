declare module 'vue-router' {
  import { Component } from 'vue';

  export interface RouteMeta {
    [key: string]: any;
  }

  export interface RouteRecordRaw {
    path: string;
    name?: string;
    component?: Component | (() => Promise<Component>);
    redirect?: string;
    children?: RouteRecordRaw[];
    meta?: RouteMeta;
    beforeEnter?: any;
  }

  export function createRouter(options: {
    history: any;
    routes: RouteRecordRaw[];
  }): any;

  export function createWebHistory(base?: string): any;

  export function createWebHashHistory(base?: string): any;
}
