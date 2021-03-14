$(document).ready(function () {
  $("p,h1,h2").click(function () {
    $(this).hide();
  })
  $("#id1").mouseenter(function () {
    alert("Presionaste un H1 con clave")
  })
  $("button").click(function()
  {
      $("#div1").fadeIn()
      $("#div2").fadeIn("slow")
      $("#div3").fadeIn(3000)
      $("#div4").fadeOut()
      $("#div5").fadeToggle()
  })
});
