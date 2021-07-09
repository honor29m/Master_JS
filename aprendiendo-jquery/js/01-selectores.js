$(document).ready(function(){
    // Selector de ID
    $("#rojo").css("background","red")
                        .css("color","white");

    $("#amarillo").css("background", "yellow").css("color","green");

    $("#verde").css("background", "green").css("color","white");

    // Selector de la clase
    var mi_clase = $(".zebra").css("padding","5px");
    

    $(".sin_borde").click(function(){
        console.log("click");
        $(this).addClass('zebra');
    })

    // Selector de etiqueta
    var parrafos = $('p').css("cursor","pointer");

    parrafos.click(function(){
        var this1 = $(this);
        if(!this1.hasClass('grande')){
            this1.addClass('grande');
        } else {
            this1.removeClass('grande');
        }
    });

    //Selectores de atributo
    $('[title="Google"]').css('background','#ccc');
    $('[title="Facebook"]').css('background','blue');

    //Otros
    //$('p, a').addClass('margen-superior');
    //var busqueda = $("#caja").find('.resaltado');
    var busqueda = $("#caja.resaltado").eq(0).parent().parent().parent().find('[title="Google"]');
    console.log(busqueda);
});