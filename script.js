var dayselem = document.querySelector(".day");
var hourselem = document.querySelector(".hours");
var minuteselem = document.querySelector(".minutes");
var secondselem = document.querySelector(".seconds");
var counter = document.querySelector(".left");

const second = 1000,
minute = 60 * second,
hour = 60 * minute,
day = 24 * hour;

const timerfunction = () => {

    let now = new Date(),
       dd = String(now.getDate()).padStart(2, "0"),
       mm = String(now.getMonth() + 1).padStart(2, "0"),
       yyyy = now.getFullYear();

    const enteredday = prompt("enter day").padStart(2, "0");
    const enteredmonth = prompt("enter month").padStart(2, "0");

    now = `${mm}/${dd}/${yyyy}`;

    let targetdate = `${enteredmonth}/${enteredday}/${yyyy}`

    if(now > targetdate){
        targetdate = `${enteredmonth}/${enteredday}/${yyyy + 1}`;
    }

    const intervalid = setInterval(() =>{
        const timer = new Date(targetdate).getTime();  //timing get from user
        const today = new Date().getTime();             // todays date

        const difference  = timer - today;
        const leftday =Math.floor(difference / day);
        const lefthour = Math.floor((difference % day) / hour);
        const leftminute = Math.floor((difference % hour) /minute);
        const leftsecond = Math.floor((difference % minute) /second);

        dayselem.innerText = leftday;
        hourselem.innerText = lefthour;
        minuteselem.innerText = leftminute;
        secondselem.innerText = leftsecond;

        if(difference < 0){
            counter.style.display = "none";
            clearInterval(intervalid);
        }
    }, 0);
};

timerfunction();



