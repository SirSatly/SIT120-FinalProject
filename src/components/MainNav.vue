<template>
    <!-- Header image also works as link to index -->
    <div id="mainNav">
        <router-link to="/"><img id="headerImage" src="@/assets/title.png"></router-link>

        <div id="headerLinks">
            <router-link to="/profile">Profile <img id="profileImage" src="@/assets/profile.png"></router-link>
            <router-link to="/saved">Saved</router-link>
            <router-link to="/search">Search</router-link>
        </div>
    </div>
</template>

<style>
#headerImage
{
    height: 10vh;
    border-radius: 20px;
}

#mainNav
{
    margin-top: -10px;
    background: #B5E3F2;
    border-radius: 0px 0px 20px 20px;
    padding: 5px;
}

#headerLinks
{
    float: right;
    width: 60%;
}

#profileImage
{
    height: 5vh;
    margin-top: 10px;
}

#headerLinks > a
{
    color: white;
    font-size: 5vh;
    margin-right: 5%;
    flex: auto;
    float: right;
    font-weight: bold;
    text-decoration: none;
    text-shadow: -1px 1px 0 #000,
                        1px 1px 0 #000,
                        1px -1px 0 #000,
                        -1px -1px 0 #000;
}

@media only screen and (max-width: 600px) {
    #headerImage
    {
        height: 8vh;
    }

    #headerLinks > a 
    {
        font-size: 4vh;
    }
}

#headerLinks > a:hover
{
    color: rgb(104, 76, 130);
}

#headerLinks a.router-link-exact-active {
  color: #4b0ead;
}


</style>