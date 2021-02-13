<template>
<el-form  label-position="top"  >
    <h3>Việc cần làm trước khi khách dọn vào ở</h3>
    <el-checkbox-group v-model="beforeCheckInList">
        <div v-for="option in defaultChecklists.beforeCheckInList" :key="option.value">
            <el-checkbox :label="option.value">{{ option.label }}</el-checkbox>
        </div>
    </el-checkbox-group>

    <h3>Việc cần làm sau khi khách dọn vào ở</h3>
    <el-checkbox-group v-model="afterCheckInList">
        <div v-for="option in defaultChecklists.afterCheckInList" :key="option.value">
            <el-checkbox :label="option.value">{{ option.label }}</el-checkbox>
        </div>
    </el-checkbox-group>


    <h3>Việc cần làm trước khi khách trả phòng</h3>
    <el-checkbox-group v-model="beforeCheckOutList">
        <div v-for="option in defaultChecklists.beforeCheckOutList" :key="option.value">
            <el-checkbox :label="option.value">{{ option.label }}</el-checkbox>
        </div>
    </el-checkbox-group>

    <h3>Việc cần làm sau khi khách trả phòng</h3>
    <el-checkbox-group v-model="afterCheckOutList">
        <div v-for="option in defaultChecklists.afterCheckOutList" :key="option.value">
            <el-checkbox :label="option.value">{{ option.label }}</el-checkbox>
        </div>
    </el-checkbox-group>

    <!-- end fields -->
    <el-form-item style="margin-top: 30px" >
        <el-button  type="primary" @click="back">Quay lại</el-button>
        <el-button  type="primary" @click="submit">Sử dụng</el-button>
    </el-form-item>
</el-form>
</template>

<script>
import { createHomeStoreHelper } from '../../store'
import { LOAD_CHECKLIST_OPTIONS } from '../../store/action-types';
const { mapState, mapActions } = createHomeStoreHelper()

export default {
    data() {
        return {
            beforeCheckInList: [],
            afterCheckInList: [],
            beforeCheckOutList: [],
            afterCheckOutList: [], 
        };
    },
    computed: {
        ...mapState(['defaultChecklists']),
    },
    async created(){
        await this[LOAD_CHECKLIST_OPTIONS]()
        this.checkAllList()
    },
    methods : {
        ...mapActions([ LOAD_CHECKLIST_OPTIONS ]),
        back() {
            this.$emit('back')
        },
        submit() {
            this.$emit('next', {
                beforeCheckInList: this.beforeCheckInList,
                afterCheckInList: this.afterCheckInList,
            })
        },
        checkAllList() {
            ['beforeCheckInList', 'afterCheckInList', 'beforeCheckOutList', 'afterCheckOutList'].map(
                key => {
                    if (!this.defaultChecklists[key]) {
                        return
                    }
                    this[key] = this.defaultChecklists[key].map(item => item.value)
                }
            )
        }
    }
}
</script>