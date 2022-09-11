<template>
    <div class="custom_card">
        <ul class="text-center p-4">
            <li class="title">{{movie.title}}</li>
            <li class="original_title">Titolo: Originale: {{movie.original_title}}</li>
            <li class="lenguage">Lingua: {{movie.original_language}}</li>
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
    
}
</script>

<style lang="scss" scoped>
    .custom_card {
        background-color: antiquewhite;
        height: 100%;

        li {
            line-height: 2.3rem;
        }

        .title{
            font-weight: bold;
            font-size: 1.5rem;
        }

        .original_title{
            font-weight: bold;
        }
    }
    
</style>