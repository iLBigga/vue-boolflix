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
        getFlag(value) {
            const flagHost= `https://flagcdn.com/16x12/`
            let lang = value
            switch (lang) {
                case 'en': 
                    lang = 'gb';
                break;
                case 'cs':
                    lang = 'cz';
                break;
                case 'hi':
                    lang = 'in';
                break;
                case 'ja':
                    lang = 'jp'
                break;
                case 'da':
                    lang = 'dk'
                break;
                case 'ko':
                    lang = 'kr'
                break;
                case 'he':
                    lang = 'il';
                break;
                case 'fa':
                    lang = 'ir';
                break;
                case 'zh':
                    lang = 'cn';                   
            }
            const src = `${flagHost}${lang}.png`
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