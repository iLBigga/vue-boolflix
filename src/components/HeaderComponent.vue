<template>
    <header>
        <div class="d-flex justify-content-between p-4">
            <h1>BoolFlix</h1>
            <div class="align-self-center">
                <input v-model="search" type="text">
                <input @click="$emit('search', search)" type="button" name="premi" value= "Cerca"> 
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: 'HeaderComponent',
    data() {
        return {
            search: '',
        };
    },
};
</script>

<style lang="scss" scoped>
    header {
        background-color: grey;
    }
</style>