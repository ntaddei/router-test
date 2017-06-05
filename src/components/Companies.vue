<template>
  <div>
    <div class="layout-padding">
      <div class="list">
        <div class="item item-link two-lines" 
          v-for="company in companies" :key="company.id"
          @click="$router.push('companies/' + company.id)"
        >
          <i class="item-primary">
            business
          </i>
          <div class="item-content has-secondary">
            <div>{{ company.name }}</div>
            <div>{{ company.motto }}</div>
          </div>
          <div class="item-secondary">
            <i slot="target">keyboard_arrow_right</i>
          </div>
        </div>
      </div>
      <br>
      <button class="primary" @click="newCompany()">
        <i>add</i> Add company
      </button>
    </div>

    <company-create ref="createCompanyModal" @created="openNewCompany"></company-create>
  </div>
</template>

<script>
import CompanyCreate from './CompanyCreate'

import { Toast } from 'quasar'

export default {
  data () {
    return {
      companies: window.companies.all()
    }
  },
  components: { CompanyCreate },
  methods: {
    newCompany () {
      this.$refs.createCompanyModal.open()
    },
    openNewCompany (newCompanyId) {
      this.$router.push('companies/' + newCompanyId)
      Toast.create.positive('Company successfully created!')
    }
  }
}
</script>

<style>
</style>
