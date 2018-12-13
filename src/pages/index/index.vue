<template>
  <div id="wrapper">
    <div class="wrapper">
      <div class="head">
        <h3>我的频道</h3>
        <span>最多可选3个</span>
        <span class="jilu">
          <span>{{activeNum}}</span>/3</span>
      </div>
      <div class="mainCon">
        <div class="cont">
          <span v-for="(item,index) in icons" :key="index" @click="choose(index)" :class="{activeSpan:changeblue[index] == index}" class="iconCon">{{item.title}}</span>
        </div>
        <p>
          <span style="margin:6px;">*</span>行业根据优聘H5上面的来</p>
        <div style="text-align:center;">
          <div class="btn" style="margin-right:30px;" @click="reset">重置</div>
          <div class="btn activeBtn" @click="choice">确认</div>
          <div>选中的:{{actSpan}}</div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
// import card from '@/components/card'
import _ from "lodash";

export default {
  data() {
    return {
      motto: "Hello World",
      activeNum: 0,
      changeblue: [],
      actSpan: [],
      icons: [
        {
          title: "PE/AC/FA",
          type: false
        },
        {
          title: "互联网",
          type: false
        },
        {
          title: "会计/财务服务",
          type: false
        },
        {
          title: "快递消费品",
          type: false
        },
        {
          title: "人力资源服务",
          type: false
        },
        {
          title: "软硬件/通信/人工智能",
          type: false
        },
        {
          title: "建筑工程/房地产",
          type: false
        },
        {
          title: "市场研究/行业数据库",
          type: false
        },
        {
          title: "律师事务所",
          type: false
        },
        {
          title: "期货",
          type: false
        },
        {
          title: "旅游/酒店",
          type: false
        },
        {
          title: "零售贸易",
          type: false
        },
        {
          title: "能源/化工/现代农业",
          type: false
        },
        {
          title: "教育培训",
          type: false
        }
      ]
    };
  },

  computed: {},
  methods: {
    choose(index) {
      if (this.activeNum < 3) {
        if (this.changeblue[index] == index) {
          this.activeNum -= 1;
          this.changeblue[index] = null;
          console.log("1111111111119999", this.changeblue[index], index);
          return;
        } else {
          this.changeblue[index] = index;
          this.activeNum += 1;
        }
      } else if (this.activeNum == 3) {
        if (this.changeblue[index] == index) {
          this.activeNum -= 1;
          this.changeblue[index] = null;
          return;
        }
      } else {
        console.log("错错错");
      }
    },
    reset() {
      this.changeblue = [];
      this.activeNum = 0;
      this.actSpan = [];
    },
    choice() {
      console.log(this.changeblue);
      for (var i = 0; i < this.icons.length; i++) {
        if (this.changeblue[i] == i) {
          this.actSpan.push(this.icons[i].title);
        }
      }
      console.log(this.actSpan);
    }
  }
};
</script>

<style scoped>
#wrapper {
  padding: 10px;
}
.head {
  height: 40px;
  line-height: 40px;
}
.head h3 {
  float: left;
}
.head span {
  margin-left: 10px;
  font-size: 14px;
  color: #ccc;
}
.head .jilu {
  float: right;
}
.head .jilu span {
  color: #6c7de5;
}

.cont .iconCon {
  font-size: 15px;
  color: #6e6c6c;
  display: inline-block;
  margin: 10px 10px 0 0;
  padding: 10px;
  background-color: #fff;
}
.mainCon p {
  color: #ff936e;
  text-align: center;
  margin: 28% 0;
  font-size: 16px;
  font-family: "微软雅黑";
}


.mainCon .btn {
  width: 100px;
  height: 36px;
  line-height: 36px;
  text-align: center;
  border-radius: 20px;
  font-size: 16px;
  color: #3598ff;
  display: inline-block;
  border: 1px solid #3598ff;
}
.activeBtn {
  background-color: #3598ff;
  color: #fff !important;
}
.activeSpan {
  color: blue !important;
}
</style>
