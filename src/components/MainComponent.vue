<template>
    <main>
        <div class="container py-3"> 
            <h2 class="py-5">Movies</h2>
            <div class="row row-cols-4 g-4">         
                <div v-for="movie in movies" :key="movie.id">
                    <CardMovieComponent :movie="movie"/>   
                </div>
            </div>
            <h2 class="py-5">Tv Shows</h2>
            <div class="row row-cols-4 g-4">
                <div v-for="(tvShow, i) in  tvShows" :key="i">
                    <CardTvComponent :tvShow="tvShow"/>
                </div>
            </div>      
        </div>
    </main>
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
            BASE_URI: 'https://api.themoviedb.org/3',
        };
    },
    computed: {
        // ALTERNATIVA
        // moviesMap() {
        //     return this.movies.map((el) => {
        //         const newMovie = {
        //             id: el.id,
        //             title: el.title,
        //             original_title: el.original_title,
        //             lang: el.original_language,
        //             vote: Math.round(el.vote_average / 2),
        //             poster: `${this.posterBaseUri}${el.poster_path}`
        //         }
        //         return newMovie
        //     });
        // },
        // tvShowsMap() {
        //     return this.tvShows.map(({
        //         id, name, original_name, original_language, vote_average, poster_path
        //     }) => {
        //         const newTvShow = {
        //             id,
        //             title: name,
        //             original_title: original_name,
        //             lang: original_language,
        //             vote: Math.round(vote_average / 2),
        //             poster: `${this.posterBaseUri}${poster_path}`
        //         }
                    
        //         return newTvShow
        //     })
        // }
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
        },   
    },
    watch: {
        movieTitle(a,b) {
            if(a != b) {
                this.findTvShow(),
                this.findMovie();
            }
        },
    },    
};

</script>



<style lang="scss" scoped>
    main{
        background-color: #121414;
        color: white;
    }
</style>