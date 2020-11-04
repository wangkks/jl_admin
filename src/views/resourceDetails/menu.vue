<template>
  <el-timeline>
    <el-timeline-item
      v-for="(item, index) in menu"
      :key="index"
      :type="item.type"
      :size="item.size"
      @click.native="goSynopsis(item.id)"
    >
      {{ item.menuName }}
      <menu-item v-if="item.children" :children="item.children"></menu-item>
    </el-timeline-item>
  </el-timeline>
</template>

<script>

export default {
  name: 'menuItem',
  props: ['menu'],
  data() {
    return {
    };
  },
  created() {
    console.log('thhis', this.menu)
  },
  methods: {
    goSynopsis(id) {
      this.$router.push(`/myBook/resourceReading/${id}`);
    }
  },
};
</script>
<style lang="scss">
/* reset element-ui css */
.resour_box {
  .resour_input .el-input__inner {
    width: 434px;
    height: 42px;
    color: #000;
    background: #f7f7f3;
    border-radius: 21px;
    border: 1px solid #c5c5c5;
  }
}
</style>
<style lang="scss">
.resour_box {
  width: 100%;
  height: auto;
  display: flex;
  background: rgba(237, 239, 243, 1);
}
.resour_box_right {
  width: auto;
  height: 100vh;
  overflow: scroll;
  margin-left: 30px;
}
.resour_box_t {
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
.resour_left {
  font-size: 14px;
  font-weight: 400;
  color: #000000;
  line-height: 20px;
  display: flex;
  align-items: center;
}
.resour_left_n {
  font-size: 24px;
  line-height: 35px;
}
.resour_totle {
  margin-left: 34px;
  font-size: 12px;
  font-weight: 400;
  color: #9b9b9b;
}
.resour_right {
  display: flex;
  align-items: center;
}
.resour_input {
  margin-right: 36px;
  position: relative;
}
.resour_input_i {
  width: 19px;
  height: 19px;
  position: absolute;
  right: 30px;
  top: 10px;
}
.resour_mine {
  width: 1100px;
  margin: 22px 70px 80px 0;
  display: flex;
  flex-wrap: wrap;
}
.resour_mine_box {
  width: 1100px;
  height: auto;
  background: #fff;
  margin: 0 10px 20px;
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  border: 1px solid #e6e6e6;
  padding: 20px 30px;
  display: flex;
  flex-direction: column;
}
.resour_mine_box_t {
  font-size: 14px;
  font-weight: 400;
  color: #d0021b;
  display: flex;
  align-items: center;
}
.resour_mine_box_t_i {
  width: 18px;
  height: 20px;
  margin-right: 6px;
}
.resour_mine_box_ce {
  font-size: 12px;
  font-weight: 400;
  color: #000000;
  line-height: 17px;
  letter-spacing: 1px;
  margin-top: 20px;
}
.more {
  color: #d0021b;
}
.resour_mine_centent {
  width: 1100px;
  background: #fff;
  margin: 0 10px 20px;
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  border: 1px solid #e6e6e6;
  padding: 20px 30px;
  display: flex;
  flex-direction: column;
}
.book_synopsis {
  margin-top: 14px;
  .book_synopsis_title {
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #000000;
    margin-bottom: 13px;
    img {
      width: 11px;
      height: 12px;
    }
  }
  .el-timeline-item {
    padding-bottom: 15px;
    .el-timeline-item__content {
      padding-top: 17px;
    }
    .el-timeline-item__node--normal {
      width: 0;
    }
    .el-timeline-item__tail {
      height: 60px;
    }
    .el-timeline-item__node--large {
      width: 15px;
      height: 5px;
      border-radius: 3px;
      top: 19px;
      background-color: #d0021b;
    }
  }
  .el-timeline .el-timeline-item:last-child .el-timeline-item__tail {
    display: block;
  }
}
</style>