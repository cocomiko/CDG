    'use strict';

    var $publications = $('.publications');

    $publications.isotope({
        itemSelector: '.item',
        layoutMode: 'vertical'
    });

    $('ul.filters > li').on('click', function(e){

        e.preventDefault();
        var filter = $(this).attr('data-filter');
        $('ul.filters > li').removeClass('active');
        $(this).addClass('active');
        $publications.isotope({filter: filter});

    });
