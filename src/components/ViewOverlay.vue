<template>
    <div id="viewOverlay">
        <div id="overlayText"> 
            <div id="overlayExit" @click="$emit('deactivate')">×</div>
            <h1>{{word.word}}</h1>
            <br>

            <div v-for="translation in word.translations" :key="translation.title">
                <h2>{{translation.title}}</h2>
                <p v-if="translation.translation != ''"><b>Translation: </b>{{translation.translation}}</p>
                <p v-if="translation.transcription != ''"><b>Transcription: </b>{{translation.transcription}}</p>
                <br>
            </div>

            <div v-if="word.notes != ''">
                <h2>Notes</h2>
                <p>{{word.notes}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            word: Object
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