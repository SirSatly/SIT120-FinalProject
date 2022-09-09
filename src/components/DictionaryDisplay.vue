<template>
    <!-- Div to contain the dictionary -->
    <section id="dictionaryDisplay">

        <!-- Search box to find word in the dictionary -->
        <input id="dictionarySearch" placeholder="Search:">

        <!-- Filter dropdown to filter the dictionary -->
        <select id="dictionaryFilters">
            <option>No filters</option>
            <option>Nouns</option>
            <option>Verbs</option>
            <option>Adjectives</option>
            <option>Adverbs</option>
        </select>

        <!-- Div which contains all the words in the dictionary -->
        <div id="dictionary" v-for="word in words" :key="word.word"> 
            <div class="word" @click="$emit('activate', word)">{{word.word}}</div>
        </div>
    </section>
</template>

<script>
export default {
    props: {
        words: Array
    }
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