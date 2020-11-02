

// $(document).ready(function() {
//     $('body').css('padding-bottom', $('footer').height() + 32);
// });

// $(window).resize(function(){
//     $('body').css('padding-bottom', $('footer').height() + 32);
// });

// $(document).on("click","",function() {
 
// }); 


$(document).ready(function() {
    $('#fullpage').fullpage({
      sectionSelector: '.page',
      scrollOverflow: true,
      navigation: true,

      afterLoad: function(anchor, index){
        console.log(index)
        if(index == 4){
          $('#fp-nav').addClass('black-nav');
        }else{
          $('#fp-nav').removeClass('black-nav');
        }
      }
    });
});
 


 