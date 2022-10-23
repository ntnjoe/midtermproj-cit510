<style scoped>
@import '@mdi/font/css/materialdesignicons.css';
@import url('https://fonts.googleapis.com/css2?family=Abyssinica+SIL&family=Alkalami&family=Nunito:wght@700&display=swap');
.quizdiv{
    
    width: 100%;
    height:100%;

    
}
.question-container{
    padding: 20px;
    background-color: #DDFFE7;
    border-radius: 6px;
    border: 1px solid #29A0B1; 
    height: 150px;
    position: relative;
    font-family: 'Abyssinica SIL', serif;
font-family: 'Alkalami', serif;
font-family: 'Nunito', sans-serif;
/* box-shadow: 0px 5px 3px 0px rgba(0,0,0,0.41);
-webkit-box-shadow: 0px 5px 3px 0px rgba(0,0,0,0.41);
-moz-box-shadow: 0px 5px 3px 0px rgba(0,0,0,0.41); */
}

.radio-toolbar input[type="radio"] {

  display: none;
}
.labeltag{
    font-family: 'Abyssinica SIL', serif !important;
    font-family: 'Alkalami', serif !important;
    font-family: 'Nunito', sans-serif !important;
}
.radio-toolbar{
    padding-top: 20px;
}

.radio-toolbar label {
color: white;
border: 1px solid #29A0B1; 
  display: inline-block;
  background-color: #29A0B1;
  padding: 4px 11px;
  font-family: Arial;
  font-size: 16px;
  cursor: pointer;
  width: 100%;
  border-radius: 6px;
  box-shadow: 0px 5px 1px 0px #167D7F;
-webkit-box-shadow: 0px 5px 1px 0px #167D7F;
-moz-box-shadow: 0px 5px 1px 0px #167D7F;

}
.radio-toolbar input[type="radio"]:checked+label {
    transition-duration: 0.3s;
  transition: ease 0.3s;
    color: black;
    border: 1px solid #29A0B1; 
    background-color: unset !important;
    background-color: #98D7C2 !important;
  box-shadow: 0px 0px 0px 0px #167D7F;
  -webkit-box-shadow: 0px 0px 0px 0px #167D7F;
  -moz-box-shadow: 0px 0px 0px 0px #167D7F;
  pointer-events: none;
  
}
.radio-toolbar input[type="radio"]:hover+label{
    transition-duration: 0.3s;
  transition: ease 0.3s;
  background-color: #DDFFE7;
  box-shadow: 0px 0px 0px 0px #167D7F;
  -webkit-box-shadow: 0px 0px 0px 0px #167D7F;
  -moz-box-shadow: 0px 0px 0px 0px #167D7F;
color: black;
}


.choice{
   height: 50px; 

}
.nextbtn{
    
  color: rgb(119, 119, 119) ;
  padding: 10px;
  position: absolute;
  bottom: 0;
  right: 0;
  border-bottom-right-radius: 2px;
  

}
.nextbtn:hover{
    
    color: black;
    border-top: #29A0B1 solid 1px;
    border-left: #29A0B1 solid 1px;
}
.score-card{
    font-family: 'Abyssinica SIL', serif !important;
    font-family: 'Alkalami', serif !important;
    font-family: 'Nunito', sans-serif !important;
    
    width: 100%;
    height:100%;
    display: flex;             
    flex-direction: column;    
    justify-content: center;   
    align-items: center;        
    height: 300px;
    
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
<script>

</script>

<template>
    
    
    <div class="quizdiv">
    <div v-if ="index < 10">
    <div class="question-container">{{question}}
    <button 
    class="nextbtn"
    @click="nextQuestion()"
    >Next</button>
    </div>
    <div class="radio-toolbar">
    <div class="choice" v-for="item in choices" :key="item">
        <input 
        type="radio"
        name="choices"
        :id="item"
        :value="item"
        @change="setAnswer(item)"
            >
        <label :for=item class="labeltag">{{item}}</label>
    </div>
    </div>
    </div>

    <div v-if="index == 10" class="score-card">
        <h1>{{score}}</h1>
        <div class="btn-div"><router-link to="/"><button class="startbtn">Restart</button></router-link></div>
    </div>


</div>

</template>
<script setup type="text/javascript" charset="UTF-8">

   import { ref, onMounted } from 'vue';
   import axios from 'axios';
   
 
   const quizitems = ref([])
   const question = ref([])
   const index = ref(0)
   const choices = ref([])
   const useranswer = ref('')
   const correctanswer = ref('')
   const score=ref(0)

    function getQuestions() {
        axios.get('https://opentdb.com/api.php?amount=10&category=31&difficulty=hard&type=multiple').then( response => {
        quizitems.value=(response.data.results)
        if(index.value < 10){assignAnswers()}
       })
   }   
       function assignAnswers(){
        question.value = quizitems.value[index.value].question
        question.value = question.value.replace(/&quot;/g, '"');
        question.value = question.value.replace(/&#039;/g, "'");
        question.value = question.value.replace(/&amp;/g, "&");
        
        choices.value=quizitems.value[index.value].incorrect_answers
        choices.value.push(quizitems.value[index.value].correct_answer)
        correctanswer.value=quizitems.value[index.value].correct_answer
        correctanswer.value = correctanswer.value.replace(/&quot;/g, '"');
        correctanswer.value = correctanswer.value.replace(/&#039;/g, "'");
        correctanswer.value = correctanswer.value.replace(/&amp;/g, "&");
        shuffleAnswers(choices.value)
        

      }
     function shuffleAnswers(arr){
         let j, x, i;
         for (i = arr.length - 1; i > 0; i--){
         j = Math.floor(Math.random() * (i + 1));
         x = arr[i];
         arr[i] = arr[j];
         arr[j] = x;  
         }
         let array = arr;
         for(i = 0; i <= 3; i++){
            array[i] = array[i].replace(/&quot;/g, '"');
            array[i] = array[i].replace(/&#039;/g, "'");
            array[i] = array[i].replace(/&amp;/g, "&");
            
         }
         choices.value = array;
         }
         
    function nextQuestion(){
        
        
        if(useranswer.value == correctanswer.value){score.value+=1}
        
        index.value+=1;
        if(index.value < 10){assignAnswers()}
    }
    function setAnswer(i){
        useranswer.value = i

        
    }
   

   onMounted( async () => {
       await getQuestions()
   })
</script>

