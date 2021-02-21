<template>
  <div class="full-width">

    <PageInit v-if="!isInitialized" @submit="handleInitMotel" />
    <Dashboard v-else />
  </div>
</template>

<script lang="ts">
import PageInit from './init/PageInit.vue'
import Dashboard from './dashboard/Dashboard.vue'

import { createHomeStoreHelper, HomeState, ACTION_TYPES } from '../store'
const { mapActions, mapState } = createHomeStoreHelper()
const { INIT_MOTEL, LOAD_MOTEL } = ACTION_TYPES

export default {
  components: { PageInit, Dashboard },
  computed: {
    ...mapState({
      isInitialized: ( state : HomeState) => state.isInitialized,
    })
  },
  async created() {
    await this[LOAD_MOTEL]()
  },
  methods: {
    ...mapActions([ INIT_MOTEL, LOAD_MOTEL ]),
    handleInitMotel(data) {
      this[INIT_MOTEL](data)
    }
  }
}
</script>
