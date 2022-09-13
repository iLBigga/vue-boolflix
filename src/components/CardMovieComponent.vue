<template>
    <div class="custom_card">
        <img :src="getPoster(movie.poster_path)" alt="">
        <ul class="card_info m-0 p-2">
            <li class="title">{{movie.title}}</li>
            <li class="original_title"><b>Titolo Originale: </b>{{movie.original_title}}</li>
            <li class="lenguage">Lingua: <img :src="getFlag(movie.original_language)" alt=""> </li>
            <li class="vote">
                <span>Voto: </span> 
                <font-awesome-icon v-for="n in getVote(movie.vote_average)" :key="n" icon="fa-solid fa-star" />                     
                <font-awesome-icon v-for="n in (5 - getVote(movie.vote_average))" :key="n + movie.vote_average" icon="fa-regular fa-star" />
            </li>
            <li class="overview">OverView: {{movie.overview}}</li>
            
        </ul>
    </div>
</template>

<script>
import getFlag from '../myFunction.js';

export default {
    name: 'CardMovieComponent',
    props: {
        movie: Object,
    },
    methods: {  
        getFlag,
        getPoster(path){
            let src = require('../assets/not-found.png')
            const posterUri = 'https://image.tmdb.org/t/p/w342'
            if(path != null) {
                src = `${posterUri}${path}`
            }
            return src
        },
        getVote(value){
            return Math.floor(value / 2);
        },   
    },
};
</script>

<style lang="scss" scoped>
    @import '../styles/card_style.scss';
</style>