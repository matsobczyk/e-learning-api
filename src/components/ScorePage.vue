<template>
  <div class="tableContainer">
    <table id="myTable" style="display: inline-block">
        <thead>
            <tr>
            <th>Number</th>
            <th>Your Answer</th>
            <th>userAnswer</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(value, id) in userAnswers" :key="value">
                <td v-if="value.answer">{{id}}</td>
                <td class="userAnswers" v-if="value.answer">{{value.answer}}</td>
                <td  v-if="value.answer">{{value.answerId}}</td>
            </tr>
        </tbody>
    </table>
    <table style="display: inline-block">
        <thead>
            <tr>
                <th>correctAnswertext</th>
                <th>Question</th>
            </tr>
        </thead>
        <tbody>
            <template v-for="(value) in test.questions">
            <tr v-for="(val) in value" :key="val">
                <td v-if="value">{{val.rightAnswer}}</td>
                <td v-if="value">{{val.question}}</td>
            </tr>
            </template>
        </tbody>
    </table>
    <table style="display: inline-block">
        <thead>
            <tr>
                <th>Point</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(val) in this.check() " :key="val">
                <td v-if="val=='true'" class="true">{{val}}</td>
                <td v-if="val=='false'" class="false">{{val}}</td>
            </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
    props: ['userAnswers'],
    data() {
        return{
            test: null,
            i: parseInt(0)        
            }
    },
    computed: {

    },
    created() {
        this.getTest()
        console.log(this.userAnswers)
        console.log((this.userAnswers).length)
    },
    methods: {
        check: function(){
            let tab1= []
            let tab2= []
            let tab3 =[]
            for(let i =1; i<this.userAnswers.length; i++){
                tab1.push(this.userAnswers[i].answerId)
            }
            for(let j =0; j<this.test.questions.length; j++){
                   for(let k =0; k<this.test.questions[j].length; k++){
                       tab2.push(this.test.questions[j][k].rightAnswer)
                   }
                }
            tab1.forEach((element, index) => {
       
                if (element === tab2[index]){
                    console.log(this.i)
                    console.log('true')
                    tab3.push('true')
                }else if (element != tab2[index]){
                    console.log('false')
                    tab3.push('false')
                    this.i++
                }
            });
            console.log(tab1)
            console.log(tab2)
            // console.log(tab3)
            return(tab3)
        },
            getTest: function() {
            const requestOptions = {
            method: 'GET',
            headers: { 'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDk3ZDQyMGU0M2VhODE1OTkxNzU3ODkiLCJpYXQiOjE2MjExNjEwNzV9.swJaj138SBU5SJ92mhX03OTbDB-fxA9LC0-6XfbOWes' },
            };
            fetch('http://localhost:3000/test/60bf5362cfcff614e8d60928', requestOptions)
            .then(response => response.json())
            .then(data => (this.test = data))
        },
    }
    
})
</script>

<style>
.true {
    color: green;
}
.false {
    color: red;
}
th, td {
  padding: 10px;
  text-align: left;
}
.tableContainer {
    font-family: sans-serif;
   color: #f4f1de;
    width: 65vw;
    max-width: 900px;
    display: inline-block;
    margin: 40px;
    background: #9fbbaf;
    text-align: left;
    padding: 40px;
    padding-top: 0px;
    border-radius: 10px;
    position: relative;
    margin-bottom: 90px;
}

</style>