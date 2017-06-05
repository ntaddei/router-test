<template>
  <!-- Don't drop "q-app" class -->
  <div id="q-app">
    <q-layout>
      <div slot="header" class="toolbar primary">
        <button class="hide-on-drawer-visible" @click="$refs.drawerLeft.open()">
          <i>menu</i>
        </button>
        <q-toolbar-title :padding="0">
          <div class="flex justify-start items-center">
            <div><img src="~assets/quasar-logo.png" width="30" class="on-left"></div>
            <div>StealthSys</div>
          </div>
        </q-toolbar-title>
        <button @click="$refs.drawerRight.open()">
          <i class="on-left">account_circle</i>
          <span class="gt-sm inline">Niccolò Taddei</span>
        </button>
      </div>

      <q-drawer ref="drawerLeft">
        <div class="list no-border platform-delimiter">
          <q-drawer-link icon="dashboard" to="/" exact>Dashboard</q-drawer-link>
          <q-drawer-link to="/companies" icon="business">Companies</q-drawer-link>
        </div>
      </q-drawer>

      <router-view class="layout-view">
      </router-view>
    </q-layout>
  </div>
</template>

<script>
/*
 * Root component
 */
export default {}
</script>

<style></style>
