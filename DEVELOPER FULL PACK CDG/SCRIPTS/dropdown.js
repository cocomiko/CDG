
  $('.dropdownn').click(function(e){
    $(this).find('.dropdownn-menu').toggleClass('open');
    $($(e.target).find('.down-caret').toggleClass('open-caret'));
    e.preventDefault();
    e.stopPropagation();
    $(document).click(function(){
      $('.dropdownn-menu').removeClass('open');
      $('.down-caret').removeClass('open-caret');
    });
  });
