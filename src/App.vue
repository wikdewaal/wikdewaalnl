<template>
    <div id="app">
        <div class="site-navigation">
            <router-link v-bind:to="'/'">Home</router-link>
            <router-link v-bind:to="'/minor'">Minor</router-link>
        </div>

        <router-view/>
    </div>
</template>

<script>
    export default {
        name: 'App'
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
</style>
