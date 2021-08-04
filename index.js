var readlineSync = require('readline-sync');
var chalk = require('chalk');
var red = chalk.bold.red;
var green = chalk.bold.green;
var cyan = chalk.bold.cyan;
var yellow = chalk.bold.yellow;
var log = console.log;
var score = 0;
var highScore=3;
var userName = readlineSync.question(cyan("May I know your name?\n"));
var yesNo = readlineSync.question(cyan("Hey "+userName+", would you like to play Fun Quiz..?\n"));
if(yesNo.toUpperCase() == "YES"){
  log(yellow("Great! Welcome to Fun Quiz."));
  log(yellow.bgBlackBright("Read bellow mentioned instructions."));
  log("->->->->->->->->->->->->->->->->->->->->->->->->->->->->->");
  log("1.There will be 3 levels, each level contains 5 questions and marks varries based on levels.");
  log("2.If you want to qualify for next level,play smart in current level.Bcoz,if you get full marks in current level then only you're allowed for next level.");
  log("3.If you complete 3 levels successfully there is  a surprize waiting for you.");
  log("<-<-<-<-<-<-<-<-<-<-<-<-<-<-<-<-<-<-<-<-<-<-<-<-<-<-<-<-<-");

  var levelOne = [{
    question :"Who won 2021 IPL trophy?",
    options : "a.RCB\nb.CSK\nc.MI\nd.Not yet declared\n",
    answer : "d"
  },
  {
    question : "which is Sushant Singh's last movie?",
    options : "a.MS.Dhoni\nb.Dil Bechara\nc.Kedarnath\nd.Rabta\n",
    answer : "b"
  },
  {
    question : "Spotify is a ________?",
    options : "a.music app\nb.learning app\nc.camera app\nd.photo edit app\n",
    answer : "a"
  }
  ];
  for(var i=0;i<levelOne.length;i++){
    funQuiz(levelOne[i].question,levelOne[i].options,levelOne[i].answer);
  }
  function funQuiz(parameterOne,parameterTwo,parameterThree){  
    log(parameterOne);
    var userAnswer = readlineSync.question(parameterTwo);
    if(userAnswer.toUpperCase() == parameterThree.toUpperCase()){
      score+=1;
      log(green("Yeah, you're right!"));
      log("Your current score is "+score);
    }else{
      log(red("Ohh,you're wrong this time :("));
    }
  }
  console.log(chalk.blueBright.bgBlackBright("Your final score is "+score));
  if(score>=highScore){
  console.log(chalk.yellow("Hey "+userName+", you got highest points..!Send me a screenshot quickly..will update your name in highest scorers list."));
  }
}else{
  log(green("No worries, have a nice day :)"));
}