<template>
  <div class="passOne_box">
    <HeadIndex></HeadIndex>
    <div class="passOne_box_t">基本信息</div>
    <div class="passOne_centent">
      <div
        class="passOne_centent_box"
        v-for="(item, index) in listData"
        :key="index"
        @click="handlepassOne(index)"
      >
        <img :src="item.img" alt="" class="passOne_centent_i" />
        <div class="passOne_centent_top">{{ item.name }}</div>
        <div class="passOne_centent_o"></div>
      </div>
    </div>
  </div>
</template>

<script>
import HeadIndex from '@/components/head/index.vue'
export default {
  data() {
    return {
      listData: [
        {
          'img': require('../../assets/second/password.png'),
          'name': '通过密码修改',
          'circular': ''
        },
        {
          'img': require('../../assets/second/phone_red.png'),
          'name': '通过手机号修改',
          'circular': ''
        }
      ]
    };
  },
  components: {
    HeadIndex
  },
  methods: {
    handlepassOne(index) {
      if (index == 0) {
        this.$router.push({
          path: '/changePasswordTwo'
        })
      }
    }
  }
}
</script>
<style lang="scss">
.passOne_box {
  width: 100%;
  height: 900px;
  background: rgba(237, 239, 243, 1);
}
.passOne_box_t {
  width: 1286px;
  font-size: 14px;
  font-weight: 400;
  color: #000000;
  line-height: 20px;
  padding: 124px 0 17px;
  border-bottom: 1px dashed #979797;
  margin: 0 auto;
}
.passOne_centent {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
.passOne_centent_box {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 199px;
  height: 252px;
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  border: 1px solid #e6e6e6;
  margin: 40px 10px 0;
  background: #fff;
  padding-top: 80px;
}
.passOne_centent_i {
  width: 27px;
  height: 32px;
}
.passOne_centent_itwo {
  width: 23px;
  height: 32px;
}
.passOne_centent_ithree {
  width: 32px;
  height: 27px;
}
.passOne_centent_top {
  color: #000;
  font-size: 14px;
  margin-top: 30px;
}
.passOne_centent_o {
  width: 9px;
  height: 9px;
  background: red;
  border-radius: 50%;
  margin-top: 60px;
}
</style>