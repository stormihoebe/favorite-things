// var firstFav
// var secondFav
// var flavor
// var favArray
// var orderedArray = []
var weekend ;
var weekendArray = [];
var space = ' ';
var weekend3Array =[];
var weekendReverse = [];

var weekendSplit = [];
// var countedWords = [];

$(document).ready(function(){
  // console.log("weekend");

  $("#form").submit(function(){
    event.preventDefault();
    weekend = $("#weekend").val();

    weekendArray = weekend.split(" ");



  // function splitString(weekend,space){
  //   weekendArray = weekend.split(space);
    // console.log(weekendArray);
      word3(weekendArray);
      // console.log(weekend3Array)
      weekendReverse = weekend3Array.reverse();
      var reverseString = weekendReverse.join(' ');
      // alert(reverseString);

      //Remove punctuation from weekend string
      weekend = weekend.replace(/[.,\/#!?$%\^&\*;:{}=\-_`~()]/g,"");
      //split weekend string at spaces into array
      weekendSplit = weekend.match(/\S+\s*/g);
      console.log(weekendSplit);
    
      var countedWords = weekendSplit.reduce(function(allWords,word){
         if (word in allWords){
          allWords[word]++;
         }
         else {
           allWords[word] = 1;
         }
         return allWords;

       }, {});
       console.log(countedWords);
    });





alert("This is working")
  function word3(weekendArray){
    var arraylength = weekendArray.length;
    for (i=0; i < arraylength; i++) {
    // var word = weekendArray[i];
    if (weekendArray[i].length >= 3){
    weekend3Array.push(weekendArray[i]);

  };
  };
  };

alert("This is working ALSO")

});
