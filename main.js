$(function(){
    $('#info p').hide();
    $('#info h4').on('click', function(){
        if ($(this).nextUntil('h4').is(':hidden')) {
            $(this).css({'background-color':'#38a'});
        } else {
            $(this).css({'background-color':'gray'});
        }
        $(this).nextUntil('h4').toggle(500);
    })

    $('#info2 p').hide();
    $('#info2 h5').hide();
    $('#info2 h4').on('click', function(){
        if ($(this).nextUntil('h4').is(':hidden')) {
            $(this).css({'background-color':'#38a'});
        } else {
            $(this).css({'background-color':'gray'});
        }
        $(this).nextUntil('h4').toggle(500);
    })
});