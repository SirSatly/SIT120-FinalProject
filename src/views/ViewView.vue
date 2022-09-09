<template>
    <div class="view">
        <section id="dictionaryInfo">
            <h1>{{dictionary.name}}</h1>
            <i>{{dictionary.firstLanguage}} → {{dictionary.secondLanguage}}</i>
            <p>{{dictionary.discription}}</p>
        </section>
        <DictionaryDisplay :words="dictionary.words" @activate="activateOverlay" />

        <ViewOverlay v-if="overlayActive" :word="overlayData" @deactivate="deactivateOverlay" />
    </div>
</template>

<script>
import DictionaryDisplay from '@/components/DictionaryDisplay.vue'
import ViewOverlay from '@/components/ViewOverlay.vue'
export default {
    name: 'ViewView',
    components: {
    DictionaryDisplay,
    ViewOverlay
    },
    data() {
        return {
            dictionary: this.$parent.getDictionary,
            overlayActive: false,
            overlayData: {}
        }
    },
    methods: {
        activateOverlay(word) {
            this.overlayActive = true;
            this.overlayData = word;
        },
        deactivateOverlay()
        {
            this.overlayActive = false;
            this.overlayData = {};
        }
    }
}
</script>

<style>
    #dictionaryInfo
    {
        padding: 10px 55px;
        text-align: center;
    }
</style>