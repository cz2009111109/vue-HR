<template >
<el-table
    :data="tableData3"
    style="width: 100%" border="true">
    <el-table-column type="expand">
      <template slot-scope="props" >
       <el-table border="true"  style="width:100%;">
          <el-table-column type="name" label="名称" >
          </el-table-column>
          <el-table-column type="date" label="时间" >
          </el-table-column>
          <el-table-column type="address" label="地址" >
          </el-table-column>
        </el-table>
      </template>
    </el-table-column>
    <el-table-column
      label="商品 ID"
      prop="id">
    </el-table-column>
    <el-table-column
      label="商品名称"
      prop="name">
    </el-table-column>
    <el-table-column
      label="描述"
      prop="desc">
    </el-table-column>
  </el-table>
      </template>
<script>
  export default {
    data() {
      return {
        tableData3: [{
          date: '2016-05-03',
          id:'1',
          desc:'上海市普陀区金沙江路',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          id:'2',
          desc:'上海市普陀区金沙江路',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          id:'3',
          desc:'上海市普陀区金沙江路',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          id:'4',
          desc:'上海市普陀区金沙江路',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-08',
          name: '王小虎',
          id:'5',
          desc:'上海市普陀区金沙江路',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-06',
          name: '王小虎',
          id:'6',
          desc:'上海市普陀区金沙江路',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-07',
          name: '王小虎',
          id:'7',
          desc:'上海市普陀区金沙江路',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
        multipleSelection: []
      }
    },

    methods: {
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      }
    }
  }
</script>