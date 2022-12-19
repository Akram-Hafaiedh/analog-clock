const secsHand = document.querySelector('.second-hand')
const minsHand = document.querySelector('.min-hand')
const hoursHand = document.querySelector('.hour-hand')
const currentTime = () =>{
    // const el = document.querySelector("h1");
    // console.log(el)
    
    let date = new Date();
    let hour = date.getHours();
    let mins = date.getMinutes();
    let seconds = date.getSeconds();
    
    let secondsDegrees = ((seconds/60)*360)+90;
    let minDegrees = ((mins/60)*360) + ((seconds /60)*6) + 90 ;
    let hourDegrees = ((hour/12)*360)+((mins/60)*30) + 90 ;

    secsHand.style.transform = `rotate(${secondsDegrees}deg)`
    minsHand.style.transform = `rotate(${minDegrees}deg)`
    hoursHand.style.transform = `rotate(${hourDegrees}deg)`
    // hh = hh < 10 ? `0${hh}`:hh;
    // mm = mm < 10 ? `0${mm}`:mm;
    // ss = ss < 10 ? `0${ss}`:ss;
    
    // let time = `${hh}:${mm}:${ss}`;
    // el.innerText = time;
}

currentTime();
setInterval(currentTime, 1000);