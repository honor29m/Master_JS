$(document).ready(function(){

    // Load

   // $("#datos").load("https://reqres.in/");

    // Get y Post

    $.get("https://reqres.in/api/users", {page : 2}, function(response){
        response.data.forEach((element,index) => {
            $("#datos").append("<p>"+element.first_name+" "+element.last_name+"</p>");
        });
    });

     
})