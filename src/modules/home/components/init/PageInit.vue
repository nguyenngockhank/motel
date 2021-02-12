<template>
<div>
    <el-steps :active="currentStep" 
        simple 
        finish-status="success"
        process-status="finish"
        style="margin-bottom: 30px;"
    >
      <el-step title="Giới thiệu" ></el-step>
      <el-step title="Kinh doanh" ></el-step>
      <el-step title="Thủ tục" ></el-step>
    </el-steps>

    <FormIntro v-show="currentStep == 0" 
        @next="handleIntroClickNext" 
    />
    <FormRoom v-show="currentStep == 1" 
        @next="handleRoomClickNext" 
        @back="handleClickBack" 
    />
    <FormChecklist v-show="currentStep == 2" 
        @next="handleChecklistFinish" 
        @back="handleClickBack" 
    />
</div>
</template>

<script>
import FormIntro from './FormIntro'
import FormRoom from './FormRoom'
import FormChecklist from './FormChecklist'

export default {
    components: {
        FormIntro,
        FormRoom,
        FormChecklist,
    },

    data() {
        return {
            currentStep: 0,
            motelInfo: {},
            roomInfo: {},
            checklistInfo: {},
        };
    },
    methods : {
        handleClickBack() {
            this.currentStep -= 1
        },
        handleIntroClickNext(data) {
            this.currentStep = 1
            this.motelInfo = data
        },
        handleRoomClickNext(data) {
            this.currentStep = 2
            this.roomInfo = data
        },
        handleChecklistFinish(data) {
            this.checklistInfo = data
            // 
            this.$emit('submit', {
                motelInfo: this.motelInfo,
                roomInfo: this.roomInfo,
                checklistInfo: this.checklistInfo,
            })
        },
    }
}
</script>