$(document).ready(function() {
  $("#btn-holder").click(function(event) {
    var nameInput = $("#name").val();
    var areaInput = $("#area").val();
    var swimInput = $("#swim").val();
    var flyInput  = $("#fly").val();

    $(".name").text(nameInput);


    $(".start-hidden").hide();

    if (nameInput === "") {
      alert("Please enter your name.")

    }else if (areaInput === "" && swimInput === "" && flyInput === "") {
      alert("Please fill complete the survey")

    } else if (areaInput === "Inside" && flyInput === "No") {
      $("#catResult").show();
      currentClass = "#catResult";
      $(".user-result").show();
      $("#catResult").show();
      $("#catResult").siblings().hide();

    } else if(areaInput === "Outside" && swimInput === "Yes" &&flyInput === "No"){
      $("#frogResult").show();
      currentClass = "#frogResult";
      $("#frogResult").siblings().hide();


    } else if(areaInput === "Outside" && flyInput === "Yes"){
      $("#birdResult").show();
      currentClass= "#birdResult";
      $("#birdResult").siblings().hide();


    } else if(areaInput === "Outside" && swimInput === "Sometimes" && flyInput === "No"){
      $("#dogResult").show();
      currentClass="#dogResult";
      $("#dogResult").siblings().hide();


    } else if(areaInput === "Outside" && swimInput === "No" && flyInput === "No"){
      $("#catResult").show();
      currentClass = "#catResult";
      $("#catResult").siblings().hide();
      
    } else {
      $("#catResult").show();
      currentClass = "#catResult";
      $("#catResult").siblings().hide();

    }
    event.preventDefault();

  });

});
