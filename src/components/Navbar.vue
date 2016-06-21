<template>
    <nav class="navbar navbar-default navbar-static-top">
        <div class="container">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-7" aria-expanded="false">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" v-link="'/home'">Yii2CMF</a>
            </div>

            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-7">
                <ul class="nav navbar-nav" v-for="nav in navs">
                    <li><a v-link="{ name: 'list', params: { cid: nav.id } }">{{ nav.title }}</a></li>
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
</style>