<template>
    <div style="display: table;">
        <div v-for="dictionaryInfo in displayList" :key="dictionaryInfo.id" style="float: left;">
            <DictionaryItem :info="dictionaryInfo" />
        </div>
    </div>
</template>

<script>
import DictionaryItem from './DictionaryItem.vue';
export default {
    components: { DictionaryItem },
    props: {
        displayList: Array
    }
}
</script>