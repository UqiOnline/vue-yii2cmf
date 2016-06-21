<template>
    <ol class="breadcrumb" v-if="current">
        <li><a v-link="'/home'">首页</a></li>
        <li v-if="current">{{ current }}</li>
    </ol>
</template>
<script>
    export default{
        props:['current']
    }
</script>