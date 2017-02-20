var firstFav
var secondFav
var flavor
var favArray
var orderedArray = []

$(document).ready(function(){

$("#form").submit(function(){
  event.preventDefault();
  firstFav = $("#firstFav").val();
  secondFav = $("#secondFav").val();
  flavor = $("input:radio[name=flavor]:checked").val();

  favArray = [firstFav, secondFav, flavor];
  console.log(favArray)
  var newFunction = function(){
    orderedArray.push(favArray[1]);
    orderedArray.push(favArray[0]);
    orderedArray.push(favArray[2]);
  };
newFunction();
$("#favoriteText").text(favArray[0]
+ ", ");
// alert(favArray[0])
$("#favoriteText").append(favArray[1]
+ ", and ");
// alert(favArray[1])
$("#favoriteText").append(favArray[2]);
// alert(favArray[2])

$(".confirm").show();// reorder();
});
// var reorder = function(){
//
//   orderedArray.push(favArray[1])




});
