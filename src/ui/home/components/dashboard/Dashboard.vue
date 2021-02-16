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

<script>
import RoomCard from './RoomCard'
import { createHomeStoreHelper } from '../../store'
const { mapState } = createHomeStoreHelper()


export default {
    components: {
        RoomCard,
    },
    computed: {
        ...mapState({
            isInitialized: state => state.isInitialized,
            name: state => state.motel.name,
            slogan: state => state.motel.slogan,
            rooms: state => state.rooms,
        })
    },
}
</script>

<style scoped>
.card-wrapper {
    margin-bottom: 30px;
}
</style>