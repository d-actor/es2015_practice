// animations
// es2015
// write something else that does something

// card switch function in jQuery

$('.flash-card').click( function() {
  $('.card' + this.id).css("display", "none")
  $('.back' + this.id).css("display", "block")
});

$('.flash-card-back').click( function() {
  $('.back' + this.id).css("display", "none")
  $('.card' + this.id).css("display", "block")
});

// ES6 attempt

// $('.flash-card').click( function() {
//   let front = document.getElementById('card' + this.id) = () => {
//     front.css("display", "none")
//   }
//   let back = document.getElementById('back' + this.id) = () => {
//     back.css("display", "block")
//   }
// })

// animate on click ?

// $('.flash-card').click( function() {
//   $('.card' + this.id).css({
//     'transform': 'rotateX(180deg)',
//     'backface-visibility': 'hidden',
//   })
//   $('.back' + this.id).css({
//     'transform': 'rotateX(180deg)',
//   })
// });
//
// $('.flash-card-back').click( function() {
//   $('.back' + this.id).css("display", "none")
//   $('.card' + this.id).css("display", "block")
// });
