// var firstFav
// var secondFav
// var flavor
// var favArray
// var orderedArray = []
var weekend ;
var weekendArray = [];
var space = ' ';
var weekend3Array =[];

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
      console.log(weekend3Array)
  });

  function word3(weekendArray){
    var arraylength = weekendArray.length;
    for (i=0; i < arraylength; i++) {
    // var word = weekendArray[i];
    if (weekendArray[i].length >= 3){
    weekend3Array.push(weekendArray[i]);

  };
  };
  };

});
