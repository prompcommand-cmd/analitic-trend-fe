import { defineStore } from 'pinia';

export const useAppStore = defineStore('appStore', {
    state: () => ({
        theme: '',
        showSpinner: false,
        leftBarExpand: true,
        pageTitle: '',
        scrollPosition: 0,
        multitabScrollObj: '' as any,
        showMaximumTabPopup: false,
    }),
});
