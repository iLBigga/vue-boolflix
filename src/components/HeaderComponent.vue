<template>
    <div class="container p-5">
            <input v-model="search" type="text">
            <input @click="$emit('search', search)" type="button" name="premi" value= "Cerca"> 
    </div>
</template>

<script>
export default {
    name: 'HeaderComponent',
    data() {
        return {
            search: 'cacca',
        }
    }
}
</script>

<style lang="scss" >
    
</style>