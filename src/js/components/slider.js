
$( window ).on( "load", function(){ 

  $('.all').click(function(iret){
    $('.all').toggleClass('white')
 
    $('.porfolio__img-1').toggleClass('display')
   })
})



$( window ).on( "load", function() { 
  $('.web').click(function(iret){
    $('.web').toggleClass('white')
 
    $('.porfolio__img-2').toggleClass('display')
   })
})

$( window ).on( "load", function() { 
  $('.komponent').click(function(iret){
    $('.komponent').toggleClass('white')
 
    $('.porfolio__img-3').toggleClass('display')
   })
})

$( window ).on( "load", function() { 
  $('.anima').click(function(iret){
    $('.anima').toggleClass('white')
    
    $('.porfolio__img-4').toggleClass('display')
   })
})


$( window ).on( "load", function() { 
  $('.mockups').click(function(iret){
    $('.mockups').toggleClass('white')
    
    $('.porfolio__img-5').toggleClass('display')
   })
})

let elem = document.getElementsByClassName('porfolio__img-5'); 

// function OneImg(){

//   for(let i = $('.white');i )
 
// }
// OneImg()