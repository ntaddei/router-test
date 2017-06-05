<template>
  <q-modal ref="modal" :content-css="{ minWidth: '80vw', minHeight: '80vh' }">
    <q-layout>
      <div slot="header" class="toolbar primary">
        <button @click="close()">
          <i>arrow_back</i>
        </button>
        <q-toolbar-title :padding="1">
          Create company
        </q-toolbar-title>
      </div>
      <div class="layout-view">
        <div class="list no-border">
          <div class="item two-lines">
            <i class="item-primary">business</i>
            <div class="item-content">
              <div class="stacked-label">
                <input class="full-width" v-model="name">
                <label>Name</label>
              </div>
            </div>
          </div>
          <div class="item two-lines">
            <i class="item-primary"></i>
            <div class="item-content">
              <div class="stacked-label">
                <input class="full-width" v-model="motto">
                <label>Motto</label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div slot="footer">
        <button class="secondary full-width" @click="create()">
          <i>add </i> Create
        </button>
      </div>
    </q-layout>
  </q-modal>
</template>

<script>
export default {
  data () {
    return {
      name: '',
      motto: ''
    }
  },
  methods: {
    open () {
      this.$refs.modal.open()
    },
    close () {
      this.$refs.modal.close()
    },
    create () {
      let newCompany = window.companies.add(this.name, this.motto)
      this.$emit('created', newCompany.id)
    }
  }
}
</script>

<style>
</style>
