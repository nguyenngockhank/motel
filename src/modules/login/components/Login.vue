<template>

<el-row :gutter="20" justify="center">
  <el-col :span="8" >

    <el-form :label-position="labelPosition" label-width="120px" :model="form">
      <el-form-item>
        <h1 class=" center-content">Login</h1>
      </el-form-item>
      <!-- end header -->
      <el-form-item label="Account">
        <el-input v-model="form.account"></el-input>
      </el-form-item>
      <el-form-item label="Password">
        <el-input type="password" v-model="form.password"></el-input>
      </el-form-item>
      <!-- end fields -->
      <el-form-item>
        <el-button type="primary" @click="submitForm">Submit</el-button>
      </el-form-item>
    </el-form>
  </el-col>
</el-row>
</template>

<script>
import { createLoginStoreHelper, ACTION_TYPES } from '../store'

const { mapState, mapActions } = createLoginStoreHelper()
const { LOGIN, LOAD_SESSION } = ACTION_TYPES

export default {
  data() {
    return {
      labelPosition: 'right',
      form: {
        account: '',
        password: '',
      }
    };
  },
  computed: {
    ...mapState({
      isLogin: state => state.isLogin,
    })
  },
  watch : {
    isLogin : {
      handler(val) {
        if (val) {
          this.$router.push({ name: 'Home' })
        }
      },
      immediate: true,
    }
  },
  created() {
    this[LOAD_SESSION]()
  },
  methods: {
    ...mapActions([ LOGIN, LOAD_SESSION ]),
    submitForm() {
      this[LOGIN](this.form);
    },
  }
}
</script>