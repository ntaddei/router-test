<template>
  <div>
    <div class="layout-padding">
      <div class="card" v-if="company">
        <div class="card-title">
          Profile
        </div>
        <div class="list">
          <div class="item">
            <i class="item-primary">
              business
            </i>
            <div class="item-content">
              {{ company.name }}
            </div>
          </div>
          <div class="item">
            <i class="item-primary">
            </i>
            <div class="item-content">
              {{ company.motto }}
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <h4 class="text-negative">Company not found</h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [ 'id ' ],
  data () {
    return {
      companyId: null,
      company: null
    }
  },
  mounted () {
    this.companyId = this.$route.params.id
    this.company = window.companies.get(this.companyId)
  }
}
</script>

<style>
</style>
