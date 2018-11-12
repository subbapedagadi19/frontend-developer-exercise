<template>
   <div class="container-fluid app-cont">
      <headerComp></headerComp>
      <router-view></router-view>
   </div>
</template>
<script>
   import headerComp from './components/headerComp'
   import home from './components/home'
   export default {
     name: 'App',
     components : {
       headerComp,
       home
     }
   }
</script>
<style>
   #app {
   /* font-family: 'Avenir', Helvetica, Arial, sans-serif; */
   font-family: 'robotoregular';
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
   /* text-align: center; */
   color: #657385;
   }
   .app-cont
   {
   padding: 0;
   }
   .app-cont nav
   {
   border-radius: 0;
   }
</style>