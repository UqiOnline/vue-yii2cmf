<template>
    <div v-if="loading">loading...</div>
    <div class="article-list" v-else>
        <div class="media" v-for="article in articles">
            <div class="media-body">
                <h4 class="media-heading">
                    <a v-link="{ name: 'view', params: { id: article.id } }">{{ article.title }}</a>
                </h4>
                <div class="media-content">{{ article.desc }}</div>
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
            articles:[]
        }
    },
    ready() {
        this.fetchData()
    },
    watch:{
        '$route.params.cid' (val, oldVal){
            this.fetchData();
        }
    },
    methods:{
        fetchData() {
            var that = this;
            $.get('http://api.51siyuan.cn/v1/articles?cid=' + this.$route.params.cid, function(res){
                that.loading = false;
                that.articles = res;
                that.$parent.title = res[0].category;
            }, 'json')
        }
    }
}
</script>
