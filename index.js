
function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
}


if (!isMobileDevice()) {

window.sr = ScrollReveal();

    sr.reveal('.navegacion-principal',{
        duration: 500
       
    });

    sr.reveal('h1, h2',{
        duration: 1000,
        origin: 'bottom',
        distance: '-25px'
    });
 
    sr.reveal('.sobremi',{
        duration: 1000,
        origin: 'bottom',
        distance: '-25px'
    });
    sr.reveal('h3, .images-container',{
        duration: 1000,
        origin: 'bottom',
        distance: '-25px'
    });
    sr.reveal('.table, .btnCV',{
        duration: 2000,
        origin: 'bottom',
        distance: '-20px'
    });
    sr.reveal('.card1',{
        duration: 2000,
        origin: 'rigth',
        distance: '-50px'
    });
    sr.reveal('.card2',{
        duration: 2000,
        origin: 'top',
        distance: '-50px'
    });
    sr.reveal('.card3',{
        duration: 2000,
        origin: 'left',
        distance: '-50px'
    });
    sr.reveal('.contactotitulo, form',{
        origin: 'bottom',
        distance: '-25px',
        duration: 1000
    });

}