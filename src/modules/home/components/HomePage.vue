<template>
  <div class="full-width">
    <h1 class=" center-content">Hello World!</h1>

    <PageInit v-if="!isInitialized" @submit="handleInitMotel" />
    <div v-else>
      <h2>{{ name }}</h2>
      <em><p>{{ slogan }}</p></em>
    </div>

  </div>
</template>

<script>
import PageInit from './init/PageInit'
import { createHomeStoreHelper, ACTION_TYPES } from '../store'
const { mapActions, mapState } = createHomeStoreHelper()
const { INIT_MOTEL, LOAD_MOTEL } = ACTION_TYPES

export default {
  components: { PageInit },
  computed: {
    ...mapState({
      isInitialized: state => state.isInitialized,
      name: state => state.motel.name,
      slogan: state => state.motel.slogan,
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
