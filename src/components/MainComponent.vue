<template>
    <div class="container"> 
        <div class="row row-cols-4 g-3">
            <div v-for="(movie, i) in movies" :key="i">
                <CardComponent :movie="movie"/>   
            </div>
        </div>      
    </div>
</template>



<script>

import axios from "axios";
import CardComponent from "./CardComponent.vue";

export default {

    name: 'MainComponent',
    components: {
        CardComponent,
    },
    props: {
        movieTitle: String,
    }, 
    data() {
        return {
            movies: [],
            api_key: '98186e6aae9de3ce0406c7aa396124e3',
            lenguage: 'it-IT',
            BASE_URI: 'https://api.themoviedb.org/3/search/movie'
        };
    },
    methods: {
        findMovie() {
        axios
            .get(`${this.BASE_URI}?api_key=9857cfb37fc41b760e69c70f6d75b517&query=${this.movieTitle}`)
            .then((res) => {
                console.log(res)
                this.movies = res.data.results;
            })
            .catch(error => {
                if(error.response) {
                    console.log(error.response)
                }
            });
        },   
    },
    watch: {
        movieTitle(a,b) {
            if(a != b) {
                this.findMovie()
            }
        },
    },    
};

</script>



<style lang="scss" >
    
</style>