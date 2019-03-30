$(function(){
    $('#info p').hide();
    $('#info h4').on('click', function(){
        if ($(this).nextUntil('h4').is(':hidden')) {
            $(this).css({'background-color':'#2cadce'});
        } else {
            $(this).css({'background-color':'gray'});
        }
        $(this).nextUntil('h4').toggle(500);
    })

    $('#info2 p').hide();
    $('#info2 h5').hide();
    $('#info2 img').hide();
    $('#info2 h4').on('click', function(){
        if ($(this).nextUntil('h4').is(':hidden')) {
            $(this).css({'background-color':'#2cadce'});
        } else {
            $(this).css({'background-color':'gray'});
        }
        $(this).nextUntil('h4').toggle(500);
    })

    var i = 0;
    window.setInterval(function(){
        $('#board img').attr('src',desky[i].obrazek);
        $('#board figcaption').text(desky[i].nazev);
        i<desky.length-1 ? i++ : i=0; 
    }, 6000);

});