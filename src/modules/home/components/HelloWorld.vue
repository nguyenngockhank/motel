<template>
  <div class="full-width">
    <h1 class=" center-content">Hello World!</h1>

    <PageInit @submit="handleInit" />

  </div>
</template>

<script>
import PageInit from './init/PageInit'

import { createNamespacedHelpers } from 'vuex'
const { mapState, mapActions } = createNamespacedHelpers('home')
import { INCREASE_COUNT } from '../store/action-types'

export default {
  components: { PageInit },
 
  computed: {
    ...mapState({
      count: state => state.testCount,
    })
  },
  methods: {
    ...mapActions([ INCREASE_COUNT ]),
    handleClick() {
      this[INCREASE_COUNT](10)
    },
    handleInit(data) {
      console.log('dataa submit ', data)
    }
  }
}
</script>
