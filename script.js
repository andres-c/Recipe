$(document).ready(function() {
  console.log("Script included!");

    $(".components-item").click(function() {
        var $li = $(this);
        $li.toggleClass('stroked');
    });

    $('.pic').click(function(){
         $(this).find('img').toggle(1000);
    });
});

