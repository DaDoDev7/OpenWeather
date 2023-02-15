var select = document.querySelector("select");
var info = document.querySelector(".infos")

select.addEventListener('change', (event) => {

  var selection = select.value;
 
fetch('https://api.openweathermap.org/data/2.5/weather?q='+selection+'&lang=fr&appid=3c88560a84d124e12e09ce3dd5d66fd4&units=metric')
  .then(response => response.json())
  .then(data => {

    console.log(data);

    var description = data.weather[0].description;
    var humidity = data.main.humidity;
    var temperature = data.main.temp;
    var icon = data.weather[0].icon;
    

    var mytemplate = '<h2 class="city">'+selection.toUpperCase()+'</h2>'+
    '<div class="conditions"> La situation météo à '+selection+' est :'+description+' </div>'+
    '<div class="temperature"> La température actuelle est de   '+Math.round(temperature)+' degrès</div>'+
    '<div class="humidite"> Le taux d\'humidité est de '+humidity+' % </div>'+
    '<div class="iconweather"><img src="http://openweathermap.org/img/wn/'+icon+'@4x.png" alt=""></div>';

    info.innerHTML = mytemplate;

  })
  .catch(error => {
    console.error("Erreur lors de la récupération des données :", error);
  });

});




