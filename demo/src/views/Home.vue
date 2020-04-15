<template>
  <div class=home>
    <img src=../assets/logo.png >
      <el-input
    placeholder=请输入内容
    v-model=input
    clearable>
  </el-input>
  <div class=btn>
    <el-button type=warning round>发送请求</el-button>
  </div>
<!-- <div>{{tableData}}</div> -->

   <el-table
      :data=tableData
      style="width: 100%">
      <el-table-column
        prop="INDUSTRYPHY"
        label="字母"
        >
      </el-table-column>
      <el-table-column
        prop="REGORG_CN"
        label="名称"
       >
      </el-table-column>
      <el-table-column
        prop="OPSCOPE"
        label="业务范围">
      </el-table-column>
      <el-table-column
        prop="REGCAPCUR_CN"
        label="数字1">
      </el-table-column>
      <el-table-column
        prop="REGCAP"
        label="数字2">
      </el-table-column>
      <el-table-column
        prop="OPTO"
        label="时间">
      </el-table-column>
      <el-table-column
        prop="ENTNAME"
        label="公司名称">
      </el-table-column>
      <el-table-column
        prop="ESTDATE"
        label="注册日期">
      </el-table-column>
      <el-table-column
        prop="OPFROM"
        label="到期日期">
      </el-table-column>
      <el-table-column
        prop="REGSTATE_CN"
        label="注销">
      </el-table-column>
       <el-table-column
        prop="NAME"
        label="法人">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>


export default {

  data() {
    return {
      input:'',
      tableData: [ {
            "INDUSTRYPHY": "L",
            "REGORG_CN": "赤峰市工商行政管理局红山区分局",
            "OPSCOPE": "餐饮管理服务；主食品、菜肴加工销售、烟、酒水销售（分支机构经营）。（国家法律、法规规定应经审批的未获审批前不得生产经营）",
            "REGCAPCUR_CN": "0",
            "REGCAP": "11",
            "OPTO": "2026-12-30 00:00:00",
            "ENTNAME": "赤峰市加贝餐饮管理有限公司",
            "ESTDATE": "2007-05-24 00:00:00",
            "OPFROM": "2007-05-24 00:00:00",
            "REGSTATE_CN": "吊销，未注销",
            "NAME": "于*"
        }, {
            "INDUSTRYPHY": "H",
            "REGORG_CN": "赤峰市工商行政管理局红山区分局",
            "OPSCOPE": "主食、热菜肴加工销售、酒水销售（在许可有效期内从事经营活动）。（国家法律、法规规定应经审批的未获审批前不得生产经营）",
            "REGCAPCUR_CN": "0",
            "ENTNAME": "赤峰市加贝餐饮管理有限公司八分店",
            "ESTDATE": "2007-08-03 00:00:00",
            "REGSTATE_CN": "吊销，未注销",
            "NAME": "于*"
        },
        {
            "INDUSTRYPHY": "F",
            "REGORG_CN": "翁牛特旗市场监督管理局",
            "OPSCOPE": "许可经营项目：无 一般经营项目：服装、鞋帽、被褥、床上用品、针纺织品、食品购销；粮食购销",
            "REGCAPCUR_CN": "0",
            "REGCAP": "6",
            "ENTNAME": "翁牛特旗加贝商贸有限公司",
            "ESTDATE": "2015-12-04 00:00:00",
            "OPFROM": "2015-12-04 00:00:00",
            "REGSTATE_CN": "注销",
            "NAME": "赵*"
        }
]
     // tableData:[],
    }
  },
  methods: {
    // async fetch(){
    //    const res = await this.$http.get('/query')
    //   this.tableData = res.data
    //     window.console.log(res.data)
     
    //   },
    
  },
  created() {
    this.$axios.get('/1/get_qiye?ENTNAME=加贝',({
   // baseURL: 'http://127.0.0.1:8080',
    headers: { 'AppKey': '688337637353717760' },
    withCredentials: false,
    
    })).then(res =>{
      console.log(res);
      
    }).catch(err=>{
      console.log(err)
    })
  
  //  this.fetch()
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