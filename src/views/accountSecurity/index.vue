<template>
  <div class="account_box">
    <div class="account_box_right">
      <div class="account_box_t">
        <div class="account_left">账号安全</div>
      </div>
      <div class="account_centent">
        <div
          class="account_centent_box"
          v-for="(item, index) in listData"
          :key="index"
          @click="handlePass(index)"
        >
          <img :src="item.img" alt="" class="account_centent_i" />
          <div class="account_centent_top">{{ item.name }}</div>
          <div class="account_centent_s">{{ item.title }}</div>
          <div class="account_centent_o"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {
  },
  data() {
    return {
      input: '',
      listData: [
        {
          'img': require('../../assets/second/password.png'),
          'name': '修改密码',
          'title': '通过绑定手机号或邮箱更改',
          'circular': ''
        },
        {
          'img': require('../../assets/second/phone_red.png'),
          'name': '修改手机号',
          'title': '通过绑定手机号或邮箱更改',
          'circular': ''
        },
        {
          'img': require('../../assets/second/mail.png'),
          'name': '修改邮箱',
          'title': '通过绑定手机号或邮箱更改',
          'circular': ''
        }
      ]
    };
  },
  methods: {
    handlePass(index) {
      // if (index == 0) {
      this.$router.push({
        path: '/changePasswordTwo'
      })
      // }
    }
  }
}
</script>
<style lang="scss">
.account_box {
  width: 100%;
  height: 100vh;
  overflow: scroll;
  display: flex;
  background: rgba(237, 239, 243, 1);
}
.account_box_right {
  width: auto;
  margin-left: 30px;
}
.account_box_t {
  width: 1100px;
  font-size: 14px;
  font-weight: 400;
  color: #000000;
  line-height: 20px;
  padding: 40px 0 38px;
  border-bottom: 1px dashed #979797;
  display: flex;
  justify-content: space-between;
}
.account_left {
  font-weight: 400;
  color: #000000;
  display: flex;
  align-items: center;
  font-size: 24px;
  line-height: 35px;
}
.account_centent {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
.account_centent_box {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 100px 44px 100px;
}
.account_centent_i {
  width: 27px;
  height: 32px;
}
.account_centent_itwo {
  width: 23px;
  height: 32px;
}
.account_centent_ithree {
  width: 32px;
  height: 27px;
}
.account_centent_top {
  color: #000;
  font-size: 14px;
  margin-top: 30px;
}
.account_centent_s {
  color: #000;
  font-size: 12px;
  line-height: 24px;
}
.account_centent_o {
  width: 9px;
  height: 9px;
  background: #a20627;
  border-radius: 50%;
  margin-top: 60px;
}
</style>