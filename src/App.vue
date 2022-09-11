<template>
  <div id="app">
    <HeaderComponent @search="getText"/>
    <MainComponent :movieTitle="searchText"/>
  </div>
</template>

<script>
  import MainComponent from './components/MainComponent.vue'
  import HeaderComponent from './components/HeaderComponent.vue'

export default {
  name: 'App',
  components: {
    MainComponent,
    HeaderComponent,
  },
  data() {
      return {
        searchText: ''
      }
  },
  methods: {
        getText(data) {
            this.searchText = data;
        }
    }
}
</script>

<style lang="scss"> 
  @import './styles/style.scss';
</style>
