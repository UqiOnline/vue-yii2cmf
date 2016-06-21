<template>
    <nav class="navbar navbar-default navbar-fixed-top">
        <div class="container">
            <div class="navbar-header">
                <a class="navbar-brand" v-link="'/home'">Yii2CMF</a>
            </div>

            <div class="pull-right">
                <ul class="nav navbar-nav">
                    <li v-for="nav in navs"><a v-link="{ name: 'list', params: { cid: nav.id } }">{{ nav.title }}</a></li>
                </ul>
            </div><!-- /.navbar-collapse -->
        </div>
    </nav>
</template>

<script>
import $ from 'jquery'
export default{
    data(){
        return {
            navs:[]
        }
    },
    ready() {
        this.fetchData()
    },
    methods:{
        fetchData() {
            var that = this;
            $.get('http://api.51siyuan.cn/v1/navs', function(res){
                that.navs = res;
            }, 'json')
        }
    }
}
</script>
<style scoped>
    .v-link-active,.v-link-active:hover{
        color: #555!important;
        background-color: #e7e7e7!important;
    }
    .navbar-header {
        float: left;
    }
    .navbar-nav {
        float: left;
        margin: 0;
    }
    .navbar-nav>li {
        float: left!important;
    }
    .navbar-nav>li>a {
        padding-top: 15px;
        padding-bottom: 15px;
    }
</style>