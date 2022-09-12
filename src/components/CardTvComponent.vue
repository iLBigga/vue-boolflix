<template>
    <div class="custom_card">
        <ul class="text-center p-4">
            <li class="title">{{tvShow.name}}</li>
            <li class="original_title"><b>Titolo Originale: </b>{{tvShow.original_name}}</li>
            <li class="lenguage">Lingua: <img :src="getFlag(tvShow.original_language)" alt=""> </li>
            <li class="vote">Voto: {{tvShow.vote_average}}</li>
        </ul>
    </div>
</template>

<script>
    import getFlag from '../myFunction.js'

export default {
    name: 'CardTvComponent',
    props: {
        tvShow: Object,
    },
    data() {
        return {

        }
    },
    methods: {
        getFlag,
    }
}
</script>

<style lang="scss" scoped>
    .custom_card {
        background-color: antiquewhite;
        height: 100%;

        li {
            line-height: 2.3rem;
        };

        .title{
            font-weight: bold;
            font-size: 1.5rem;
        };

    };
    
</style>