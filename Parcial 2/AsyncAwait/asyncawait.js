$(document).ready(function(){
    document.getElementById("ftbutton").addEventListener("click", function(){
        fetch("https://www.themealdb.com/api/json/v1/1/random.php")
            .then(resp => resp.json())
                .then(datoJson => document.getElementById("apitext").innerHTML = datoJson.meals[0].strMeal + "<br><img src='" + datoJson.meals[0].strMealThumb + "' height='300px'>");
    })
    document.getElementById("aabutton").addEventListener("click", async function(){
        let resp = await fetch("https://www.themealdb.com/api/json/v1/1/random.php")
        let datoJson = await resp.json()
        document.getElementById("apitext").innerHTML = datoJson.meals[0].strMeal + "<br><img src='" + datoJson.meals[0].strMealThumb + "' height='300px'>";
    })
    document.getElementById("jqbutton").addEventListener("click", function(){
        $.getJSON("https://www.themealdb.com/api/json/v1/1/random.php", function(datoJson){
            document.getElementById("apitext").innerHTML = datoJson.meals[0].strMeal + "<br><img src='" + datoJson.meals[0].strMealThumb + "' height='300px'>";
        });
    })
})
    