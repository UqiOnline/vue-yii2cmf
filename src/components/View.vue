<template>
    <div v-if="loading">loading</div>
    <div v-else>
        {{{ article.html }}}
    </div>
</template>

<script>
import $ from 'jquery'

export default {
    data () {
        return {
            loading:true
        }
    },
    ready() {
        var that = this;
        $.get('http://api.51siyuan.cn/v1/articles/' + this.$route.params.id, function(res){
            that.loading = false;
            that.article = res;
            that.$parent.title = res.title;
        }, 'json')
    }
}
</script>
