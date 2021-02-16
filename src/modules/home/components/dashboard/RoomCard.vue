<template>
<el-card>
    <div slot="header" class="clearfix room-header">
        <el-badge :value="statusLabel" :type="statusType" class="item">
            <span class="room-label">{{ roomLabel }}</span>
        </el-badge>
        
        <el-dropdown trigger="click" @command="handleCommand">
            <span class="el-dropdown-link">
                <i class="el-icon-arrow-down el-icon-more"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="deposit">Đóng cọc</el-dropdown-item>
                <el-dropdown-item command="rent">Cho thuê</el-dropdown-item>
                <el-dropdown-item disabled>Action 4</el-dropdown-item>
                <el-dropdown-item divided>Lịch sử giao dịch</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </div>

    <div class="text item">
        Tiền tháng: {{ roomPrice }}
    </div>
    <div v-for="o in 4" :key="o" class="text item">
        {{'List item ' + o }}
    </div>
</el-card>
</template>

<script>
const STATUS_LABEL_MAP = {
    available: 'Trống',
    rented: 'Đã thuê',
    _DEFAULT: 'Trống',
}

const STATUS_TYPE_MAP = {
    rented: 'success',
    _DEFAULT: 'warning',
}


export default {
    props: {
        id: String,
        label: String,
        price: Number,
        status: String,
    },
    computed :  {
        roomLabel() {
            return this.label || `#${this.id}`
        },
        roomPrice() {
            return new Intl.NumberFormat().format(this.price)
        },
        statusLabel() {
            return STATUS_LABEL_MAP[this.status] || STATUS_LABEL_MAP._DEFAULT
        },
        statusType() {
            return STATUS_TYPE_MAP[this.status] || STATUS_TYPE_MAP._DEFAULT
        },
      
    },
    methods: {
        handleCommand(command) {
            switch(command) {
                case 'rent':
                    console.log('let rentttt')
            }
        }
    }
}
</script>

<style scoped>
.room-header {
    display: flex;
    justify-content: space-between;
    align-items: center; /** center vertical */
}
.room-label {
    padding-right: 4px;
}
</style>