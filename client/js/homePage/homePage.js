$(function() {

if(isMobileDevice() === true){

    let imgHead = `
    <div class="slider">
        <div class='slide1'></div>
        <div class='slide2'></div>
        <div class='slide3'></div>
    </div>

    `;

    let topLogo = `<div class="logo">
        <h1>Canon whiskey and bitters emporium</h1>
        <img id='main-logo' src="img/canon-logo-white.svg" alt="Canon whiskey and bitters emporium">`;

    $('header#mainHeader').append(imgHead);
    $('main#homePage').prepend(topLogo);

    //sets imgages to height of mobile device
    $('#mainHeader').css('height', window.innerHeight+'px');

    $(window).resize(function() {
        $('#mainHeader').css('height', window.innerHeight+'px');
    });

} else {

    let videoHead = `
    <div class='container'>
      <div class='content'>
        <img id='main-logo' src="img/canon-logo-white.svg" alt="Canon whiskey and bitters emporium">
      </div>
      <video autoplay class='video' loop muted width='480'>
        <!-- <source src='video/canon-shot-1.mp4' type='video/mp4'> -->
        <!-- <source src='video/canon-shot-1.ogv' type='video/ogg'> -->
        <source src='video/canon-shot-2.ogv' type='video/ogg'>

        <!-- <source src='video/canon-shot-3.ogv' type='video/ogg'> -->
      </video>
    </div>`;

    $('header#mainHeader').append(videoHead);
    }



});//close on load function

function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
}
