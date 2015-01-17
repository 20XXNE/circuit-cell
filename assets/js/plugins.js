$(document).ready(function() {
    $('.menu-link').bigSlide({
            menuWidth: '8em'
    });
    var s = slidr.create('slidr-img', {
  breadcrumbs: true,
  overflow: true
}).add('h', ['one', 'two', 'three', 'four', 'five', 'one'])
  .start();
    /*slidr.create('slidr-img', {
        breadcrumbs: true,
        controls: 'corner',
        fade: false,
        keyboard: true,
        overflow: true,
        touch: true,
        transition: 'fade'
    }).start();*/

});