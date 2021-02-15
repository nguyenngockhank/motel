<template>
<div>
    <h1>Welcome to {{ name }}!!!</h1>
    <div><i>{{ slogan }}</i></div>

    <el-col :span="8" :offset="1" v-for="room in rooms" :key="room.id"  >
        <!-- Rooms with cards -->
        <el-card>
            <div slot="header" class="clearfix">
                <span>{{ room.label || `#${room.id}` }}</span>

                <el-button class="operation-btn" type="primary" icon="el-icon-more">Operation button</el-button>
            </div>
            <div v-for="o in 4" :key="o" class="text item">
                {{'List item ' + o }}
            </div>
        </el-card>
    </el-col>
</div>
</template>

<script>
import { createHomeStoreHelper } from '../../store'
const { mapState } = createHomeStoreHelper()


export default {
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
.box-card {
    width: 480px;
}
.operation-btn {
    float: right; 
    padding: 3px 0;
}
</style>