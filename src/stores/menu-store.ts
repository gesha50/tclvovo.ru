import { defineStore } from 'pinia';

export const useMenuStore = defineStore('menu', {
  state: () => ({
    menu: {
      home: {
        id: 1,
        href: '/',
        label: 'menu.index',
        icon: 'fas fa-home',
        separator: true,
      },
      area: {
        id: 2,
        href: 'area',
        label: 'menu.area',
        icon: 'fas fa-square',
        separator: false,
      },
      contact: {
        id: 3,
        href: 'contact',
        label: 'menu.contact',
        icon: 'fas fa-phone',
        separator: false,
      },
      about: {
        id: 4,
        href: 'about',
        label: 'menu.about',
        icon: 'fas fa-address-card',
        separator: false,
      },
    },
    isDrawerOpen: false,
  }),

  getters: {
    //
  },

  actions: {
    triggerDrawer() {
      this.isDrawerOpen = !this.isDrawerOpen;
    },
    screenWidthForDrawer(width: number) {
      if (width > 599) {
        this.isDrawerOpen = false;
      }
    },
  }
});
