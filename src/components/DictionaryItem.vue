<template>
    <div id="dictionaryItem">
        <router-link :to="{path: '/' + info.id + '/'}">
            <div id="itemName">{{info.name}}</div>
            <div id="itemText"><i>{{info.creater}}</i> <br> {{info.firstLanguage}} → {{info.secondLanguage}}</div>
        </router-link>
    </div>
</template>

<script>
    export default {
        props: {
            info: Object
        }
    }
</script>

<style>
    #dictionaryItem {
        background: #B5E3F2;
        display: table;
        padding: 10px;
        border-radius: 10px;
        margin: 30px;
    }

    #itemName {
        font-size: 30px;
        font-weight: bold;
        float: left;
        width: 250px;
        text-align: center;
    }

    #itemText {
        font-size: 20px;
        float: left;
        width: 250px;
        text-align: right;
    }
</style>