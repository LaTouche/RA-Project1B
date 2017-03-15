$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1240:{
            items:4
        }
    }
})
  $("#cartQty").on("click", function (){
       var inputField = parseInt($("#cartQty").value()); // increaSE VALUE BY WHEN CLICK THE BUTTON
           $("#cartQty").value(inputField + 1);
       })
  $("#cartQty").click(function(){ //shows the input for cart quantities
   $("#cartQty").show();
})

  $("input.submitButton").on("click", function() {
  	alert("Thanks for Subscribing!")
  })

});




	