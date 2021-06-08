<template>
<div class="center">
    <div class="bar">
        <countdown :time="120000" :transform="transform">
            <template slot-scope="props" auto-start:true>
                <div class="timer">{{ props.minutes }}:{{ props.seconds }}</div>
            </template>
        </countdown>
    </div>
    <div class="container" v-if="!test">
        <p>No data</p>
    </div>
    

<div v-for="(questions, int) in test.questions" :key="int">
    <div v-show="pageNumber===int">
        <div class="container" v-if="test" :test="test">
        <img class="bgimg" src="../assets/logo.svg" height="150px">
        <div class="singleQuestion" v-for="question in questions" :key="question">
            <label>
            {{question.question}} <br/>
            </label>
            <div class="inline">
                <div class="answers" v-for="answer in question.availableAnswers" :key="answer"> 
                        <input type="radio" :name="question._id">
                        <div class="answerText">{{answer}}</div>
                </div>
            </div>
        </div>
    </div>
    </div>
    
</div>
            
            
    


    <div class="bottomNavBar" :key="navButtonsKey">
        <button class="button" v-on:click="this.getTest()">
            Previous
        </button>
        <div id="navigationButtons" v-for="(button, id) in this.resultCount" :key="button">
             <input type="radio" v-model="pageNumber" name="some-radios" :value=id>
        </div>
        <button class="button nextButton">
            Next
        </button>
    </div>
</div>

</template>

<script>
export default {
    data (){
        return {
            test: null,
            pages: 0,
            navButtonsKey: 0,
            pageNumber: 0
            }
    },
    created () {
        this.getTest()
    },
    methods: {
        next: function() {
            this.pageNumber+=1;
            alert(this.pageNumber);
        },
        previous: function() {
            this.pageNumber -=1;
            alert(this.pageNumber);
        },
        alert: function () {
            alert(this.test)
        },
        getTest: function() {
            const requestOptions = {
            method: 'GET',
            headers: { 'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDk3ZDQyMGU0M2VhODE1OTkxNzU3ODkiLCJpYXQiOjE2MjExNjEwNzV9.swJaj138SBU5SJ92mhX03OTbDB-fxA9LC0-6XfbOWes' },
            };
            fetch('http://localhost:3000/test/60bf5362cfcff614e8d60928', requestOptions)
            .then(response => response.json())
            .then(data => (this.test = data))
            this.i = Math.ceil(this.test.questions.length / 3)
        },
        transform(props) {
            Object.entries(props).forEach(([key, value]) => {
                // Adds leading zero
                const digits = value < 10 ? `0${value}` : value;
                props[key] = `${digits}`;
                }); 
                return props;
        },
        forceRerender() {
            this.navButtonsKey += 1;
        }
    },
    computed: {
        resultCount () {
            var number = Object.keys(this.test.questions).length;
            return number;
        },
        testCount () {
            var number = Math.ceil(this.test.questions.length / 3)
            return number;
        },
        choppedTest () {
            var result = [];
            for (var i in this.test.questions) {
                result.push([i, this.test.questions[i]])
            }
            return result; 
        }
}
    
}
</script>

<style>
#navigationButtons{
    padding-top: 12px;
    padding-left: 1vw;
    padding-right: 1vw;
}
.timer {
    padding: 10px;
    color: #fcfcfc;
    font-size: 1.5em;
    letter-spacing: 1px;
    font-weight: bold;
}
.button{
    margin-left: 12vw;
    margin-right: 12vw;
    margin-top: 0.5em;
    border: none;
    color: white;
    text-decoration: none;
    font-size: 16px;
    height: 2em;
    text-align: center;
    line-height: 2em;
    border-radius: 12px;
    width: 6em;
    background-color: #f2cc8f;
}
.bottomNavBar {
    background-color: #575757;
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 3em;
    display: flex;
    justify-content: center;
}
.bgimg {
    right: -20px;
    bottom: -20px;
    position: absolute;
}
.singleQuestion {
    padding-top: 30px;
}
.bar{
    width: 100%;
    height: 3em;
    background: #f2cc8f;
}
.center{
    text-align: center;
}
.container {
    width: 65vw;
    max-width: 600px;
    display: inline-block;
    margin: 40px;
    background: #a0b6ac;
    text-align: left;
    padding: 40px;
    padding-top: 0px;
    border-radius: 10px;
    position: relative;
    margin-bottom: 90px;
}
label {
    color: #f4f1de;
    margin: 25px 0 15px;
    font-size: 1.2em;
    letter-spacing: 1px;
    font-weight: bold;
}
.answers{
    display: flex;
    margin:10px;
    z-index: 2;
}
.answerText {
    margin-left: 10px;
    color: #f4f1de;
    font-size: 1.1em;
}
input[type='radio']:after {
    width: 15px;
    height: 15px;
    border-radius: 15px;
    top: -2px;
    left: -1px;
    position: relative;
    background-color: #f4f1de;
    content: '';
    display: inline-block;
    visibility: visible;
    border: 2px solid white;
}
input[type='radio']:checked:after {
    width: 15px;
    height: 15px;
    border-radius: 15px;
    top: -2px;
    left: -1px;
    position: relative;
    background-color: #575b76;
    content: '';
    display: inline-block;
    visibility: visible;
    border: 2px solid white;
}

</style>