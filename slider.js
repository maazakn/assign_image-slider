$(document).ready(function () {
  var x = 0;
  const activeAllExcept = id => {
    const totalChilds = $('#customSlider').children().length;
    for (let i = 0; i < totalChilds; i++) {
      if (i !== id) {
        $('#customSlider').children().eq(i).removeClass('w--tab-active');
        $('#menuTabList').children().eq(i).removeClass('w--current');
        $('#customSlider').children().eq(i).css('left', '100%');
      } else {
        $('#customSlider').children().eq(i).addClass('w--tab-active');
        $('#menuTabList').children().eq(i).addClass('w--current');
      }
    }
  };

  // for next slide
  $('.btn-next').click(function () {
    if (x < 5) {
      x = x + 1;
    } else {
      x = 0;
    }
    activeAllExcept(x);
    setTimeout(() => {
      $('#customSlider').children().eq(x).css('left', 0);
    }, 50);
  });

  // for prev slide
  $('.btn-prev').click(function () {
    if (x > 0) {
      x = x - 1;
    } else {
      x = 5;
    }
    activeAllExcept(x);
    $('#customSlider').children().eq(x).css('left', '-100%');
    setTimeout(() => {
      $('#customSlider').children().eq(x).css('left', 0);
    }, 50);
  });
});
