$(document).ready(function () {
  $(".btn-nav").click(function (event) {
    event.preventDefault();
    $(".btn-nav").removeClass("active btn-tema-nav");
    var enlace = $(this).attr("href");
    $("#contenido").load(enlace + " #info");
    $(this).addClass("active btn-tema-nav");
  });
  $(".btn-nav").click(function(){
    $("title").text($(this).text()+" | Mi Solar")
  });
  $("#tema").click(function () {
    $(this).find("i").toggleClass("fa-sun fa-moon");
    $("body").toggleClass("tema-claro tema-oscuro");
  });
});