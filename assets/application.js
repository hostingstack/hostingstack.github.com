// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults

var SolidRails = {};

SolidRails.Corporate = function () {
  return {
  'tour_navigation_step_current': 1,
  'tour_navigation_step_max': 5,
  
  'tour_navigation_step': function(step) {
    var step_current = SolidRails.Corporate.tour_navigation_step_current;
    var step_max = SolidRails.Corporate.tour_navigation_step_max;
    
    if ((step_current + step) >= 1 && (step_current + step) <= step_max) {
      step_current = step_current + step;
      
      $('tour-image').src = '/images/tour/tour' + step_current + '.png';
      
      $('tour-navigation').removeClassName('first');
      $('tour-navigation').removeClassName('last');
      
      if (step_current == 1) {
        $('tour-navigation').addClassName('first');
      }
      if (step_current == step_max) {
        $('tour-navigation').addClassName('last');
      }
    }
    
    SolidRails.Corporate.tour_navigation_step_current = step_current;
  },
  
  'panelnav_select': function(name) {
    $$('.panelnav li').invoke('removeClassName', 'current');
    $$('.panel').invoke('removeClassName', 'show');
    $('panelnav-' + name).addClassName('current');
    $('panel-' + name).addClassName('show');
  },
  
  }
}();