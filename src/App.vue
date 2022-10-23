<style>
@font-face {
  font-family: defaultFont;
  src: url(./font/Scripto-2OR2v.ttf);
}
.main-container {
  background: #167D7F !important;
  padding-bottom: 20px;
  position: relative;
  margin: 0;
  z-index: 1;
}
.container-group{
  width: 52%;
  height: 600px;
  margin: 0 auto;
  position: relative;
  
  
}
.header{
  z-index: 2;
  width: 100%;
  height: 100px;
  background: #29A0B1;
  color: white;
  display: flex;
  border-radius: 6px;
    position: relative;
    box-shadow: 0px 5px 3px 0px rgba(0,0,0,0.51);
-webkit-box-shadow: 0px 5px 3px 0px rgba(0,0,0,0.51);
-moz-box-shadow: 0px 5px 3px 0px rgba(0,0,0,0.51);
}
.content-container{
  background: #DDFFE7;
  width: 98%;
  height: 500px;
  margin: 0 auto;
  position: relative;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  box-shadow: 0px 5px 3px 0px rgba(0,0,0,0.51);
-webkit-box-shadow: 0px 5px 3px 0px rgba(0,0,0,0.51);
-moz-box-shadow: 0px 5px 3px 0px rgba(0,0,0,0.51);
}

.card{
  padding-bottom: 70px;
  padding-left: 70px;
  padding-right: 70px;
  padding-top: 50px;
  text-align: center;
  
  height: 100%;
}
.header-card{
  width: 100%;
  margin-top: 5px;
  margin-right: 20px;
  margin-bottom: 20px;
  margin-left: 20px;
  letter-spacing: 3px;
  font-family: defaultFont;
  font-size: 60px;
  text-align: center;
  

text-shadow: 0 1px 0px #5B2718, 1px 0 0px #5B2718, 1px 2px 1px #5B2718, 2px 1px 1px #5B2718, 2px 3px 2px #5B2718, 3px 2px 2px #5B2718, 3px 4px 2px #5B2718, 4px 3px 3px #5B2718, 4px 5px 3px #5B2718, 5px 4px 2px #5B2718, 5px 6px 2px #5B2718, 6px 5px 2px #5B2718, 6px 7px 1px #5B2718, 7px 6px 1px #5B2718, 7px 8px 0px #5B2718, 8px 7px 0px #5B2718;
  /* text-shadow: 1px 1px 0px #5B2718, 2px 2px 0px #5B2718, 3px 3px 0px #5B2718, 4px 4px 0px #5B2718; */
  /* text-shadow: 4px 2px 0px whitesmoke; */

}

</style>

<template>
  <v-app class="main-container">
    <div class="container-group">
      <div class="header">
        <div class="header-card">Quiz App</div>
      </div>
    <div class="content-container">
      
      <div class="card">
        
          
        
        <router-view/>
      </div>
      </div>
    </div>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
