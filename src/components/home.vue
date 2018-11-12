<template>
   <div class="home">
      <div class="row">
         <div class="col-md-3 profile-wrap">
            <div class="profile-cont-main">
               <vitals-profileComp></vitals-profileComp>
            </div>
            <div class="ad-cont-wrap">
               <div class="ad-cont-main">
                  <vitals-adComp></vitals-adComp>
               </div>
            </div>
         </div>
         <div class="col-md-9">
            <vitals-summaryComp></vitals-summaryComp>
         </div>
      </div>
   </div>
</template>
<script>
   import profileComp from './profileComp.vue'
   import adComp from './adComp.vue'
   import summaryComp from './summaryComp.vue'
   
   export default {
    
     name: "users",
      components:{
       'vitals-profileComp':profileComp,
       'vitals-adComp': adComp,
       'vitals-summaryComp':summaryComp
     },
     data() {
       return {
       
       }
     },
   
     methods:{
       
     }
   };
</script>
<style scoped>
   .home{
   width: 94%;
   margin: auto;
   }
   .profile-wrap{
   padding: 0;
   }
   .profile-cont-main{
   width: 100%;
   }
   .ad-cont-main{
   margin-bottom: 30px;
   }
   .ad-cont-wrap{
   padding: 0;
   }
/*media queries starts */

@media only screen and (max-width: 768px) {
  
  .app-cont .profile-wrap{
    padding-left:15px !important;
    padding-right:15px !important;
  }
  


}


/*media queries ends */

</style>