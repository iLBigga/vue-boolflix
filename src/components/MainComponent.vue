<template>
    <div class="container"> 
        <h2>Movies</h2>
        <div class="row row-cols-4 g-3">         
            <div v-for="(movie, i) in movies" :key="i">
                <CardMovieComponent :movie="movie"/>   
            </div>
        </div>
        <h2>Tv Show</h2>
        <div class="row row-cols-4 g-3">
            <div v-for="(tvShow, i) in  tvShows" :key="i">
                <CardTvComponent :tvShow="tvShow"/>
            </div>
        </div>      
    </div>
</template>


<script>

import axios from "axios";
import CardMovieComponent from "./CardMovieComponent.vue";
import CardTvComponent from "./CardTvComponent.vue";

export default {
    name: 'MainComponent',
    components: {
    CardMovieComponent,
    CardTvComponent,
},
    props: {
        movieTitle: String,
    }, 
    data() {
        return {
            movies: [],
            tvShows: [],
            api_key: '98186e6aae9de3ce0406c7aa396124e3',
            BASE_URI: 'https://api.themoviedb.org/3'
        };
    },
    methods: {
        findMovie() {
            if (this.movieTitle.trim() === '')
                return
            axios
                .get(`${this.BASE_URI}/search/movie`, {
                    params : {
                        api_key: this.api_key,
                        query: this.movieTitle.trim(),
                    },
                })            
                .then((res) => {
                    this.movies = res.data.results;
                })
        },
        findTvShow() {
            if(this.movieTitle.trim() === '') 
                return
            axios
                .get(`${this.BASE_URI}/search/tv`, {
                    params: {
                        api_key: this.api_key,
                        query: this.movieTitle.trim(),
                    },
                })
                .then((res) => {
                    this.tvShows = res.data.results
                })
        }   
    },
    watch: {
        movieTitle(a,b) {
            a != b ? this.findMovie() : null;
            a != b ? this.findTvShow() : null;
        },
    },    
};

</script>



<style lang="scss" >
    
</style>