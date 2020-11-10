$(function () {
  // var exampleDefault = new MiniMasonry({
  //   container: '.masonry',
  //   baseWidth: 260,
  //   gutter: 10,
  // });

  let magicGrid = new MagicGrid( {
    container: '.container',
    animate: true,
    gutter: 10,
    static: true,
    useMin: true
  });
  magicGrid.listen();

  // $(window).imagesLoaded( function() {
    // let magicGrid = new MagicGrid({
    //   container: '.container',
    //   animate: true,
    //   gutter: 10,
    //   static: true,
    //   useMin: true
    // });
    // magicGrid.listen();
  // });
  
});

// $(window).on("load", function() {
//   let magicGrid = new MagicGrid({
//     container: '.container',
//     animate: true,
//     gutter: 10,
//     static: true,
//     useMin: true
//   });
//   magicGrid.listen();
// });

