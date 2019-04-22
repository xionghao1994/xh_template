import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes: [
    {
      path:'/login',
      // 简写加载路由&&懒加载
      component: resolve => require(['./components/login.vue'], resolve) 
    },
    {
      path:'/',
      redirect:'/dashboard'
    },
     {
       path:'/',
       component: resolve => require(['./components/common/Home.vue'], resolve),
       children:[
         {
           path:'/dashboard',
           component: resolve => require(['./components/page/dashboard.vue'], resolve),
           meta:{title:'系统首页'}
         },
         {
           path:'/table',
           component:resolve => require(['./components/page/table.vue'],resolve),
           meta:{title:'基础表格'}
         },
         {
           path:'/tabs',
           component:resolve => require(['./components/page/tabs.vue'],resolve),
           meta:{title:'tabs选项卡'}
         },
         {
           path:'/form',
           component:resolve => require(['./components/page/form.vue'],resolve),
           meta:{title:'form表单'}
         },
         {
           path:'/editor',
           component:resolve => require(['./components/page/editor'],resolve),
           meta:{title:'富文本编辑'}
         },
         {
           path:'/markdown',
           component:resolve => require(['./components/page/markdown.vue'],resolve),
           meta:{title:'markdown'}
         },
         {
           path:'/upload',
           component:resolve => require(['./components/page/upload.vue'],resolve),
           meta:{title:'文件上传'}
         },
         {
           path:'/icon',
           component:resolve => require(['./components/page/icon.vue'],resolve),
           meta:{title:'自定义图标'}
         },
         {
           path:'/charts',
           component:resolve => require(['./components/page/charts.vue'],resolve),
           meta:{title:'chart图表'}
         },
         {
           path:'/drag',
           component:resolve => require(['./components/page/drag.vue'],resolve),
           meta:{title:'拖拽列表'}
         },
         {
           path:'/dialog',
           component:resolve => require(['./components/page/drag.vue'],resolve),
           meta:{title:'拖拽弹框'}
         },
         {
           path:'/permission',
           component:resolve => require(['./components/page/permission.vue'],resolve),
           meta:{title:'权限测试'}
         },
         {
           path:'/404',
           component:resolve => require(['./components/page/404.vue'],resolve),
           meta:{title:'404错误'}
         }
       ]
     },
     {
       path:'/403',
       component: resolve => require(['./components/page/403.vue'], resolve)
     }
  ]
})
