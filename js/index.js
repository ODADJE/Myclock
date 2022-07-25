const myClock = () =>{
    let display = document.querySelector("h1")

    const date = new Date()

    let hour = date.getHours()
    let minute = date.getMinutes()
    let second = date.getSeconds()

    hour = hour < 10 ? `0${hour}`:hour
    minute = minute < 10 ? `0${minute}`:minute
    second = second < 10 ? `0${second}`:second

    let time = `${hour} : ${minute} : ${second}`
    
    display.innerText = time
}

myClock()
setInterval(myClock,1000)