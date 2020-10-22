"use strict";

// is
function is(item) {
  var data = $(item).is($(item));
  return data;
} //console-log


function console_show(console_value) {
  console.log('%cKK-CONSOLE', 'padding: 5px 10px;font-size: 14px;background: #2c375b; color: #fff;', console_value);
} //resize_img


function resize_img(item, size) {
  $(item).each(function () {
    if ($(window).width() < size) {
      $(this).attr('src', $(this).attr('src').replace(/computer/g, 'mobile'));
    } else {
      $(this).attr('src', $(this).attr('src').replace(/mobile/g, 'computer'));
    }
  });
  $(window).resize(function () {
    $(item).each(function () {
      if ($(window).width() < size) {
        $(this).attr('src', $(this).attr('src').replace(/computer/g, 'mobile'));
      } else {
        $(this).attr('src', $(this).attr('src').replace(/mobile/g, 'computer'));
      }
    });
  });
} // window width


function width_size(num) {
  var data = $(window).width() < num;
  return data;
} //wp toggle


function wp_toggle() {
  if (is('#mobile-nav-toggle')) {
    $('#mobile-nav-toggle i').remove();

    for (var i = 0; i < 3; i++) {
      var text = '<span></span>';
      $('#mobile-nav-toggle').append(text);
    }
  }
} //svg


function enable_svg() {
  $('img.svg').each(function () {
    var $img = $(this);
    var imgID = $img.attr('id');
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');
    $.get(imgURL, function (data) {
      // Get the SVG tag, ignore the rest   
      var $svg = $(data).find('svg'); // Add replaced image's ID to the new SVG   

      if (typeof imgID !== 'undefined') {
        $svg = $svg.attr('id', imgID);
      } // Add replaced image's classes to the new SVG   


      if (typeof imgClass !== 'undefined') {
        $svg = $svg.attr('class', imgClass + ' replaced-svg');
      } // Remove any invalid XML tags as per http://validator.w3.org   


      $svg = $svg.removeAttr('xmlns:a'); // Check if the viewport is set, if the viewport is not set the SVG wont't scale.   

      if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
        $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'));
      } // Replace image with new SVG   


      $img.replaceWith($svg);
    }, 'xml');
  });
} //porduct-carousel


function product_carousel() {
  $('.owl-carousel.product-carousel').each(function () {
    var owl = $(this);
    owl.owlCarousel({
      items: 1,
      // loop:true,
      margin: 10,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true
    });
    var imgLength = $(this).find('owl-item').length;

    for (var i = 0; i < imgLength; i++) {
      var imgSrc = $(this).find('owl-item').eq(i).find('img').attr('src');
      $(this).find('.owl-dots .owl-dot').eq(i).children('span').css('background-image', 'url("' + imgSrc + '")');
    }
  });
} //電腦實際寬度


var GetScrollBarWidth = function GetScrollBarWidth() {
  var creatDiv = $('<div class="outerDiv">').append($("<div class='innerDiv'>"));
  $('body').append(creatDiv);
  var w1 = this.getWidth('.innerDiv');
  $('.outerDiv').css({
    overflow: "scroll"
  });
  var w2 = this.getWidth('.innerDiv');
  this.width = w1 - w2;
  $('.outerDiv').remove();
};

GetScrollBarWidth.prototype.getWidth = function (el) {
  var data = $(el).innerWidth();
  return data;
};

GetScrollBarWidth.prototype.responWidth = function (width) {
  var window_width = $(window).width() + this.width;

  if (window_width < width) {
    return true;
  } else {
    return false;
  }
};

var getWidth = new GetScrollBarWidth();
$(function () {
  // tab
  $('.tab-list li').click(function () {
    var el = $(this),
        link = el.data('tab');
    el.siblings().removeClass('active');
    el.addClass('active');
    $('.tab-contents .content').each(function () {
      var elc = $(this);

      if (elc.data('content') === link) {
        elc.fadeIn(500).addClass('active');
        elc.siblings().fadeOut(0).removeClass('active');
      }
    });
  }); // background

  if (is('[data-bg]')) {
    $('[data-bg]').each(function () {
      var bg_src = $(this).attr('data-bg'),
          bg_pos_x = $(this).attr('data-bg-x'),
          bg_pos_y = $(this).attr('data-bg-y');
      $(this).css({
        'background-image': 'url("' + bg_src + '")',
        'background-position': bg_pos_x + ' ' + bg_pos_y
      });
    });
  } // background_color


  if (is('[data-bg-color]')) {
    $('[data-bg-color]').each(function () {
      var bg_src = $(this).attr('data-bg-color');
      $(this).css({
        'background-color': bg_src
      });
    });
  } //max-width


  if (is('[data-max-width]')) {
    $('[data-max-width]').each(function () {
      var max_width = $(this).attr('data-max-width');
      $(this).css({
        'max-width': max_width + 'px'
      });
    });
  }

  $('a').click(function (e) {
    var ahref = $(this).attr('href');

    if (ahref == "" || ahref == "#") {
      e.preventDefault();
      alert("網站建置中 ...");
    }
  });
});
/**
 * @param  {} item
 * @param  {} type
 * @param  {} num
 * @param  {} {vardelay_time=0;for(vari=0;i<$(item
 * @param  {} .length;i++
 * @param  {} {$(item
 * @param  {} .eq(i
 * @param  {} .css(type
 * @param  {} delay_time+'s'
 */

function delay_action(item, type, num) {
  var delay_time = 0;

  for (var i = 0; i < $(item).length; i++) {
    $(item).eq(i).css(type, delay_time + 's');
    delay_time += num;
  }
} //指定物件的高度


function elTop(el) {
  var elTop = $(el).offset().top;
  var elBottom = elTop + $(el).height();
  var datas = {
    top: elTop,
    bottom: elBottom
  };
  return datas;
} //偵測視窗滾動以及指定項目之位置比較


function watchEl(element, active) {
  var screenHeight = $(window).height();
  var screenTop = $(window).scrollTop();
  var screenBottom = screenTop + screenHeight;
  $(element).each(function () {
    var condition01 = elTop($(this));
    var condition02 = screenBottom - screenHeight / 8;

    if (condition01.top < condition02 && screenTop < condition01.top) {
      $(this).addClass(active);
    }
  });
} //開始啟動動畫


function watchElStart(els) {
  els.forEach(function (el) {
    $(el.dom).each(function () {
      $(this).addClass(el.cls);
    });
    setTimeout(function () {
      watchEl(el.dom, el.active);
    }, 10);
    $(window).on('scroll', function () {
      watchEl(el.dom, el.active);
    });
  });
} // var animationArray = [
//   {dom: '#dom', cls: 'fade',active: 'animated'},
//   {dom: '#dom2', cls: 'fade',active: 'animated'},
//   {dom: '#dom3', cls: 'fade',active: 'active'},
// ]
// watchElStart(animationArray)