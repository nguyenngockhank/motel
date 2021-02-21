<template>
<div>
    <h1>Welcome to {{ name }}!!!</h1>
    <div><i>{{ slogan }}</i></div>

    <el-divider><i class="el-icon-star-on"></i></el-divider>

    <el-row :gutter="20">
        <el-col :xs="24" :sm="12" :md="8" :lg="6"
            class="card-wrapper"
            v-for="room in rooms" :key="room.id"
        >
            <RoomCard v-bind="room" />
        </el-col>
    </el-row>
</div>
</template>

<script lang="ts">
import RoomCard from './RoomCard.vue'
import { createHomeStoreHelper, HomeState } from '../../store'
const { mapState } = createHomeStoreHelper()


export default {
    components: {
        RoomCard,
    },
    computed: {
        ...mapState({
            isInitialized: (state: HomeState) => state.isInitialized,
            name:  (state: HomeState) => state.motel.name,
            slogan:  (state: HomeState) => state.motel.slogan,
            rooms:  (state: HomeState) => state.rooms,
        })
    },
}
</script>

<style scoped>
.card-wrapper {
    margin-bottom: 30px;
}
</style>