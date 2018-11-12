<template>
<nav class="navbar navbar-inverse nav-cont">
    <form>
    <div class="input-group search-wrap">
      <input type="text" class="form-control search-input" placeholder="">
      <div class="input-group-btn">
        <button class="btn btn-default" type="submit">
          <i class="glyphicon glyphicon-search"></i>
        </button>
      </div>
    </div>
  </form>  
</nav>
</template>

<script>
export default {
    name: "headerComp"  
}
</script>

<style scoped>
.app-cont
{
  padding: 0;
}

.navbar
{
  min-height: 74px;
  height: 74px;
  padding: 16px 24px 18px 16px;
  margin-bottom: 30px;
}
.nav-cont{
  background-color:  #489CFE;
  border:0;
}

#custom-search-input {
    margin:0;
    margin-top: 10px;
    padding: 0;
}
 
#custom-search-input .search-query {
    width:100%;
    padding-right: 3px;
    padding-left: 15px;
        /* IE7-8 doesn't have border-radius, so don't indent the padding */
    margin-bottom: 0;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 0;
}
 
#custom-search-input button {
    border: 0;
    background: none;
    /** belows styles are working good */
    padding: 2px 5px;
    margin-top: 2px;
    position: absolute;
    right:0;
    /* IE7-8 doesn't have border-radius, so don't indent the padding */
    margin-bottom: 0;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
     cursor: unset;
    z-index: 2;
}
 
.search-query:focus{
    z-index: 0;   
}
.input-group
{
 
    width: 394px;
    float: right;
   

}

.input-group input
{
 
  width: 100%;
  border-radius: 2px;
  height: 40px;
  
}

.input-group button
{
 
      padding: 4px 12px;
      border-left:0;
      height: 40px;
      border-radius: 2px;
      color: #657385;
  
}


@media only screen and (max-width: 768px) {
  

  .search-wrap{
    width: 330px;
  }


}




</style>


