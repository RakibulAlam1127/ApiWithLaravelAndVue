<template>
   <div>
       <h1>Hello</h1> 
       <router-view></router-view>
    </div>  
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>


<style scoped>
   
</style>
