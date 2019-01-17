$(document).ready(function() {
  $("#btn-holder").click(function(event) {
    var nameInput = $("#name").val();
    var areaInput = $("#area").val();
    var swimInput = $("#swim").val();
// if (nameInput === "") {
// alert("Please enter your name.")
    if (areaInput === "Inside"){
      console.log("inside");
      removeId("#catResult");
      $("#result").show();
    }else if(areaInput=== "Outside" && (swimInput) === "Yes");{
      $("#frog").show();
    }else if(areaInput=== "Outside" && (swimInput) === "Sometimes");{
      $("#dog").show();
    }
    console.log("haha u fkn idiiot");
    $("formOne").removeClass();
    $("formOne").addClass(".result");
  });
  console.log("ur not even in the scope n-e-more bich");

});
//
// ---answers
// #dog
// #cat
// #frog
// ----
//
//  --- conditional
// #outside
// #inside
//
// #yes
// #no
// #sometimes
// ----
//
// ---logic
// if you pick inside you get cat, link to cat page
//
// if you pick outside you get frog or dog
//
// if you pick outside && sometimes water you get dog, link to dog page
//
// if you pick outside && yes to water you get frog, link to frog page
//
// ----
