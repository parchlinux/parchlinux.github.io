jQuery(function ($) {
    'use strict';
    // -------------------------------------------------------------
    // Countdown
    // -------------------------------------------------------------
    (function () {

        $("#back-countdiown").countdown({
            date: "28 december 2022 10:48:50",
            format: "on"
        });
    
    }()); 

}); // JQuery end


$(document).on('click', '.m-menu .dropdown-menu', function(e) {
  e.stopPropagation()
})