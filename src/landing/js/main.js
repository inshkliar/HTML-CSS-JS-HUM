jQuery(document).ready(function(){
    
    // tab our services
    
     $('.tab-content > div').not(':first-of-type').hide(); 
    
    $('.tab-menu li').each(function(i){
	 
	  $(this).attr('data-tab', 'tab' + i);
	 
	 });  
 
 $('.tab-content > div').each(function(i){
	 
	  $(this).attr('data-tab', 'tab' + i);
	 
	 });  
  	  
 $('.tab-menu li').on('click', function(){
	 
	 var datatab = $(this).data('tab');  
	 var getWrapper = $(this).closest('.tab-wrapper');
	 
	 getWrapper.find('.tab-menu li').removeClass('active');
	 $(this).addClass('active');
	 
	 getWrapper.find('.tab-content > div').hide();
	 getWrapper.find('.tab-content > div[data-tab='+datatab+']').show();
	 }); 

    //tab our services
    // amazing work
    
      var all = $('#all');
      var grafic = $('#grafic');
      var design = $('#design');
      var landing = $('#landing');
      var wordpress = $('#wordpress');
    
      var contentImg = $('.container-work article');
    
     var classactrive = $('#list-amazing-work li a');
       
    
      all.click(function(e){
           e.preventDefault();
           contentImg.fadeIn();
          classactrive.removeClass('active-work');
          $(this).addClass('active-work');
       });
    
       grafic.click(function(e){
           e.preventDefault();
           contentImg.hide();
           $('.grafic').fadeIn();
           classactrive.removeClass('active-work');
          $(this).addClass('active-work');
       });
    
     design.click(function(e){
           e.preventDefault();
           contentImg.hide();
           $('.design').fadeIn();
         classactrive.removeClass('active-work');
          $(this).addClass('active-work');
       });
    landing.click(function(e){
           e.preventDefault();
           contentImg.hide();
           $('.landing').fadeIn();
        classactrive.removeClass('active-work');
          $(this).addClass('active-work');
       });
    wordpress.click(function(e){
           e.preventDefault();
           contentImg.hide();
           $('.wordpress').fadeIn();
        classactrive.removeClass('active-work');
          $(this).addClass('active-work');
       });
    
    
    var loadingbtn = $('#loadimg12');
    
    var block12 = $('#loading12');
    
     block12.hide();
    loadingbtn.click(function(e){
        e.preventDefault();
        block12.fadeIn();
        $(this).fadeOut();
        
    });
    // amazing work
    
    // modal
    
     var openmodal = $('.openModWin1');
     var modalwrapp = $('#modal-wrapp');
     var closemodal = $('.social a, #submit');
    
    
   modalwrapp.hide();
    
    
    openmodal.click(function(){
        
        modalwrapp.fadeIn();
    });
    closemodal.click(function(){
        modalwrapp.fadeOut();
    });
    
    //modal
    
    
    
    
    
    $('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: true,
  centerMode: true,
  focusOnSelect: true
});
          
    
    
    
    $('.grid').masonry({
  // options
  itemSelector: '.grid-item',
  columnWidth: 200
});
    
    
    
    
    
    
    
    
    
    
    
}); // ready