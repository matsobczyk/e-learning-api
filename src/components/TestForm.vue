<template>
<div class="center">
    <div class="bar">
        <countdown :time="120000" :transform="transform">
            <template slot-scope="props" auto-start:true>
                <div class="timer">{{ props.minutes }}:{{ props.seconds }}</div>
            </template>
        </countdown>
    </div>
    <div class="container" v-if="test" :test="test">
        <div class="singleQuestion" v-for="question in test.questions" :key="question._id">
            <label>
                {{question.question}} <br/>
            </label>
            <div class="inline">
                <div class="answers" v-for="answer in question.availableAnswers" :key="answer"> 
                    <input type="radio" :name="question._id" id="">
                    <div class="answerText">{{answer}}</div>
                </div>
            </div>
        </div>
        <img class="bgimg" src="../assets/logo.svg" height="100px">
    </div>
    <div class="bottomNavBar">
        <button class="button previousButton">
            Previous
        </button>
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
            }
    },
    created () {
        this.getTest()
    },
    methods: {
        alert: function () {
            alert(this.test)
        },
        getTest: function() {
            const requestOptions = {
            method: 'GET',
            headers: { 'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDk3ZDQyMGU0M2VhODE1OTkxNzU3ODkiLCJpYXQiOjE2MjExNjEwNzV9.swJaj138SBU5SJ92mhX03OTbDB-fxA9LC0-6XfbOWes' },
            };
            fetch('http://localhost:3000/test/60a8fa71413f9b167ccc1444', requestOptions)
            .then(response => response.json())
            .then(data => (this.test = data))
        },
        transform(props) {
            Object.entries(props).forEach(([key, value]) => {
                // Adds leading zero
                const digits = value < 10 ? `0${value}` : value;
                props[key] = `${digits}`;
                }); 
                return props;
        },
    },
    
}
</script>

<style>
.timer {
    padding: 10px;
    color: #fcfcfc;
    font-size: 1.5em;
    letter-spacing: 1px;
    font-weight: bold;
}
.button{
    margin-left: 100px;
    margin-right: 100px;
    margin-top: 0.5em;
    border: none;
    color: white;
    text-decoration: none;
    font-size: 16px;
    height: 2em;
    text-align: center;
    line-height: 2em;
    display: table-cell;
    vertical-align: middle;
    border-radius: 12px;
    width: 6em;
    background-color: #f2cc8f;
}
.bottomNavBar {
    background-color: #575757;
    overflow: hidden;
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
    z-index: 2;
    padding-top: 30px;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
li{
    display: inline;
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
    display: inline-block;
    margin: 50px;
    background: #a0b6ac;
    text-align: left;
    padding: 40px;
    padding-top: 0px;
    border-radius: 10px;
    position: relative;
}
label {
    color: #f4f1de;
    margin: 25px 0 15px;
    font-size: 1.5em;
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
    font-size: 1.3em;
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
    background-color: #f2cc8f;
    content: '';
    display: inline-block;
    visibility: visible;
    border: 2px solid white;
}

</style>