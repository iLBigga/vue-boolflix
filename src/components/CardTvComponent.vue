<template>
    <div class="custom_card">
        <img :src="getPoster(tvShow.poster_path)" alt="">
        <ul class="card_info m-0 p-2">
            <li class="title">{{tvShow.name}}</li>
            <li class="original_title"><b>Titolo Originale: </b>{{tvShow.original_name}}</li>
            <li class="lenguage"><b>Lingua: </b><img :src="getFlag(tvShow.original_language)" alt=""></li>
            <li class="vote">
                <b>Voto: </b> 
                <font-awesome-icon v-for="n in getVote(tvShow.vote_average)" :key="n" icon="fa-solid fa-star" />
                <font-awesome-icon v-for="n in (5 - getVote(tvShow.vote_average))" :key="n + tvShow.vote_average" icon="fa-regular fa-star" />
            </li>
            <li class="overview"><b>OverView: </b> {{tvShow.overview}}</li>
            
        </ul>
    </div>
</template>

<script>
import getFlag from '../myFunction.js';

export default {
    name: 'CardTvComponent',
    props: {
        tvShow: Object,
    },
    methods: {
        getFlag,
        getPoster(path){
            let src = require('../assets/Poster_not_available.png')
            const posterUri = 'https://image.tmdb.org/t/p/w342'
            if(path != null) {
                src = `${posterUri}${path}`
            }
            return src
        },
        getVote(value){
            return Math.floor(value / 2);
        }   
    },
};
</script>

<style lang="scss" scoped>
    @import '../styles/card_style.scss';
</style>