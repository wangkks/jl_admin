<template>
  <div class="menu-box">
    <!-- <el-timeline>
    <el-timeline-item>
      {{ item.menuName }}
      <menu-item v-if="item.children" :children="item.children"></menu-item>
    </el-timeline-item>
  </el-timeline> -->
    <div
      v-for="(item, index) in children"
      :key="index"
      @click.stop="goSynopsis(item.id)"
      :class="['item', { active: checkedId == item.id }]"
    >
      {{ item.menuName }}
      <menu-item v-if="item.children" :children="item.children"></menu-item>
    </div>
  </div>
</template>

<script>
export default {
  name: 'menuItem',
  props: ['children'],
  data() {
    return {
      bookId: '',
      checkedId: ''
    };
  },
  watch: {
    "$route": "getPath"
  },
  created() {
    this.bookId = this.$route.params.bookid
    this.getPath()
  },
  methods: {
    getPath() {
      Array.isArray(this.children) && this.children.map(item => {
        if (item.id == this.$route.params.id) {
          this.checkedId = item.id
        }
      })
    },
    goSynopsis(id) {
      this.$router.push(`/myBook/resourceReading/${this.bookId}/${id}`);
    }
  },
};
</script>
<style lang="scss" scope>
.menu-box {
  .item {
    padding-left: 10px;
    margin-bottom: 10px;
    cursor: pointer;
    font-size: 12px;
  }
  .active {
    color: #d0021b;
  }
}
</style>