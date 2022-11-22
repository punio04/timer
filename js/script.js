$(function () {
  var $win = $(window),
    $reasons = $('.reasons__title'),
    $fv = $('.fv__img');

  $win.on('load scroll', function () {
    var value = $(this).scrollTop();
    //PC
    if ($win.width() > 768) {
      // $fv.html('<img src="./img/header01_pc.jpg" alt="サンプル画像">');
      // $fv.html('<img src="./img/header02_pc.jpg" alt="サンプル画像">');
      // $fv.html('<img src="./img/header03_pc.jpg" alt="サンプル画像">');
      // $fv.html('<img src="./img/header04_pc.jpg" alt="サンプル画像">');
      // attr('src', './img/header01_pc.jpg');
      // $fv.children('img').
      // attr('src', './img/header02_pc.jpg');
      // $fv.children('img').
      // attr('src', './img/header03_pc.jpg');
      // $fv.children('img').
      // attr('src', './img/header04_pc.jpg');

      $reasons.children('img').
        attr('src', './img/reason__title__pc.png');
      $fv.children('img').
        attr('src', './img/header1__pc.jpg');

    } else {
      $fv.children('img').
        attr('src', './img/header_sp.jpg');
    }



  });
});
