/*jslint browser: true*/
/*global $, jQuery, alert*/

$(document).ready(function () {
    "use strict";
    
    var $enter, $item1, $item2, $item3, $audioApplaud, $audioBirthday;
    $enter = $('#enter');
    $item1 = $('.item1');
    $item2 = $('.item2');
    $item3 = $('.item3');
    
    $audioApplaud = document.createElement('audio');
    // $audioApplaud.setAttribute('src', 'audio/applaudissements.mp3');
    
    $audioBirthday = document.createElement('audio');
    // $audioBirthday.setAttribute('src', 'audio/Happy-Birthday.mp3');
    
    $enter.on('click', function () {
        $item1.show();
    });
    
    $item1.on('click', function () {
        $item2.show();
    });
    
    $item2.on('click', function () {
        $item3.show();
    });
    
    $item3.on('click', function () {
        $("h1:contains('Today is a special day !!!')").html("Happy Birthday to you !");
        $('#image-1').remove();
        $enter.hide();
        $('.item').hide();
        $('body').css('background-color', '#229AAD');
        $('.blow').show();
        $('.drawing').show();
        $('#wind').show();
        $('#wind-2').show();
        $audioApplaud.play();
    });
    
    $('#wind').on('click', function () {
        $('.flame').hide();
        $audioBirthday.play();
        // $(".blow:contains('Blow your candle !')").html("Light your candle !");
        // $(this).hide();
        $('#wind-2').hide();
        // $('#fire').show();
        $('#wind').attr('src', 'img/image-7.png');
        $('#wind').attr('style', 'width: 60%');
        $('#wind').show();
        $('#opencard').show();
        $('#opencard').attr('style', 'display: inline-block');
    });
	 
    // $('#fire').on('click', function () {
    //     $audioBirthday.pause();
    //     $('.flame').show();
    //     $audioBirthday.pause();
    //     $(".blow:contains('Light your candle !')").html("Blow your candle !");
    //     $(this).hide();
    //     $('#wind').show();
    //     $('#wind-2').show();
    // });

    $('#wind-2').on('click', function () {
        $('.flame').hide();
        $audioBirthday.play();
        // $(".blow:contains('Blow your candle !')").html("Light your candle !");
        $(this).hide();
        // $('#fire').show();
        $('#wind').attr('src', 'img/image-7.png');
        $('#wind').attr('style', 'width: 60%');
        $('#wind').show();
        $('#opencard').show();
        $('#opencard').attr('style', 'display: inline-block');
    });

    $('#opencard').on('click', function () {
        $('#list_section').hide();
        $('#wind').hide();
        $('#opencard').hide();
        $('.drawing').hide();
        $('body').css('background-color', '#ffb0be9e');
        $('body').css('text-align', 'left');
        $('#card').show();
    });
});