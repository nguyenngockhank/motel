<template>
  <div class="full-width">
    <h1 class=" center-content">Hello World!</h1>

    <PageInit v-if="!isInitialized" @submit="handleInit" />

  </div>
</template>

<script>
import PageInit from './init/PageInit'
import { createHomeStoreHelper } from '../store'
const { mapActions, mapState } = createHomeStoreHelper()


import { INIT_MOTEL } from '../store/action-types'

export default {
  components: { PageInit },
  computed: {
    ...mapState({
      isInitialized: state => state.isInitialized,
    })
  },
  methods: {
    ...mapActions([ INIT_MOTEL ]),
    handleInit(data) {
      console.log('dataa submit ', data)
      this[INIT_MOTEL](data)
    }
  }
}
</script>
