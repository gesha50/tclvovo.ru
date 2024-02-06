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
      services: {
        id: 2,
        href: 'services',
        label: 'menu.services',
        icon: 'fas fa-code',
        separator: false,
      },
      portfolio: {
        id: 3,
        href: 'works',
        label: 'menu.portfolio',
        icon: 'fas fa-briefcase',
        separator: false,
      },
      certificates: {
        id: 4,
        href: 'certificates',
        label: 'menu.certificates',
        icon: 'fas fa-code',
        separator: false,
      },
      contact: {
        id: 5,
        href: 'contact',
        label: 'menu.contact',
        icon: 'fas fa-phone',
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
