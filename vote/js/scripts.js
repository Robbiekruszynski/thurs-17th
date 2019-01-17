$(document).ready(function() {
  var are18 = parseInt(prompt("Input your age."));

  if (are18>18){
    $("#canVote").show();
  } else if (are18 < 18) {
    $("#canNotVote").show();
  } else if (are18 == 18) {
  alert("welcome to adulthood");
  $("#canVote").show();
  } else {
  alert("Not a valid age.");
  }

});
