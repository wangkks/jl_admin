<template>
  <div class="delete-box">
    <div class="mask"></div>
    <div v-show="showBtn" class="mynote_delebox">
      <div class="mynote_delebox_top">
        <div class="mynote_delebox_text">删除笔记</div>
        <img src="@/assets/delete_red.png" alt="" class="delebox_text_i" />
        <div>确认删除本条笔记吗？</div>
        <i class="el-icon-circle-close close"></i>
      </div>
      <div class="mynote_delebox_btm">
        <div class="delebox_btm btml">确认</div>
        <div class="delebox_btm rtml">取消</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: [],
  data() {
    return {
      showBtn: true
    };
  },
  mounted() { },
  computed: {},
  methods: {},
};
</script>
<style lang="scss">
.icon {
  width: 14px;
  height: 14px;
  margin: 0 16px 0 0;
}
</style>
<style lang='scss' scoped>
.delete-box {
}

.mask {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}

.mynote_delebox {
  width: 368px;
  height: 249px;
  background: #ffffff;
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.05);
  border: 1px solid #e6e6e6;
  margin-left: 15px;

  .mynote_delebox_top {
    display: flex;
    flex-direction: column;
    text-align: center;
    font-size: 14px;
    position: relative;
  }
  .mynote_delebox_text {
    width: 81px;
    height: 24px;
    line-height: 24px;
    text-align: center;
    background: #d0021b;
    font-size: 12px;
    font-weight: 600;
    color: #ffffff;
    margin: 27px auto 40px;
  }
  .delebox_text_i {
    width: 15px;
    height: 15px;
    margin: 0 auto 12px;
  }
  .close {
    position: absolute;
    right: 18px;
    top: 10px;
    color: #9b9b9b;
  }
  .mynote_delebox_btm {
    display: flex;
    justify-content: space-between;
    border-top: 1px solid #979797;
    margin-top: 56px;
    padding-top: 10px;
  }
  .delebox_btm {
    width: 183px;
    height: 38px;
    font-size: 12px;
    font-weight: 400;
    text-align: center;
    line-height: 38px;
    cursor: pointer;
  }
  .btml {
    color: #d0021b;
    border-right: 2px solid #979797;
  }
  .rtml {
    color: #363636;
  }
}
</style>
