function calculateTip() {
  var billAmt = document.getElementById("billiamt").value;
  var serviceQual = document.getElementById("serviceQual").value;
  var numOfPeople = document.getElementById("peopleamt").value;

  if (billAmt === "" || serviceQual == 0) {
    alert("Por favor ingrese valores");
    return;
  }
  if (numOfPeople === "" || numOfPeople <= 1) {
    numOfPeople = 1;
    document.getElementById("each").style.display = "none";
  } else {
    document.getElementById("each").style.display = "block";
  }

  var total = (billAmt * serviceQual) / numOfPeople;

  total = Math.round(total * 100) / 100;
  total = total.toFixed(2);

  document.getElementById("totalTip").style.display = "block";
  document.getElementById("tip").innerHTML = total;
}
