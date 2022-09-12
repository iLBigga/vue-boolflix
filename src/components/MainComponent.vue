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
            BASE_URI: 'https://api.themoviedb.org/3/search/movie'
        };
    },
    methods: {
        findMovie() {
            if (this.movieTitle.trim() === '')
                return
            axios
                .get(`${this.BASE_URI}`, {
                    params : {
                        api_key: '98186e6aae9de3ce0406c7aa396124e3',
                        query: this.movieTitle.trim(),
                    },
                })            
                .then((res) => {
                    this.movies = res.data.results;
                })
        },   
    },
    watch: {
        movieTitle(a,b) {
            a != b ? this.findMovie() : null;
        },
    },    
};

</script>



<style lang="scss" >
    
</style>