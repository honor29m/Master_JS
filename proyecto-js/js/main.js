$(document).ready(function(){

    // slider - bxSlider plugin
    if (window.location.href.indexOf('index') > -1) {
        $('.bxslider').bxSlider({
            mode: 'fade',
            captions: true,
            slideWidth: 1200,
            responsive: true,
            pager: true
        });
    }

    // Posts - moment js plugin

    if (window.location.href.indexOf('index') > -1) {
        var posts = [
            {
                title: 'Prueba de titulo 1',
                date: 'Publicado el dia ' +moment().format("MMM Do YYYY"),
                content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates eum doloremque necessitatibus quos laborum dolor, atque inventore at illo mollitia iure nostrum explicabo aut in magni alias voluptatibus placeat voluptatum?'
            },
            {
                title: 'Prueba de titulo 2',
                date: 'Publicado el dia ' +moment().format("MMM Do YYYY"),
                content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates eum doloremque necessitatibus quos laborum dolor, atque inventore at illo mollitia iure nostrum explicabo aut in magni alias voluptatibus placeat voluptatum?'
            },
            {
                title: 'Prueba de titulo 3',
                date: 'Publicado el dia ' +moment().format("MMM Do YYYY"),
                content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates eum doloremque necessitatibus quos laborum dolor, atque inventore at illo mollitia iure nostrum explicabo aut in magni alias voluptatibus placeat voluptatum?'
            },
            {
                title: 'Prueba de titulo 4',
                date: 'Publicado el dia ' +moment().format("MMM Do YYYY"),
                content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates eum doloremque necessitatibus quos laborum dolor, atque inventore at illo mollitia iure nostrum explicabo aut in magni alias voluptatibus placeat voluptatum?'
            },
            {
                title: 'Prueba de titulo 5',
                date: 'Publicado el dia ' +moment().format("MMM Do YYYY"),
                content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates eum doloremque necessitatibus quos laborum dolor, atque inventore at illo mollitia iure nostrum explicabo aut in magni alias voluptatibus placeat voluptatum?'
            },
        ];
    
        posts.forEach((item, index) => {
            var post =  `
                <article class="post">
                    <h2>${item.title}</h2>
                    <span class="date">${item.date}</span>
                    <p>
                        ${item.content}
                    </p>
                    <a href="#" class="button-more">Leer más</a>
                </article>
            `;
    
            $("#posts").append(post);
        });
    }


    

    // Selector de tema
    var theme = $("#theme");

    $("#to-green").click(function(){
        theme.attr("href", "css/green.css");
    });

    $("#to-red").click(function(){
        theme.attr("href", "css/red.css");
    });

    $("#to-blue").click(function(){
        theme.attr("href", "css/blue.css");
    });

    //Scroll hacia arriba automatico
    $('.subir').click(function(){
        e.preventDefault();

        $('html, body').animate({
            scrollTop: 0
        }, 500);

        return false;
    });

    //Login falso
    $("#login form").submit(function(){
        var form_name = $("#form_name").val();

        localStorage.setItem("form_name", form_name);
    });

    var form_name = localStorage.getItem("form_name");
    if (form_name != null  && form_name != "undefinde"){
        var about_parrafo = $("#about p");

        about_parrafo.html("<br><strong>Bienvenido, " + form_name + "</strong> ");
        about_parrafo.append("<a href='#' id='logout'>Cerrar Sesion</a>");

        $("#login").hide();

        $("#logout").click(function(){
            localStorage.clear();
            location.reload();
        });
    }

    if (window.location.href.indexOf('about') > -1) {
        $('#acordeon').accordion();
    }


    if (window.location.href.indexOf('reloj') > -1) {

        setInterval(function(){
            var reloj = moment().format("hh:mm:ss");
            $("#reloj").html(reloj);
        }, 1000);
        
    }

    // validacion
    if (window.location.href.indexOf('contact') > -1) {

        $("form input[name='date']").datepicker({
            dateFormat: 'dd/mm/yy'
        });

        $.validate({
            lang: 'es'
        });
    }
    
});