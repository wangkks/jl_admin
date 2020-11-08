<template>
  <div class="advance_box">
    <HeadIndex></HeadIndex>
    <div class="advance_box_t">
      <div class="advance_box_span">
        <div>高级检索</div>
      </div>
    </div>
    <div class="advance_centent">
      <div
        class="advance_centent_wrap"
        v-for="(item, index) in searchList"
        :key="index"
      >
        <div class="advance_centent_add" @click="remove(index)">
          <i class="el-icon-minus addplus"></i>
        </div>
        <div class="advance_centent_add" @click="add(item)">
          <i class="el-icon-plus addplus"></i>
        </div>
        <el-select
          v-model="item.combinationCondition"
          placeholder="请选择"
          class="advance_select_input"
        >
          <el-option
            v-for="item in conditionArr"
            :key="item.id"
            :label="item.text"
            :value="item.id"
          >
          </el-option>
        </el-select>
        <el-select
          v-model="item.queryField"
          placeholder="请选择"
          class="advance_select_input"
        >
          <el-option
            v-for="item in options"
            :key="item.id"
            :label="item.text"
            :value="item.id"
          >
          </el-option>
        </el-select>
        <input
          type="text"
          placeholder="关键字"
          class="input"
          v-model="item.keyword"
        />
      </div>

      <div class="advance_select">
        <el-checkbox-group v-model="checkedCities">
          <el-checkbox v-for="item in cities" :label="item" :key="item"
            >{{ item }}
          </el-checkbox>
        </el-checkbox-group>
        <div class="advance_select_btn" @click="clickBtn()">搜索</div>
      </div>
    </div>
  </div>
</template>

<script>
import HeadIndex from '@/components/head/index.vue'

export default {
  data() {
    return {
      checkedCities: ['关联字检索', '忽略一个字'],
      cities: ['关联字检索', '同义词关联', '忽略一个字', '忽略标点'],
      options: [
        {
          id: 'menuName',
          text: '文章名'
        },
        {
          id: 'fullText',
          text: '文章内容'
        },
        {
          id: 'bookName',
          text: '书名'
        },
        {
          id: 'mainResponsibility',
          text: '作者'
        },
        {
          id: 'publisher',
          text: '出版社'
        },
        {
          id: 'congbian',
          text: '丛编'
        },
        {
          id: 'bookDesc',
          text: '图书简介'
        },
        {
          id: 'fullText1',
          text: '正文'
        },
      ],
      conditionArr: [
        {
          id: 'and',
          text: '与'
        },
        {
          id: 'or',
          text: '或'
        },
        {
          id: 'not',
          text: '非'
        }
      ],
      searchList: [
        {
          queryField: "bookName",
          keyword: "应天",
          combinationCondition: "and"
        }
      ]
    };
  },
  components: {
    HeadIndex
  },
  methods: {
    clickBtn() {
      this.$store.commit('search/SET_SEARCHDATA', {
        filter: this.checkedCities,
        list: this.searchList
      })

      this.$router.push({
        path: '/detectionResult'
      })
    },
    add(item) {
      let _item = JSON.parse(JSON.stringify(item))
      this.searchList.push(_item)
    },
    remove(index) {
      this.searchList.splice(index, 1)
    }
  }
}
</script>
<style lang="scss">
.advance_box {
  width: 100%;
  height: 900px;
  background: rgba(237, 239, 243, 1);
}
.advance_box_t {
  width: 1286px;
  padding: 90px 0 44px;
  border-bottom: 1px dashed #979797;
  margin: 84px auto 0;
}
.advance_box_span {
  font-size: 24px;
  font-weight: 400;
  color: #000000;
  line-height: 20px;
  display: flex;
  align-items: flex-end;
}
.advance_box_totle {
  font-size: 14px;
  font-weight: 400;
  color: #000000;
  margin-left: 7px;
}
.advance_box_num {
  color: #d0021b;
}
.advance_centent {
  width: 900px;
  margin: 52px auto 0;
}
.advance_centent_wrap {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}
.advance_centent_add {
  width: 20px;
  height: 20px;
  border: 1px solid #bcbcbc;
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-right: 20px;
}
.addplus {
  color: #bcbcbc;
}
.advance_select {
  margin-top: 80px;
  margin: 80px 0 0 100px;
}
.advance_select_btn {
  width: 97px;
  height: 30px;
  background: #d0021b;
  font-size: 14px;
  color: #ffffff;
  line-height: 30px;
  text-align: center;
  border-radius: 30px;
  margin-top: 60px auto 0;
  cursor: pointer;
  float: right;
}

.advance_centent_wrap {
  font-size: 12px;
}

.advance_centent_wrap .input {
  width: 300px;
  height: 30px;
  border: 1px solid #ccc;
  padding-left: 10px;
}

.advance_select_input {
  width: 200px;
  height: 30px;
  display: flex;
  align-items: center;
  margin: 0 20px;
}
.advance_select_input input {
  width: 200px;
}
</style>