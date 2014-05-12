/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50, regexp: true */
/*global $, window */

$(document).ready(function () {
    "use strict";
    $('a.toggle').click(function (event) {
        console.log("clicked");
        if ($(this).parent().hasClass('closed')) {
            console.log("opening!");
            $(this).parent().removeClass('closed').addClass('open').find('video').get(0).play();
            //$(this).
        } else if ($(this).parent().hasClass('open')) {
            console.log("closing!");
            $(this).parent().removeClass('open').addClass('closed').find('video').get(0).pause();
        }
    });
    
    $('video').each(function (index) {
        var v = $(this).get(index);
        v.addEventListener("ended", function(){
            console.log("ended!");
            closeVideo(v);
        });
        
    });
});

function closeVideo(vid){
    vid.pause();
    $(vid).parent().removeClass('open').addClass('closed');
}