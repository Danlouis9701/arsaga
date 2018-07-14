// Animate On scroll Nav

$(window).scroll(function(){
   var top = $(this).scrollTop();
   var menu = $('nav');    
    
    if(top >= 200){
        menu.addClass('bg-dark2');
       }else{
           menu.removeClass('bg-dark2');
       }
    
});

// Owl Carrousel Settings

  $(".owl-carousel").owlCarousel({
    items:4,
    slideBy:2,
    loop:true,
    margin:30,
    autoplay:true,
    autoplayTimeout:3500,
    autoplayHoverPause:true,
      responsive:{
        0:{
            items:2
        },
        576:{
            items:3
        },
        768:{
           items:4 
        },  
        992:{
            items:4
        },
        1200:{
            items:5
        }  
    }
  });

 // Mixitup Settings 

$('#mix-wrapper').mixItUp({
  load: {
  	sort: 'order:asc'
  },
	animation: {
    effects: 'fade rotateZ(-180deg)',
    duration: 700
  },
  selectors: {
    target: '.mix-target',
    filter: '.filter-btn',
    sort: '.sort-btn'
  },
  callbacks: {
    onMixEnd: function(state){
      console.log(state)
    }
  }
});


