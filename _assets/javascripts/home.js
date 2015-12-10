var modal = (function(){

    method = {};

    // Open the modal
    method.open = function (settings) {
      content.empty().append(settings.content);

      modalDiv.css({
          width: settings.width || 'auto', 
          height: settings.height || 'auto'
      })

      $(window).bind('resize.modal', method.center);

      modalDiv.show();
      overlay.show();
    };    

    // Close the modal
    method.close = function () {
      debugger;
      modal.modalDiv.hide();
      modal.overlay.hide();
      modal.content.empty();
      $(window).unbind('resize.modal');
    };

    return method;
}());

$(document).ready(function(){
    modal.overlay = $('#overlay');
    modal.modalDiv = $('#modal');
    modal.content = $('#content');
    $('body').append(modal.overlay, modal.modalDiv);
    submitListener();
});

function submitListener(){
  $('.pwd-form').submit(function(event){
    console.log("hi!");
    event.preventDefault();
    var pwd = $('.pwd-form').find('[type="text"]').val();
    if(pwd === "HiveLDS"){
      modal.close();
    }
  })
}