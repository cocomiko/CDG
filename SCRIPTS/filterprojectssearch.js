    'use strict';

    var $projects = $('.projects');
    var qsRegex;

    $projects.isotope({
        itemSelector: '.item',
        layoutMode: 'fitRows'
    });

    $('ul.filters > li').on('click', function(e){

        e.preventDefault();
        var filter = $(this).attr('data-filter');
        $('ul.filters > li').removeClass('active');
        $(this).addClass('active');
        $projects.isotope({filter: filter});

    });
