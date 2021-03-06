import Login from './views/Login.vue'
import NotFound from './views/404.vue'
import Home from './views/Home.vue'
import Main from './views/Main.vue'
import Table from './views/nav1/Table.vue'
import Table1 from './views/nav1/Table1.vue'
import Table2 from './views/nav1/Table2.vue'
import Table3 from './views/nav1/Table3.vue'
import Table4 from './views/nav1/Table4.vue'
import Table5 from './views/nav1/Table5.vue'
import Form from './views/nav1/Form.vue'
import user from './views/nav1/user.vue'
import Page4 from './views/nav2/Page4.vue'
import Page5 from './views/nav2/Page5.vue'
import Page6 from './views/nav3/Page6.vue'
import echarts from './views/charts/echarts.vue'
import table from "./views/nav1/Table.vue"
import dayReport from "./views/KPI/day.vue"
import weekReport from "./views/KPI/week.vue"
import monthReport from "./views/KPI/month.vue"
let routes = [
    {
        path: '/login',
        component: Login,
        name: '',
        hidden: true
    },
    {
        path: '/404',
        component: NotFound,
        name: '',
        hidden: true
    },
    //{ path: '/main', component: Main },
    {
        path: '/',
        component: Home,
        name: '主页',
        iconCls: 'el-icon-message',//图标样式class
        //leaf: true,//只有一个节点
        children: [
            { path: '/main', component: Main, name: '主页', hidden: false },
            { path: '/table', component: Table, name: '表格' },
            { path: '/table1', component: Table1, name: '表格1' },
            { path: '/table2', component: Table2, name: '表格2' },
            { path: '/table3', component: Table3, name: '表格3' },
            { path: '/table4', component: Table4, name: '表格4' },
            { path: '/table5', component: Table5, name: '表格5' },
            { path: '/form', component: Form, name: 'Form' },
            { path: '/user', component: user, name: '列表' },
        ]
    },
    {
        path: '/',
        component: Home,
        name: '工作汇报',
        iconCls: 'fa fa-id-card-o',
        children: [
            { path: '/dayReport', component: dayReport, name: '日报' },
            { path: '/weekReport', component: weekReport, name: '周报' },
            { path: '/monthReport', component: monthReport, name: '月报' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '绩效考核',
        iconCls: 'fa fa-address-card',
        //leaf: true,//只有一个节点
        children: [
            { path: '/page6', component: Page6, name: '绩效考核表' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: 'Charts',
        iconCls: 'fa fa-bar-chart',
        children: [
            { path: '/echarts', component: echarts, name: 'echarts' }
        ]
    },
    {
        path: '*',
        hidden: true,
        redirect: { path: '/404' }
    }
];

export default routes;