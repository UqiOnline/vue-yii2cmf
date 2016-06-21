<template>
    <div class="page-header"><h2>最新文章</h2></div>
    <div v-if="loading">loading...</div>
    <div class="article-list" v-else>
        <div class="media" v-for="article in articles">
            <div class="media-body">
                <h4 class="media-heading">
                    <a v-link="{ name: 'view', params: { id: article.id } }">{{ article.title }}</a>
                </h4>
                <div class="media-content">{{{ article.desc }}}</div>
                <div class="media-action">
                    <span class="time"><i class="fa fa-clock-o"></i> {{ article.published_at }}</span>
                    <span class="views"><i class="fa fa-eye"></i> 浏览 {{ article.view }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import $ from 'jquery'

export default{
    data(){
        return {
            loading:true,
            articles:[],
        }
    },
    ready() {
        this.$parent.title = ''
        this.fetchData()
    },
    methods:{
        fetchData() {
            var that = this;
            $.get('http://api.51siyuan.cn/v1/articles', function(res){
                that.loading = false;
                that.articles = res;
            }, 'json')
        }
    }
}
</script>
<style scoped>
    .page-header {
        margin: 0 0 20px;
        padding-bottom: 9px;
        border-bottom: 1px solid #eee;
    }
    .page-header h2 {
        font-size: 16px;
        margin: 1px 0;
        display: inline-block;
    }
</style>