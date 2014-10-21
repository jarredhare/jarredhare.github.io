$(document).ready(function(){

//RELEASE 0:
//RELEASE 1:
$('body').css({'background-color': 'pink'})

//RELEASE 2:
bodyElement = $('body')
imgElement = $('img')

heading = $('body > h1')
mascot = $('.mascot > h1')

//RELEASE 3:
heading.css('color', 'red');
heading.css('border', 'black dashed 1px');
heading.css('visibility', 'visible');

mascot.html("<h2> Largemouth Bass </h2><h3>(click the image)</h3>");
imgElement.css('border', "black solid 1px");

//RELEASE 4: Event Listener
// $('img').on('mouseover', function(e){
//      e.preventDefault()
//     $(this).attr('src', 'http://marinecreations.homestead.com/files/largemouth_bass_repro.jpg')
//   })
$('img').hover(
  function() {
    $(this).attr('src', 'http://marinecreations.homestead.com/files/largemouth_bass_repro.jpg');
  }, function() {
    $(this).attr('src', '../imgs/dbc_logo.jpg');
  });


//RELEASE 5: Experiment on your own

$( "img" ).click(function() {
  $( "img" ).animate({
    width: "75%",
    opacity: 0.6,
    borderWidth: "15px"
  }, 3000 );
});

})  // end of the document.ready function: do not remove or write DOM manipulation below this.
