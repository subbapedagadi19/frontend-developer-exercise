<template>
   <div class='ad-cont' >
      <figure>
         <img src="../assets/images/ad.jpg" alt="Location" >
      </figure>
   </div>
</template>
<script>
   export default {
     name: 'adComp',
     
     data(){
       return {
         msg:'This is an advertisement'            
       }    
     }
   }
</script>
<style scoped>
   .ad-cont{
   border: 1px solid #B7C2D0;
   background-color:  #fff;
   }
   .ad-cont img{
   /* border: 1px solid #B7C2D0; */
   height: 100%;
   }
</style>