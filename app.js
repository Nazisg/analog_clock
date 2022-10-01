let hour = document.getElementById("hour")
let min = document.getElementById("min")
let sec = document.getElementById("sec")

setInterval(()=>{
let date = new Date()
let hr = date.getHours()
let mn = date.getMinutes()
let sc = date.getSeconds()

let hrdeg = (hr * 360 / 12) + (mn * (360 / 60) / 12)
let mndeg = (mn * 360 / 60) + (sc * (360 / 60) / 60)
let scdeg = sc * 360 / 60

hour.style.transform = `rotate(${180+(hrdeg)}deg)`
min.style.transform = `rotate(${180+(mndeg)}deg)`
sec.style.transform = `rotate(${180+(scdeg)}deg)`

},1000)