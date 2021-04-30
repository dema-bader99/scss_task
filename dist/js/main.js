const countDownDate = new Date("may 8, 2021 18:31:40").getTime();


// Run myfunc every second
var myfunc = setInterval(function() {
    const day =document.getElementById("days");
    const hour =document.getElementById("hours");
    const min =document.getElementById("mins");
    const sec =document.getElementById("secs");
    let now = new Date().getTime();
    let timeleft = countDownDate - now;
    // Calculating the days, hours, minutes and seconds left
    const days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

    // Result is output to the specific element

    day.innerHTML = (days<10?'0':'') + days
    hour.innerHTML = (hours<10?'0':'') + hours
    min.innerHTML = (minutes<10?'0':'') + minutes
    sec.innerHTML = (seconds<10?'0':'') +seconds
    // Display the message when countdown is over
    if (timeleft < 0) {
        clearInterval(myfunc);
        day.innerHTML = "00"
        hour.innerHTML = "00"
        min.innerHTML = "00"
        sec.innerHTML = "00"
        document.getElementById("end").innerHTML = "TIME UP!!";
    }
});