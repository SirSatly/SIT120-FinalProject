<template>
    <div id="viewOverlay">
        <div id="overlayText"> 
            <div id="overlayExit" @click="$emit('deactivate')">×</div>  
            <input v-model.lazy="word.word" style="margin-top: 20px">
            <br>

            <div v-for="translation in word.translations" :key="translation.title">
                <br>
                <h2><input v-model.lazy="translation.title" placeholder="translation title"></h2> 
                <p><b>Translation: </b><input v-model.lazy="translation.translation"></p>
                <p><b>Transcription: </b><input v-model.lazy="translation.transcription"></p>
                <button @click="deleteTranslation(translation)">Delete Translation</button>
            </div>

            <div>
                <br>
                <h2>Notes</h2>
                <p><input v-model.lazy="word.notes"></p>
            </div>
            <button @click="add">Add Translation</button>
            <button @click="deleteWord">Delete Word</button>
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
                this.word.translations.push({translation: "", transcription: ""})
            },
            save() {
                this.$emit('input', this.word)
            },
            deleteTranslation(translation) {
                this.word.translations.splice(this.word.translations.indexOf(translation), 1);
            },
            deleteWord()
            {
                if (confirm("Are you sure you want to delete this word from the dictionary")) {
                    this.$emit('deactivate')
                    this.$emit('delete', this.word)
                }
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

    #overlayExit
    {
        float: right;
        font-size: xx-large;
        font-weight: bolder;
        color: red;
    }
</style>