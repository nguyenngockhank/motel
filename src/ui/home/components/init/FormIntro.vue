<template>
<el-form  label-position="top" label-width="150px" :model="form">
    <!-- end header -->
    <el-form-item label="Tên trọ">
        <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="Khẩu hiệu">
        <el-input v-model="form.slogan"></el-input>
    </el-form-item>
    <!-- end fields -->
    <el-form-item >
        <el-button :disabled="form.name == ''" type="primary" @click="submit">Tiếp tục</el-button>
    </el-form-item>
</el-form>
</template>

<script>
export default {
    data() {
        return {
            form: {
                name: 'Trọ của tui',
                slogan: 'Trọ của tui, rất là zuiiiiiii',
            }
        };
    },
    methods : {
        submit() {
            this.$emit('next', this.form);
        }
    }
}
</script>