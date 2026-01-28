<template>
  <q-header
    reveal
    :reveal-offset="10"
    class="text-black"
    height-hint="98"
  >
    <q-toolbar>
      <q-btn
        class="lt-md"
        @click="$emit('drawer')"
        color="white"
        text-color="primary"
        round
        icon="menu"
      />
      <q-avatar class="q-mx-md q-my-sm">
        <img src="../assets/quasar-logo-vertical.svg" alt="" />
      </q-avatar>
      <q-tabs
        v-model="tab"
        class="text-grey-9 q-ml-sm gt-sm"
        indicator-color="transparent"
        active-color="black"
        active-bg-color="white"
        shrink
        stretch
      >
        <q-route-tab
          v-for="menuItem in menu"
          :key="menuItem.id"
          :to="menuItem.href"
          :label="$t(menuItem.label)"
        />
      </q-tabs>
      <q-space></q-space>
      <div class="q-mx-lg flex items-center">
        <div
          class="bg-white q-pa-sm"
          style="border-radius: 50%"
        >
          <q-icon size="xs" name="phone" />
        </div>
        <div class="">+7 (919) 543-33-33</div>
      </div>
      <div class="q-mx-lg">ggggggg@gmail.com</div>
      <q-btn class="glossy" rounded color="deep-orange" label="Glossy Rounded" />
    </q-toolbar>
  </q-header>
</template>

<script setup>
import { ref } from 'vue';
import { useMenuStore } from 'stores/menu-store';
import { storeToRefs } from 'pinia/dist/pinia';
import { useI18n } from 'vue-i18n/dist/vue-i18n';

const { locale } = useI18n({ useScope: 'global' });
const tab = ref('');
const { menu } = storeToRefs(useMenuStore());

</script>

<style lang="scss">
.q-header {
  background: rgba(255, 255, 255, 1) !important;
}
.q-tab__label {
  font-family: 'OpenSans-Regular', sans-serif;
}
.self-stretch {
  align-self: center;
}
</style>
