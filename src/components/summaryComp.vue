<template>
   <div class='summary-cont' >
      <div class="">
         <div class="row">
            <div class="col-md-12 summary-cont-inner">
               <!-- Nav tabs -->
               <div class="card">
                  <ul class="nav nav-tabs" role="tablist">
                     <li role="presentation" class="active"><a href="#summary" aria-controls="summary" role="tab" data-toggle="tab">Summary</a></li>
                     <li role="presentation"><a href="#location" aria-controls="location" role="tab" data-toggle="tab">Locations & Directions</a></li>
                     <li role="presentation"><a href="#rating" aria-controls="rating" role="tab" data-toggle="tab">Ratings & Reviews</a></li>
                  </ul>
                  <!-- Tab panes -->
                  <div class="tab-content" v-if="doctors.length > 0">
                     <div role="tabpanel" class="tab-pane active" id="summary">
                        <h3><span class="dr-title diff">About</span><span class="dr-title">{{doctors[0].prefix}}</span> <span class="dr-title">{{doctors[0].first}}</span><span class="dr-title">{{doctors[0].last}}</span></h3>
                        <span>{{doctors[0].summary}}</span>
                     </div>
                     <!-- Locations & directions Start-->
                     <div role="tabpanel" class="tab-pane" id="location">
                        <div class="row">
                           <div class="col-md-12">
                              <div class="panel panel-default  panel--styled" v-for="loc in doctors[0].locations">
                                 <div class="panel-body panel-cont">
                                    <div class="col-md-12 panelTop">
                                       <div class="col-md-3 loc-wrap">	
                                          <img class="img-responsive" src="../assets/images/map.jpg" alt=""/>
                                       </div>
                                       <div class="col-md-9">
                                          <section class="loc-details">
                                             <h3 class="cmpny-name">{{loc.name}}</h3>
                                             <p>{{loc.address1}}</p>
                                             <p>{{loc.city}}  {{loc.state}}  {{loc.zip}}</p>
                                          </section>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <!-- Lcoations & Direction Ends -->   
                     <div role="tabpanel" class="tab-pane" id="rating">
                        <h3><span class="dr-title diff">Overall Rating</span><span class="dr-title">{{doctors[0].prefix}}</span> <span class="dr-title">{{doctors[0].first}}</span><span class="dr-title">{{doctors[0].last}}</span></h3>
                        <div class="rating-cont rating-cont-mrgn">
                           <p class='rating-padfix'>
                              <span class="glyphicon glyphicon-star checked"></span>
                              <span class="glyphicon glyphicon-star checked"></span>
                              <span class="glyphicon glyphicon-star checked"></span>
                              <span class="glyphicon glyphicon-star checked"></span>
                              <span class="glyphicon glyphicon-star-empty"></span>
                           </p>
                           <p class='rating-padfix'>
                              <b>4</b>
                              <span>Out of</span>
                              <b>5</b>
                           </p>
                        </div>
                        <h3><span class="dr-title diff">Showing</span><b class="dr-title">6</b><span class="dr-title">Comments</span></h3>
                        <ul class="comments-wrap">
                           <li v-for="(rating, index) in doctors[0].ratings">
                              <p>{{rating.title}}</p>
                              <p>{{rating.comment}}</p>
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>
<script>
   import dataMixin from '../mixins/dataMixin';
      export default {
        name: 'summaryComp',
        
       data(){
          return {
            doctors:[]            
          }    
        },
        mixins: [dataMixin]
   
      }
</script>
<style scoped>
   .summary-cont, .summary-cont-inner{
     padding-right: 0 !important;
     
   }
   .nav-tabs { border-bottom: 0; }
   .nav-tabs > li.active > a, .nav-tabs > li.active > a:focus, .nav-tabs > li.active > a:hover { border-width: 0; }
   .nav-tabs > li > a { border: none; color: #489CFE; }
   .nav-tabs > li.active > a, .nav-tabs > li > a:hover { border: none; color: #277DE2 !important; background: transparent; }
   .nav-tabs > li > a::after { content: ""; background: #4285F4; height: 2px; position: absolute; width: 100%; left: 0px; bottom: -1px; transition: all 250ms ease 0s; transform: scale(0); }
   .nav-tabs > li.active > a::after, .nav-tabs > li:hover > a::after { transform: scale(1); }
   .tab-nav > li > a::after { background: #21527d none repeat scroll 0% 0%; color: #fff; }
   .tab-pane { padding: 15px 0; }
   .tab-content{padding:20px}
   .card {background: #FFF none repeat scroll 0% 0%; box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.3); margin-bottom: 30px; }
   .nav-tabs {margin: 0 20px;}
   .nav-tabs>li>a {
   padding: 15px 0 6px 0px;
   margin-right: 32px;
   }
   .tab-pane{
   padding: 0;
   }
   .tab-pane h3{
   margin: 0;
   margin-bottom: 22px;
   margin-right: 10px;
   }
   .tab-pane h3.cmpny-name{
   margin: 10px 0px 20px 0;
   }
   .tab-content{
   padding: 50px 60px;
   }
   .panel.panel--styled {
   background: #fff;
   border-radius: 0;
   margin-bottom: 15px;
   }
   .panelTop {
   padding: 0;
   }
   .panelTop .loc-wrap {
   padding: 0;
   }
   .panelBottom {
   border-top: 1px solid #e7e7e7;
   padding-top: 20px;
   }
   .panel-cont{
   padding: 0;
   }
   .loc-details p{
   margin-bottom: 5px;
   }
   .rating-cont .glyphicon {
   font-size: 18px;
   color:#84c938;
   }
   .rating-cont .glyphicon-star.checked {
   color: #84c938;
   }
   .rating-padfix{
   margin: 0;
   display: inline-block;
   }
   .rating-cont-mrgn{
   margin-bottom: 50px;
   }
   .comments-wrap{
   list-style-type: none;
   padding: 0;
   margin:0;
   }
   .comments-wrap li{
   border-bottom: 1px solid #B7C2D0;
   margin-bottom: 20px;
   padding-left: 20px;
   }

   @media only screen and (max-width: 1024px) {
  
 .summary-cont .summary-cont-inner{
     padding-right: 15px !important;
     
   }

}

   @media only screen and (max-width: 768px) {

            .tab-content {
          padding: 30px 30px;
      }
   }
</style>