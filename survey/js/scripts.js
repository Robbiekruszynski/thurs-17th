$(document).ready(function() {
  $("#btn-holder").click(function(event) {
    var nameInput = $("#name").val();
    var areaInput = $("#area").val();
    var swimInput = $("#swim").val();
    //var currentClass;
    $(".start-hidden").hide();
// if (nameInput === "") {
// alert("Please enter your name.")
    if (areaInput === "Inside"){
      $("#catResult").show();
      currentClass = "#catResult";
    } else if(areaInput=== "Outside" && (swimInput) === "Yes"){
      $("#frogResult").show();
      currentClass = "#frogResult";
    } else if(areaInput=== "Outside" && (swimInput) === "Sometimes"){
      $("#dogResult").show();
      currentClass="#dogResult";
      // $("#dog").show()
    }
    else if(areaInput=== "Outside" && (swimInput) ==="No"){
      $("#catResult").show();
    }//$("formOne").removeClass(currentClass);
     $("formOne").addClass(".result");


     // $("starthidden").empty().text();
  });

});
