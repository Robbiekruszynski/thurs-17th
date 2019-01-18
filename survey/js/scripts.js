$(document).ready(function() {
  $("#btn-holder").click(function(event) {
    var nameInput = $("#name").val();
    var areaInput = $("#area").val();
    var swimInput = $("#swim").val();
    var flyInput  = $("#fly").val();

    $(".name").text(nameInput);


    $(".start-hidden").hide();

    if (areaInput === "Inside" && flyInput === "No"){
      $("#catResult").show();
      currentClass = "#catResult";

    } else if(areaInput === "Outside" && swimInput === "Yes" &&flyInput === "No"){
      $("#frogResult").show();
      currentClass = "#frogResult";

    } else if(areaInput === "Outside" && flyInput === "Yes"){
      $("#birdResult").show();
      currentClass= "#birdResult";

    } else if(areaInput === "Outside" && swimInput === "Sometimes" && flyInput === "No"){
      $("#dogResult").show();
      currentClass="#dogResult";

    } else if(areaInput === "Outside" && swimInput === "No" && flyInput === "No"){
      $("#catResult").show();

    } else {
      $("#catResult").show();
      currentClass = "#catResult";
    }
  });

});
