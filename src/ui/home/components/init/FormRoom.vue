<template>
<el-form  label-position="top" label-width="150px"  :model="form">
    <!-- end header -->
    <el-form-item label="Number of rooms:">
        <el-input-number v-model="form.numberOfRooms" />
    </el-form-item>
    <el-form-item label="Price (VND) / Room">
        <el-input-number v-model="form.priceOfRoom" :step="100000" />
    </el-form-item>
    <!-- end fields -->
    <el-form-item >
        <el-button  type="primary" @click="back">Quay lại</el-button>
        <el-button :disabled="form.numberOfRooms <= 0" 
            type="primary" @click="submit">Tiếp tục</el-button>
    </el-form-item>
</el-form>
</template>

<script>
export default {
    data() {
        return {
            form: {
                numberOfRooms: 10,
                priceOfRoom: 2000000,
            }
        };
    },
    methods : {
        back() {
            this.$emit('back')
        },
        submit() {
            this.$emit('next', this.form)
        }
    }
}
</script>