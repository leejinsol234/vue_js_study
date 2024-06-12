<template>
    <nav>
        <router-link to="/">Home</router-link> | <router-link to="/databinding">Data Bounding</router-link> |
        <router-link to="/databindinghtml">Data Bounding Html</router-link> |
        <router-link to="/databindinginputtext">Data Bounding Input Text</router-link> |
        <router-link to="/databindinginputnumber">Data Bounding Input Number</router-link> |
        <router-link to="/databindingtextarea">Data Bounding Textarea</router-link> |
        <router-link to="/databindingselect">Data Bounding Select</router-link>
    </nav>
    <router-view />
</template>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

nav {
    padding: 30px;
}

nav a {
    font-weight: bold;
    color: #2c3e50;
}

nav a.router-link-exact-active {
    color: #42b983;
}
</style>
