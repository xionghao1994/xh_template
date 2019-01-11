<template>
 <div class="wrapper">
     <v-Header></v-Header>
     <v-Sidebar></v-Sidebar> 
    <div class="content-box" :class="{'content-collapse':collapse}">
        <v-Tags></v-Tags>
        <div class="content">
            <transition name="move" mode="out-in">
                <keep-alive :include="tagsList">
                    <router-view></router-view>
                </keep-alive>
            </transition>
        </div>
    </div>
    </div>
</template>
<script>
import Header from './Header.vue';
import Sidebar from './Sidebar.vue';
import Tags from './Tags.vue';
import bus from './bus';
export default {
    data(){
        return {
            tagsList: [],
            collapse: false
        }
    },
    components:{
        'v-Header':Header,
        'v-Sidebar':Sidebar,
        'v-Tags':Tags
        
    },
    created(){
        bus.$on('collapse', msg => {
            this.collapse = msg;
        })

        // 只有在标签页列表里的页面才使用keep-alive，即关闭标签之后就不保存到内存中了。
        bus.$on('tags', msg => {
            let arr = [];
            for(let i = 0, len = msg.length; i < len; i ++){
                msg[i].name && arr.push(msg[i].name);
            }
            this.tagsList = arr;
        })
    }
}
</script>
<style scoped>
.wrapper {
    width: 100%;
    height: 100%;
    overflow: hidden;
}
.content-box {
    position: absolute;
    left: 200px;
    right: 0;
    top: 70px;
    bottom: 0;
    padding-bottom: 30px;
    -webkit-transition: left .3s ease-in-out;
    transition: left .3s ease-in-out;
    background: #f0f0f0;
}
.content {
    width: auto;
    height: 100%;
    padding: 10px;
    overflow-y: scroll;
    box-sizing: border-box;
}
.content-collapse {
    left: 65px;
}
</style>