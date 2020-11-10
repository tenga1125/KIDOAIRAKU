// $(function () {
  // var exampleDefault = new MiniMasonry({
  //   container: '.masonry',
  //   baseWidth: 260,
  //   gutter: 10,
  // });

  $('.container').imagesLoaded( function() {
    // 画像を読み込んだ後に実行したい処理
    let magicGrid = new MagicGrid({
      container: '.container',
      animate: true,
      gutter: 10,
      static: true,
      useMin: true
    });
    magicGrid.listen();
  });

// });
