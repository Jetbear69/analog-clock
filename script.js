const hourHand = document.getElementById('hour-hand');
const minuteHand = document.getElementById('minute-hand');
const secondHand = document.getElementById('second-hand');

const updadateClock = () => {
    const now = new Date();

    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const hoursDegrees = ((hours%12)/12)*360+(minutes/60)*30;
    const minutesDegrees = (minutes/60)*360+(seconds/60) * 6;
    const secondsDegrees = (seconds/60)*360;

    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
};

setInterval(updadateClock, 1000);
updadateClock();