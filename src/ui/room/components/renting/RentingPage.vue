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
    <div>
        <span><strong>Số tiền / ngày</strong>: {{ vndPricePerDay }}</span>
    </div>

    <el-divider><i class="el-icon-star-on"></i></el-divider>

    <h2>Thanh toán</h2>

    <el-form  label-position="top" label-width="150px">
        <el-form-item label="Số tiền" >
            <el-input-number v-model="netAmount" :min="0" :step="100000"></el-input-number>
        </el-form-item>

        <el-form-item label="Ngày thanh toán" >
            <el-date-picker
                v-model="processedDate"
                type="date"
                placeholder="Pick a day" />
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
import { createRoomStoreHelper } from '../../store'
const { mapGetters } = createRoomStoreHelper()

function daysToNextMonth(startDate) {
    const dateFrom = new Date(startDate)

    const nextMonthDate = new Date(dateFrom)
    nextMonthDate.setMonth(nextMonthDate.getMonth() + 1)

    const diffTime = Math.abs(nextMonthDate - dateFrom)
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24)) 
}
 
export default {
    data() {
        return {
            netAmount: 0,
            processedDate: new Date(),
        }
    },
    computed: {
        ...mapGetters(['getRoomInfo']),
        roomId() {
            return this.$route.params.id
        },
        roomInfo() {
            return this.getRoomInfo(this.roomId)
        },
        roomPrice() {
            return this.roomInfo ? this.roomInfo.price : 1
        },
        vndPricePerMonth() {
            return this.roomPrice > 1 ? this.$options.filters.vnd(this.roomPrice) : '-'
        },
        daysToNextMonth() {
            return daysToNextMonth(this.processedDate)
        },
        vndPricePerDay() {
            if (this.vndPricePerMonth === '-') {
                return '-'
            }

            const pricePerDay = Math.ceil(this.roomPrice / this.daysToNextMonth)
            return this.$options.filters.vnd(pricePerDay)
        },
        dueDate() {
            const endDate = new Date(this.processedDate)

            // calculate months 
            const months = Math.floor(this.netAmount / this.roomPrice)
            endDate.setMonth(endDate.getMonth() + months)

            // calculate days
            const moneyForDays = this.netAmount % this.roomPrice
            const days = moneyForDays > 0 
                            ? Math.floor(moneyForDays / ( this.roomPrice / daysToNextMonth(endDate)))
                            : 0
            endDate.setDate(endDate.getDate() + days)

            console.log("MONTHS " , months, "days ", days)

            return endDate
        },
      
    },
    watch: {
        roomInfo(val) {
            if (val) {
                this.netAmount = this.roomInfo.price
            }
        }
    },
    methods : {
        submit() {

        }
    }
}
</script>