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
  $("#contenido").on("submit", "#login-form", function(event) {
    event.preventDefault(); // previene el comportamiento predeterminado del formulario
    // obtiene los valores del formulario
    var username = $('#email').val();
    var password = $('#contrasena').val();
    // verifica si los datos son correctos
    if (username == 'jorgea.misolar@gmail.com' && password == 'Koke2001') {
      // establece la sesión como iniciada
      console.log("Sesión iniciada");
      sessionStorage.setItem('isLoggedIn', true);
      // carga la página si los datos son correctos
    $("#contenido").load("calc.html");
    } else {
      // muestra una alerta si los datos son incorrectos
      alert('Los datos ingresados son incorrectos. Por favor, inténtalo de nuevo.');
    }
  });
});