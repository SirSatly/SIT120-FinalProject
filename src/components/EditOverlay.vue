<template>
    <div id="viewOverlay">
        <div id="overlayText"> 
            <div id="overlayExit" @click="$emit('deactivate')">×</div>  
            <input v-model.lazy="word.word">
            <br>

            <div v-for="translation in word.translations" :key="translation.title">
                <h2><input v-model.lazy="translation.title"></h2>
                <p><b>Translation: </b><input v-model.lazy="translation.translation"></p>
                <p><b>Transcription: </b><input v-model.lazy="translation.transcription"></p>
                <br>
            </div>

            <div>
                <h2>Notes</h2>
                <p><input v-model.lazy="word.notes"></p>
            </div>
            <button @click="add">Add Translation</button>
            <button @click="save">Save</button>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['value'],
        data() {
            return {
                word: structuredClone(this.value)
            }
        },
        methods: {
            add() {
                this.word.translations.push({})
            },
            save() {
                this.$emit('input', this.word)
            }
        }
    }
</script>

<style>
    #viewOverlay 
    {
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(45, 45, 34, 0.5);
        z-index: 2;
        cursor: pointer;
    }

    #overlayText
    {
        width: 50vw;
        height: 75vh;
        margin-top: 13vh;
        margin-left: 25vw;
        background-color: #f5f3dc;
        text-align: center;
        overflow: scroll;
    }

    #overlayExit
    {
        float: right;
        font-size: xx-large;
        font-weight: bolder;
        color: red;
    }
</style>