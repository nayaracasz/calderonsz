$(document).ready(function(){
    document.getElementById("ftbutton").addEventListener("click", function(){
        fetch("https://www.themealdb.com/api/json/v1/1/random.php")
            .then(resp => resp.json())
                .then(datoJson => document.getElementById("apitext").innerHTML = JSON.stringify(datoJson,undefined,"\t"));
    })

    document.getElementById("jqbutton").addEventListener("click", function(){
        $.getJSON("https://www.themealdb.com/api/json/v1/1/random.php", function(datoJson){
            document.getElementById("apitext").innerHTML = JSON.stringify(datoJson,undefined,"\t")
        });
    })
})
    