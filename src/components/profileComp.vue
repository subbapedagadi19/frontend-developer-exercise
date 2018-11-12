<template>
   <div class='profile-cont' >
      <div class="row profile">
         <div class="">
            <div class="profile-sidebar">
               <div class="profile-userpic">
                  <img src="../assets/images/profile-pic-1.png" class="img-responsive" alt="">
               </div>
               <div class="profile-Content"  v-if="doctors.length > 0">
                  <h3><span class="dr-title">{{doctors[0].prefix}}</span> <span class="dr-title">{{doctors[0].first}}</span><span class="dr-title">{{doctors[0].last}}</span><span class="dr-title">{{doctors[0].degree}}</span></h3>
                  <p>{{doctors[0].specialty}}</p>
                  <div class="rating-cont">
                     <span class="glyphicon glyphicon-star checked"></span>
                     <span class="glyphicon glyphicon-star checked"></span>
                     <span class="glyphicon glyphicon-star checked"></span>
                     <span class="glyphicon glyphicon-star checked"></span>
                     <span class="glyphicon glyphicon-star-empty"></span>
                  </div>
                  <div class="profile-userbuttons">
                     <div class="btn-wrap">
                        <a  class="btn btn-info btn-sm" href="#rating" aria-controls="rating" role="tab" data-toggle="tab" @click='ratingTab()'>Read Reviews</a>
                     </div>
                     <div class="btn-wrap">
                        <a  class="btn btn-info btn-sm" href="#location" aria-controls="location" role="tab" data-toggle="tab" @click='locTab()'>Get Directions</a>
                     </div>
                  </div>
                  <ul class="profile-details">
                     <li><span class="glyphicon glyphicon-map-marker"></span>{{doctors[0].locations[0].city}}  {{doctors[0].locations[0].state}}</li>
                     <li><span class="glyphicon glyphicon-earphone"></span>{{doctors[0].locations[0].phone}}</li>
                     <li><span class="glyphicon glyphicon-education"></span>{{doctors[0].education.school.name}}</li>
                  </ul>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>
<script>
   import dataMixin from '../mixins/dataMixin';
      export default {
        name: 'profileComp',
        
        data(){
          return {
            doctors:[]            
          }    
        },
         methods: {
          locTab: function () {
            $('.nav-tabs li').removeClass('active');
            $('.nav-tabs li:nth-child(2)').addClass('active');
          },
          ratingTab: function () {
            $('.nav-tabs li').removeClass('active');
            $('.nav-tabs li:nth-child(3)').addClass('active');
          }
        },
     mixins: [dataMixin]
      }
</script>
<style scoped>
   .profile {
   margin: 20px 0;
   position: relative;
   margin-top: 0;
   text-align: center;
   }
   .profile-userpic {
   position: absolute;
   top: -20px;
   width: 100%;
   }
   /* Profile sidebar */
   .profile-sidebar {
   padding: 20px 0 16px 0;
   background: #fff;
   margin-top: 0px;
   border: 1px solid #b7c2d0;
   }
   .profile-userpic img {
   float: none;
   margin: 0 auto;
   width: 100px;
   height: 100px;
   -webkit-border-radius: 50% !important;
   -moz-border-radius: 50% !important;
   border-radius: 50% !important;
   }
   .profile-usertitle {
   text-align: center;
   }
   .profile-usertitle-name {
   color: #5a7391;
   font-weight: 600;
   margin-bottom: 7px;
   }
   .profile-usertitle-job {
   text-transform: uppercase;
   color: #5b9bd1;
   font-weight: 600;
   margin-bottom: 15px;
   }
   .profile-userbuttons {
   text-align: center;
   margin-top: 10px;
   }
   .profile-userbuttons .btn {
   text-transform: uppercase;
   /* font-weight: 600; */
   padding: 6px 15px;
   margin-right: 5px;
   }
   .profile-userbuttons .btn:last-child {
   margin-right: 0px;
   }
   .profile-usermenu {
   margin-top: 30px;
   }
   .profile-usermenu ul li {
   border-bottom: 1px solid #f0f4f7;
   }
   .profile-usermenu ul li:last-child {
   border-bottom: none;
   }
   .profile-usermenu ul li a {
   color: #93a3b5;
   font-weight: 400;
   }
   .profile-Content {
   margin-top: 61px;
   }
   .rating-cont .glyphicon {
   font-size: 18px;
   color:#84c938;
   }
   .rating-cont .glyphicon-star.checked {
   color: #84c938;
   }
   .btn-wrap {
   padding: 4px;
   }
   .profile-userbuttons .btn {
   background-color: #489cfe;
   margin-right: 0px;
   height: 36px;
   width: 160px;
   }
   .profile-details{
   list-style-type: none;
   padding: 1px;
   padding-top: 8px;
   border-top: 1px solid #B7C2D0;
   margin: 18px;
   text-align: left;
   }
   .profile-details li{
   padding: 3px 0;
   }
   .profile-details .glyphicon{
   display: inline-block;
   padding: 6px;
   }
   .profile-Content h3 span {
   color: #414E5D;
   }
</style>