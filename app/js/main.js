'use strict';
/*eslint-disable new-cap, no-unused-vars */
/*global  $ */

$(document).ready(function(){
    // set up hover panels
    // although this can be done without JavaScript, we've attached these events
    // because it causes the hover to be triggered when the element is tapped on a touch device
  $('.hover').hover(function(){
      $(this).addClass('flip');
  }, function(){
      $(this).removeClass('flip');
  });
  $(window).load(function(){
      $('.content').mCustomScrollbar();
  });

  $('.mCustomScrollbar  li').on('click', function(){
    $('.Character').eq($(this).index())
      .addClass('bounceInLeft')
      .removeClass('bounceOutLeft')
      .addClass('active')

      .siblings()
      .removeClass('bounceInLeft')
      .addClass('bounceOutLeft')
      .removeClass('active');
    var url = $('.Character').eq($(this).index()).attr('data-href');
    var state = { 'page_id': url};
    var title = url;

    history.pushState(state, title, url);

  });
});
function toggleCodes(on) {
  var obj = document.getElementById('icons');
  if (on) {
    obj.className += ' codesOn';
  } else {
    obj.className = obj.className.replace(' codesOn', '');
  }
}

