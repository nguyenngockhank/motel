<template>
<div>
    <h1>Thuê phòng</h1>

    <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">Dashboard</el-breadcrumb-item>
        <el-breadcrumb-item>Room {{ roomId }}</el-breadcrumb-item>
        <el-breadcrumb-item>Renting</el-breadcrumb-item>
    </el-breadcrumb>

    <el-divider><i class="el-icon-star-on"></i></el-divider>

    <h2>Thông tin phòng</h2>

    <div>
        <span><strong>Phòng số</strong>: {{ roomId }}</span>
    </div>
    <div>
        <span><strong>Số tiền / tháng</strong>: {{ vndPricePerMonth }} ({{ daysToNextMonth }} ngày)</span>
    </div>

    <el-divider><i class="el-icon-star-on"></i></el-divider>

    <h2>Thanh toán</h2>

    {{ paymentInfo }}

    <el-form  label-position="top" label-width="150px">
        <el-form-item label="Số tiền" >
            <el-input-number v-model="netAmount" 
                :min="0" :step="100000"
                @change="calculatePayment" />
        </el-form-item>

        <el-form-item label="Ngày bắt đầu" >
            <el-date-picker
                v-model="startDate"
                type="date"
                placeholder="Pick a day" 
                @change="calculatePayment"
            />
        </el-form-item>

        <el-form-item label="Ngày đáo hạn" >
            <el-date-picker
                v-model="dueDate"
                type="date"
                placeholder="Pick a day" />
        </el-form-item>

        <!-- end fields -->
        <el-form-item >
            <el-button  type="primary" @click="submit">Thực hiện</el-button>
        </el-form-item>
    </el-form>
</div>
</template>

<script>
import { createRoomStoreHelper, ACTION_TYPES } from '../../store'
const {  mapState, mapActions } = createRoomStoreHelper()
const { CALCULATE_PAYMENT_INFO } = ACTION_TYPES

 
export default {
    data() {
        return {
            netAmount: 0,
            startDate: new Date(),
            dueDate: new Date(),
        }
    },
    computed: {
        ...mapState({
            paymentInfo: state => state.renting.paymentInfo,
        }),
        roomId() {
            return this.$route.params.id;
        },
        roomPrice() {
          return this.paymentInfo?.pricePerMonth
        },
        vndPricePerMonth() {
            return this.roomPrice > 1 ? this.$options.filters.vnd(this.roomPrice) : '-'
        },
        daysToNextMonth() {
            return this.paymentInfo?.daysToNextMonth
        },
    },
    async created() {
        await this.calculatePayment()
    },
    methods : {
        ...mapActions([ CALCULATE_PAYMENT_INFO ]),
        async calculatePayment() {
            await this[CALCULATE_PAYMENT_INFO]({
                roomId: this.roomId,
                startDate: this.startDate,
                netAmount: this.netAmount,
            })

            this.netAmount = this.paymentInfo.netAmount
            this.dueDate = this.paymentInfo.dueDate
        },
        submit() {
            // TODO: implement this method
        }
    }
}
</script>