<template>
<section>
  <h3>绩效考核表</h3>
  <div class="overf">
    <div id="example-container" class="wrapper">
      <HotTable :root="test" :settings="hotSettings"></HotTable>
    </div>
  </div>

</section>

</template>

<script>
    
   import HotTable from '@handsontable/vue';
  import 'handsontable/languages/zh-CN.js';
  import Vue from 'vue';

  export default {
      data: function() {
        return {
          test: "test-hot",
          hotSettings: {
            data:[[3,4,2],[4],[5],[6]], // 数据在这个里面,由数据填充表
            startRows: 10, //初始行列数
            startCols: 35,
            minRows: 1, //最小行列
            minCols: 1,
            rowHeaders: true, //行表头
            colHeaders: [
              "计划工作事项",
              "计划工作成果描述",
              "8月完成情况",
              "9月计划工作事项",
              "分数上限",
              "标准分数",
              "分数下限",
              "评分区分",
              "自评",
              "复评",
              "合计"
            ], //自定义列表头or 布尔值
            minSpareCols: 1, //列留白
            // minSpareRows: 2, //行留白
            className: "htCenter",
            currentRowClassName: "currentRow", //为选中行添加类名，可以更改样式
            currentColClassName: "currentCol", //为选中列添加类名
            autoWrapRow: true, //自动换行
            language:'zh-CN',
            sortIndicator: true,//排序
            columnSorting: {
              column: 0,
              sortOrder: 'desc'
            },
            contextMenu: [  
              "row_above",  
              "row_below",  
              "col_left",  
              "col_right",  
              "---------",  
              "remove_row",  
              "remove_col",  
              "---------",  
              "alignment", 
              'make_read_only', 
              "borders",
              "copy",  
              "cut"
            ],  
            //右键效果
            fillHandle: true, //选中拖拽复制 possible values: true, false, "horizontal", "vertical"
            fixedColumnsLeft: 0, //固定左边列数
            fixedRowsTop: 1, //固定上边行数
            columns: [
              //添加每一列的数据类型和一些配置
              {},
              {},
              {},
              {},
              { type: "numeric" }, //数值
              {
                type: "dropdown",
                source: ["男", "女"],
                strict: false
              },
              {
                type: "date", //时间格式
                dateFormat: "YYYYMMDD",
                correctFormat: true,
                defaultDate: "19000101"
              },
              {},
              {
                type: "dropdown", //下拉选择
                source: [
                  "空腹血糖",
                  "早餐2+小时血糖",
                  "午餐2+小时血糖",
                  "晚餐2+小时血糖"
                ],
                strict: false //是否严格匹配
              },
              {},
              {}
            ],
            manualColumnFreeze: true, //手动固定列
            manualColumnMove: true, //手动移动列
            manualRowMove: true, //手动移动行
            manualColumnResize: true, //手工更改列距
            manualRowResize: true, //手动更改行距
            customBorders: [], //添加边框
            columnSorting: true, //排序
            comments: true, //添加注释
            stretchH: "all", //根据宽度横向扩展，last:只扩展最后一列，none：默认不扩展
            afterChange: function (changes, source) { //数据改变时触发此方法
              console.log(this.getData());
           },
          }
        };
       
      },
      name: "SampleApp",
      components: {
        HotTable
      },

  }
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
section{
  width: 100%;
  height: 100%;
  overflow: hidden;
  
}
.overf{
  width: 100%;
  height: 600px;
  overflow: hidden;
}
#example-container{
  overflow: auto;
  width: 100%;
  height: 100%;
}
h3{
  width: 100%;
  background-color: burlywood;
}
button {
  
  margin: 20px 20px;
}
.handsontable .currentRow {
  background-color: #b6bada;
}
.handsontable .currentCol {
  background-color: #d1dfd7;
}
</style>
