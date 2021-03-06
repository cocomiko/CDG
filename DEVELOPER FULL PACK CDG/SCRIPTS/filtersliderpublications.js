// External js: jquery, isotope.pkgd.js, bootstrap.min.js, bootstrap-slider.js
$(document).ready( function() {

    // Create object to store filter for each group

    // Create new object for the range filters and set default values,
    // The default values should correspond to the default values from the slider
    var rangeFilters = {
        'year': {'min':2000, 'max': 2020},
      };
  
    // Initialise Isotope
    // Set the item selector
    var $publications = $('.publications').isotope({
      itemSelector: '.item',
      layout: 'vertical',
      // use filter function
      
      filter: function() {
        var $this = $(this);
        var year = $this.attr('data-year');
        var isInYearRange = (rangeFilters['year'].min <= year && rangeFilters['year'].max >= year);
        return ( isInYearRange );
      }
    });

    $('ul.filters > li').on('click', function(e){

        e.preventDefault();
        var filter = $(this).attr('data-filter');
        $('ul.filters > li').removeClass('active');
        $(this).addClass('active');
        $publications.isotope({filter: filter});

    });
  
    // Initialise Sliders
    // Set min/max range on sliders as well as default values
    var $yearSlider = $('#filter-year').slider({ tooltip_split: true, min: 2000,  max: 2020, range: true, value: [2000, 2020] });
  
  
    function updateRangeSlider(slider, slideEvt) {
      console.log('Current slider:' + slider);
      var sldmin = +slideEvt.value[0],
          sldmax = +slideEvt.value[1],
          // Find which filter group this slider is in (in this case it will be either height or weight)
          // This can be changed by modifying the data-filter-group="age" attribute on the slider HTML
          filterGroup = slider.attr('data-filter-group'),
          // Set current selection in variable that can be pass to the label
          currentSelection = sldmin + ' - ' + sldmax;
  
        // Update filter label with new range selection
        slider.siblings('.filter-label').find('.filter-selection').text(currentSelection);
  
        // Set min and max values for current selection to current selection
        // If no values are found set min to 0 and max to 100000
        // Store min/max values in rangeFilters array in the relevant filter group
        // E.g. rangeFilters['height'].min and rangeFilters['height'].max
        console.log('Filtergroup: '+ filterGroup);
        rangeFilters[filterGroup] = {
          min: sldmin || 0,
          max: sldmax || 100000
        };
        
        // Trigger isotope again to refresh layout
        $publications.isotope();
  
    }
  
    // Trigger Isotope Filter when slider drag has stopped
    $yearSlider.on('slideStop', function(slideEvt){
      var $this =$(this);
      updateRangeSlider($this, slideEvt);
    });
});
  