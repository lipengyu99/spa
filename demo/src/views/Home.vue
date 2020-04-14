<template>
  <div class="home">
    <img src="../assets/logo.png" >
      <el-input
    placeholder="请输入内容"
    v-model="input"
    clearable>
  </el-input>
  <div class="btn">
    <el-button type="warning" round>发送请求</el-button>
  </div>
  
   <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>


export default {

  data() {
    return {
      input:'',
      // tableData: [{
      //       date: '2016-05-02',
      //       name: '王小虎',
      //       address: '上海市普陀区金沙江路 1518 弄'
      //     }, {
      //       date: '2016-05-04',
      //       name: '王小虎',
      //       address: '上海市普陀区金沙江路 1517 弄'
      //     }, {
      //       date: '2016-05-01',
      //       name: '王小虎',
      //       address: '上海市普陀区金沙江路 1519 弄'
      //     }, {
      //       date: '2016-05-03',
      //       name: '王小虎',
      //       address: '上海市普陀区金沙江路 1516 弄'
      //     }]
      tableData:[],
    }
  },
  methods: {
    async fetch(){
       const res = await this.$http.get('/get_qiye?ENTNAME=加贝')
     // this.tableData = res.data
        window.console.log(res.data)
     
      },
    
  },
  created() {
    // this.$axios.get('/1/get_qiye?ENTNAME=加贝').then(res =>{
    //   console.log(res);
      
    // }).catch(err=>{
    //   console.log(err)
    // })
    this.fetch()
  },
}
</script>
<style scoped>
/* h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
} */
.btn{
  padding: 10px;
}
</style>