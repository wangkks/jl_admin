<template>
  <div>
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
      class="item"
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
      bookId: ''
    };
  },
  created() {
    this.bookId = this.$route.params.bookid || this.$route.params.id
  },
  methods: {
    goSynopsis(id) {
      this.$router.push(`/myBook/resourceReading/${this.bookId}/${id}`);
    }
  },
};
</script>
<style lang="scss">
.item {
  padding-left: 10px;
  margin-bottom: 10px;
  cursor: pointer;
  font-size: 12px;
}
</style>