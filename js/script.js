jQuery('document').ready(function($){
    var menuPagina =$('.menu'),
        menu= $('.navegador ul');
    menuPagina.click(function(){

        if( menu.hasClass('mostrar')){
            menu.removeClass('mostrar');
        }else{
            menu.addClass('mostrar');
        }
    });
});
jQuery('document').ready(function($){
    var formulogin2p =$('.formulogin2'),
        formulogin2= $('.navegadorlogin ul');
    formulogin2p.click(function(){

        if( formulogin2.hasClass('login')){
            formulogin2.removeClass('login');
        }else{
            formulogin2.addClass('login');
        }
    });
});
window.sr=ScrollReveal();
    sr.reveal('.cabecera', {
        duration: 2000,
        origin:'botton',
        distance:'-100px'
    });
    

 