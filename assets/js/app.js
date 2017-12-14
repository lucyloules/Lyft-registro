$(document).ready(function() {
/*Función de la vista splash inicial */
$().ready(function() {
  $('.mainfull').hide();
  $(".splash").fadeIn(5000).fadeOut(5000, show);

  function show() {
    $('.mainfull').show();
  }
});
/* Función Signup */
$('#signUp').click(function() {
  $('#form').show();
  $('#mainfull').hide();
})

/*Función volver */
$('#volver').click(function() {
  $('#mainfull').show();
  $('#form').hide();
});
/* Función Login */
$('#logIn').click(function() {
  $('#formLog').show();
  $('#mainfull').hide();
})
/* Función para ir a la sección anterior
 */
$('#volver2').click(function() {
  $('#mainfull').show();
  $('#formLog').hide();
});

});

