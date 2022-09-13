<template>
    <div class="custom_card">
        <ul class="text-center p-4">
            <li class="poster"><img :src="getPoster(tvShow.poster_path)" alt=""></li>
            <li class="title">{{tvShow.name}}</li>
            <li class="original_title"><b>Titolo Originale: </b>{{tvShow.original_name}}</li>
            <li class="lenguage">Lingua: </li>
            <li class="vote">Voto: {{Math.round(tvShow.vote_average / 2)}}</li>
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
            let src = require('../assets/not-found.png')
            const posterUri = 'https://image.tmdb.org/t/p/w342'
            if(path != null) {
                src = `${posterUri}${path}`
            }
            return src
        }
    },
};
</script>

<style lang="scss" scoped>
    @import '../styles/card_style.scss';
</style>