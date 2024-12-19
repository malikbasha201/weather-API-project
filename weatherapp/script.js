//let url="https://api.openweathermap.org/data/2.5/weather?q=bengaluru&appid=7acc4a196825a1c2058a9ba4efa6876e&units=metric"
let cityInput = document.getElementById("city")
let  searchBtn = document.querySelector("#search-btn")

searchBtn.addEventListener("click",()=>{
    let city = cityInput.value.trim()
    if(city){
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7acc4a196825a1c2058a9ba4efa6876e&units=metric`)
        .then((response) => response.json())
        .then(data => {
            if(data.message){
                alert(data.message)
            }
            else{
                // console.log(data.name);
                // console.log(data.main.temp);
                // console.log(data.main.humidity);
                // console.log(data.wind.speed);
                // console.log(data.weather[0].main);
                document.querySelector(".info").style.display="flex";
                document.getElementById("cityname").innerHTML=data.name;
                document.getElementById("temp").innerHTML=data.main.temp+"℃"; //press wndow button+> key for ℃ 
                document.getElementById("wind").innerHTML="WIND : "+`${Math.round(data.wind.speed)} km/hr`;
            }
        })
        .catch(error => console.log(error))
        
    }
    else{
        alert("First Write the city name")
    }
})
