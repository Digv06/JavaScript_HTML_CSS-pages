const secondHand = document.querySelector(".second-hand");
    const minHand = document.querySelector('.min-hand');
    const hrHand = document.querySelector('.hour-hand');
    const currTime = document.querySelector('.current-time');

    function setDate(){
        // console.log('hello')
        const now = new Date();
        const sec = now.getSeconds();
        const secDegrees = ((sec)*6) +90;
        secondHand.style.transform = `rotate(${secDegrees}deg)`;
        // console.log(sec);

        const mins = now.getMinutes();
        const minDegrees = ((mins)*6) + 90;
        minHand.style.transform = `rotate(${minDegrees}deg)`
        // console.log(mins);

        const hrs = now.getHours();
        const hrDegrees = ((hrs)*30) + 90;
        hrHand.style.transform = `rotate(${hrDegrees}deg)`
        // console.log(hrs);

        const time = now.getTime();
        console.log(time);
    }
    setInterval(setDate, 1000);