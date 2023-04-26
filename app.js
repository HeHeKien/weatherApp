var search = document.querySelector('.search');
var city = document.querySelector('.city');
var country = document.querySelector('.country');
var value = document.querySelector('.value');
var visibility = document.querySelector('.visibility span');
var wind = document.querySelector('.wind span');
var sun = document.querySelector('.sun span');
var shortDesc = document.querySelector('.short-desc');
var time = document.querySelector('.time');
var content = document.querySelector('.content');
var body = document.querySelector('body');



async function changWeatherUi(capitalValue){
    
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${capitalValue}&appid=1869feda038312770920b0bfc6fa82c8`;
    let data = await fetch(apiURL).then(res => res.json());
    if(data.cod == 200){
        content.classList.remove('hidden')
        console.log(data)
        city.innerText = data.name;
        country.innerText = data.sys.country;
        visibility.innerText = `${data.visibility}m`;
        wind.innerText = `${data.wind.speed}m/s`;
        sun.innerText = `${data.main.humidity}%`;
        let temp = Math.round(data.main.temp -273.15)
        value.innerText = temp
        shortDesc.innerText = data.weather[0] ? data.weather[0].main:''
        time.innerText = new Date().toLocaleString('vi')
        body.setAttribute('class', 'xuan')
        if(temp<=30){
            body.setAttribute('class', 'hot' ) 
        }
        if(temp<=27){
            body.setAttribute('class', 'thu')
        }
        if(temp<=23){
            body.setAttribute('class', 'cold')
        }
        
    }else{
        content.classList.add('hidden')
    }

    
}



search.addEventListener('keypress', e => {
    if(e.code = 'Enter'){
        let capitalValue = search.value.trim()  
        changWeatherUi(capitalValue)
    }
})

changWeatherUi('HO CHI MINH')
