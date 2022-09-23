<template>
    <!-- Div to contain the dictionary -->
    <section id="dictionaryDisplay">

        <!-- Search box to find word in the dictionary -->
        <input id="dictionarySearch" placeholder="Search:" v-model="searchQuery">

        <!-- Div which contains all the words in the dictionary -->
        <div id="dictionary" v-for="word in filteredWords" :key="word.word"> 
            <div class="word" @click="$emit('activate', word)">{{word.word}}</div>
        </div>
    </section>
</template>

<script>
export default {
    props: {
        words: Array
    },
    data() {
        return {
            searchQuery: ""
        }
    },
    computed: {
        filteredWords() {
            var filteredWords = this.words.filter((word) => { return word.word.includes(this.searchQuery); });
            filteredWords = filteredWords.concat(this.words.filter((word) => { return translationFilter(word, this.searchQuery, filteredWords); }));
            filteredWords = filteredWords.concat(this.words.filter((word) => { return transcriptionFilter(word, this.searchQuery, filteredWords); }));
            return filteredWords;
        }
    }
}

function translationFilter(word, searchQuery, filteredWords)
{
    if (!filteredWords.includes(word))
    {
        return word.translations.some(translation => { return translation.translation.includes(searchQuery)});
    }
    return false;
}

function transcriptionFilter(word, searchQuery, filteredWords)
{
    if (!filteredWords.includes(word))
    {
        return word.translations.some(translation => { return translation.transcription.includes(searchQuery)});
    }
    return false;
}
</script>

<style>
    #dictionaryDisplay
    {
        margin: 10px 50px;
        background-color: #496b89;
        border-radius: 20px;
        padding: 20px 20px;
    }

    #dictionarySearch
    {
        margin: 10px;
        font-size: medium;
    }

    #dictionaryFilters
    {
        margin: 10px;
        font-size: medium;
    }

    .word
    {
        padding: 20px;
        text-align: center;
        font-size: large;
        border: #000;
        background-color: #b8def7;
        margin: 5px;
        font-weight: bold;
    }

    .word:hover
    {
        cursor:pointer;
    }
</style>