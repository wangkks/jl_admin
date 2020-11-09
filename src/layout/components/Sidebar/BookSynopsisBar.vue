<template>
  <div class="book-catalog">
    <div class="catalog-title">{{ bookDeatil.bookTitle }}</div>
    <div class="catalog-note">
      <div
        v-for="(item, index) in catalog"
        :class="['catalog-c', selected == index ? 'actived' : '']"
        @click="changeBtn(index)"
      >
        <img :src="selected == index ? item.iconred : item.icon" alt="" />
        <span>{{ item.title }}</span>
      </div>
    </div>
    <div class="dashed-line"></div>
    <div class="book-synopsis" v-if="selected == 0">
      <div class="book-synopsis-title">
        <img src="@/assets/second/icon_goldFoil.png" />
        讀四書大全説
      </div>

      <div class="book-synopsis-title">
        <Menu :children="menuData" :bookId="bookId" />
      </div>
      <!-- <el-timeline>
        <el-timeline-item
          v-for="(item, index) in activities"
          :key="index"
          :type="item.type"
          :size="item.size"
          @click.native="goSynopsis(item.id)"
        >
          {{ item.content }}
        </el-timeline-item>
      </el-timeline> -->
    </div>
    <div v-else>
      <div
        class="mynote-mine"
        v-for="(item, index) in mynoteData.rows"
        :key="index"
      >
        <div class="mynote-name">{{ item.bookName }}</div>
        <div class="mynote-t">引文</div>
        <div class="mynote-citation">{{ item.noteSrcWord }}</div>
        <div class="mynote-t tionred">笔记</div>
        <div class="mynote-n">{{ item.noteContent }}</div>
        <div class="mynote-time">
          <div class="btmbox_l">时间：{{ item.createTime }}</div>
          <div class="btmbox_r">
            来源：{{ item.bookName }}/{{ item.menuName }}
          </div>
        </div>
        <div class="mynote-btn">
          <div @click="editShow(item)">
            <img src="@/assets/edit.png" class="edit" />
          </div>
          <div @click="del(item.id, index)">
            <img src="@/assets/delete_red.png" class="delete" />
          </div>
        </div>
      </div>
    </div>

    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose"
    >
      <input type="text" class="node-text" v-model="noteContent" />
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="edit">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { booksDetail, menuTree } from '@/api/bookLibrary'
import { readNotesList, deleteReadNote, editReadNote } from '@/api/note'
import Menu from '@/views/resourceDetails/menu'

export default {
  name: 'BookSynopsisBar',
  components: {
    Menu
  },
  props: ['data'],
  data() {
    return {
      bookDeatil: {
        bookTitle: '诗国南京'
      },
      catalog: [
        { title: '目录', icon: require('@/assets/second/catalog.png'), iconred: require('@/assets/second/catalogred.png') },
        { title: '笔记', icon: require('@/assets/second/icon_mynote.png'), iconred: require('@/assets/second/icon_mynote_red.png') },
      ],
      selected: 0,
      menuData: [],
      mynoteData: [],
      bookId: '',
      dialogVisible: false,
      noteContent: ''
    };
  },

  async mounted() {
    this.bookId = this.$route.params.bookid

    const res = await menuTree({
      bookId: this.$route.params.bookid
    })

    this.menuData = res
  },
  methods: {
    async changeBtn(index) {
      this.selected = index;

      if (index == 1) {
        const res = await readNotesList({
          pageNum: 1,
          pageSize: 9999,
          bookId: this.$route.params.bookid,
          menuId: this.$route.params.id
        })

        this.mynoteData = res
      }
    },
    goSynopsis(id) {
      this.$router.push(`/myBook/resourceReading/${id}`);
    },
    editShow(data) {
      this.dialogVisible = true
      this.editId = data.id
    },
    // 编辑
    async edit(data) {
      const res = await editReadNote({
        id: this.editId,
        noteContent: this.noteContent
      })

      this.mynoteData.rows.map(item => {
        if (item.id == this.editId) {
          item.noteContent = this.noteContent
        }
      })

      this.noteContent = ''
      this.dialogVisible = false
    },
    // 删除
    del(_id, index) {
      this.$confirm('确定删除？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        deleteReadNote({
          id: _id
        })

        // 刷新
        this.changeBtn(1)
        this.$message({
          type: 'success',
          message: '删除成功!'
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    }
  }
};
</script>
<style lang="scss">
.book-synopsis {
  margin-top: 19px;
  .book-synopsis-title {
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #000000;
    margin-bottom: 13px;
    padding-left: 19px;
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
<style lang="scss" scoped>
.book-catalog {
  width: 210px;
  height: 100%;
  overflow: scroll;
  position: relative;
  .catalog-title {
    margin: 0 0 13px 19px;
    color: #363636;
    font-size: 14px;
  }
  .dashed-line {
    margin-top: 29px;
    height: 1px;
    border-bottom: 1px dashed #979797;
  }
  .catalog-note {
    display: flex;
    align-items: center;
    margin: 13px 0 0 19px;
    .catalog-c.actived {
      color: #d0021b;
      border: 1px solid #d0021b;
    }
    .catalog-c {
      width: 66px;
      height: 33px;
      border: 1px solid #4a4a4a;
      display: flex;
      font-size: 12px;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      img {
        width: 14px;
        height: 14px;
        margin-right: 2px;
      }
      &:last-child {
        border-left: none;
      }
    }
  }
  .mynote-mine {
    width: 200px;
    background-color: #fff;
    margin: 14px 5px 0 5px;
    .mynote-name {
      color: #000000;
      font-size: 16px;
      padding: 8px 0 14px 14px;
    }
    .mynote-t {
      width: 45px;
      height: 24px;
      font-size: 12px;
      font-weight: 600;
      color: #ffffff;
      text-align: center;
      line-height: 24px;
      background: #d0021b;
      margin: 0 0 13px 12px;
    }
    .mynote-citation {
      color: #000;
      font-size: 12px;
      padding: 0 17px 16px 10px;
    }
    .tionred {
      background: #99bfff;
    }
    .mynote-n {
      font-size: 12px;
      color: #000;
      font-weight: 400;
      line-height: 17px;
      padding: 0 5px 23px;
      border-bottom: 1px solid #979797;
      margin: 0 5px;
    }
    .mynote-time {
      font-size: 12px;
      color: #363636;
      padding: 14px 10px;
      line-height: 17px;
      border-bottom: 1px dashed #979797;
      .btmbox_r {
        color: #999999;
      }
    }
    .mynote-btn {
      width: 100%;
      height: 42px;
      display: flex;
      align-items: center;
      div {
        flex: 1;
        text-align: center;
        &:last-child {
          border-left: 1px dashed #dddddd;
        }
      }
      img {
        width: 15px;
        height: 15px;
      }
    }
  }
}
</style>