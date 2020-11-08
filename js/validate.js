$(function(){
  $('#form').validate({
    rules: {
      name: {
        required: true,
      },
      email: {
        required: true,
      },
      tel: {
        required: true,
      },
      message: {
        required: true,
      },
    },
    messages: {
      name: {
        required: ' 未入力です',
      },
      email: {
        required: ' 未入力です',
      },
      tel: {
        required: ' 未入力です',
      },
      message: {
        required: ' 未入力です',
      },
    },
  })
})