var $projcards=$(".projcards").isotope({itemSelector:".item",layoutMode:"fitRows"});$(".filters-button-group").on("click","button",function(){var t=$(this).attr("data-filter");$projcards.isotope({filter:t})}),$(".btn-group").each(function(t,o){var e=$(o);e.on("click","button",function(){e.find(".is-checked").removeClass("is-checked"),$(this).addClass("is-checked")})});