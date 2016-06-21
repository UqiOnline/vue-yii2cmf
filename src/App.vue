<template>
    <div id="app">
        <navbar></navbar>
        <div class="container">
            <!--动态props,v-bind:current或者缩写:current-->
            <breadcrumb :current="title"></breadcrumb>
            <!-- 路由外链 -->
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
    import Breadcrumb from './components/Breadcrumb'
    import Navbar from './components/Navbar'
    export default{
        components: {
            Breadcrumb,
            Navbar
        },
        data(){
            return {
                title:''
            };
        }
    }
</script>