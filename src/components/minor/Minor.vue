<template>
    <div>
        <div class="minor-navigation">
            <router-link v-bind:to="'/minor'">Minor home</router-link>
            <router-link v-bind:to="'/minor/fotografie'">Fotografie</router-link>
            <router-link v-bind:to="'/minor/film'">Film</router-link>
            <router-link v-bind:to="'/minor/dummy'">Dummy</router-link>
        </div>

        <div class="minor-section">
            <h1>Wik's minor page</h1>

            <p>Welkom op mijn minor pagina. Ik zat deze sectie gebruiken voor het hosten
            van alle documenten voor mijn minor mediaproducties. Dit is deel van mijn opleiding
            tot software engineer. Klik gerust door naar de relevante subsecite.</p>
        </div>

        <div>
            <router-view/>
        </div>
    </div>
</template>

<script>
    export default {
        name: "minor"
    }
</script>

<style scoped>

</style>