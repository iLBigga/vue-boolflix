<template>
    <div class="custom_card">
        <ul class="text-center p-4">
            <li class="title">{{movie.title}}</li>
            <li class="original_title"><b>Titolo Originale: </b>{{movie.original_title}}</li>
            <li class="lenguage">Lingua: <img :src="getFlag(movie.original_language)" alt=""> </li>
            <li class="vote">Voto: {{movie.vote_average}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'CardComponent',
    props: {
        movie: Object,
    },
    data() {
        return {

        }
    },
    methods: {
        getFlag(el) {
            const flagHost= `https://flagcdn.com/16x12/`
            let flag = el
                if(flag === 'en') {
                    flag = 'gb'
                }
            const src = `${flagHost}${flag}.png`
            return src
        }
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