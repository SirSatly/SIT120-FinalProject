<template>
    <div id="dictionaryNav">
        <router-link to="./">Dictionary</router-link>
        <router-link to="./cards">Flashcards</router-link>
        <router-link to="./edit">Edit</router-link>
    </div>
</template>

<style>
#dictionaryNav
{
    background: #090b5e;
    margin-left: 15px;
    margin-right: 15px;
    border-radius: 0px 0px 20px 20px;
    padding-top: 1vh;
    height: 5vh;
}

#dictionaryNav a
{
    font-size: 3vh;
    margin-left: 20px;
    color: #ffffff;
}

#dictionaryNav a:hover
{
    color: rgb(104, 76, 130);
}

#dictionaryNav a.router-link-exact-active {
  color: #42b983;
}
</style>