$(document).ready(function(){
    $("#bold").click(function(){
        $("textarea").toggleClass("style1");
    });
});


$(document).ready(function(){
    $("#italic").click(function(){
        $("textarea").toggleClass("style2");
    });
});


$(document).ready(function(){
    $("#underlined").click(function(){
        $("textarea").toggleClass("style3");
    });
});



$("#style").change(function() {
    var type = $( "#style option:selected" ).text();
    if (type == "initial"){
        $("#textarea").css("fontFamily" , "initial"); 
   } 
   else if (type  == "Sacramento") {
    $("#textarea").css("fontFamily" , "Sacramento, cursive"); 
   }
   else if (type  == "Kalam") {
    $("#textarea").css("fontFamily ",  "Kalam, cursive") ; 
   }
   else if (type  == "Yellowtail") {
    $("#textarea").css("fontFamily" ,"Yellowtail, cursive") ; 
   }
   else if (type == "Armata") {
    $("#textarea").css("fontFamily","Armata, sans-serif"); 
   }
   else if (type  == "Quantico") {
    $("#textarea").css("fontFamily","Quantico, sans-serif"); 
   } 
   else if (type  == "Charmonman") {
   $("#textarea").css("fontFamily ",  "Charmonman, cursive"); 
   }
   else if (type  == "Srisakdi") {
   $("#textarea").css("fontFamily","Srisakdi, cursive"); 
   }
  
});

$("#Taille").change(function() {
    var type = $("#Taille option:selected").text();
    if (type == '30px') {
    $("#textarea").css("fontSize",'30px') ;
    }
   else if (type  == '26px') {
    $("#textarea").css("fontSize" ,'26px') ;
   }
   else if (type == '22px') {
    $("#textarea").css("fontSize",'22px') ; 
   }
   else if (type  == '18px') {
    $("#textarea").css("fontSize",'18px') ; 
   }
   else if (type == '16px') {
    $("#textarea").css("fontSize", '16px') ;
   }
   else if (type  == '12px') {
   $("#textarea").css("fontSize" , '12px') ;
   }
});