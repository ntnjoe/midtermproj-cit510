<style>
@import url('https://fonts.googleapis.com/css2?family=Abyssinica+SIL&family=Alkalami&family=Nunito:wght@700&display=swap');
.main-div{
    
    widows: 100%;
    height:100%;
    
    display: flex;
  align-items: center;
  justify-content: center;

}
.startbtn{
  color: white;
  transition-duration: 0.3s;
  transition: ease 0.3s;
  border: 1px solid #29A0B1;
  display: inline-block;
  background-color: #29A0B1;
  padding: 4px 11px;
  font-family: Arial;
  font-size: 16px;
  cursor: pointer;
  border-radius: 6px;
  box-shadow: 0px 5px 1px 0px #167D7F;
-webkit-box-shadow: 0px 5px 1px 0px #167D7F;
-moz-box-shadow: 0px 5px 1px 0px #167D7F; 
font-family: 'Abyssinica SIL', serif !important;
    font-family: 'Alkalami', serif !important;
    font-family: 'Nunito', sans-serif !important;
  
}
.startbtn:hover{
    transition-duration: 0.3s;
  transition: ease 0.3s;
  background-color: #DDFFE7;
  box-shadow: 0px 0px 0px 0px #167D7F;
  -webkit-box-shadow: 0px 0px 0px 0px #167D7F;
  -moz-box-shadow: 0px 0px 0px 0px #167D7F;
color: black;

}
</style>

<template>
    <div class="main-div">
    <router-link to="/quiz"><button class="startbtn">Press To Start</button></router-link>
</div>
</template>
<script setup>

</script>