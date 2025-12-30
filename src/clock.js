function updateClock() {
    const date = new Date()


    document.getElementById("date").textContent = date.getDate()
    document.getElementById("month").textContent = date.toLocaleDateString("en-GB", { month: 'long' })
    document.getElementById("year").textContent = date.getFullYear()
    document.getElementById("weekday").textContent = date.toLocaleDateString("en-GB", { weekday: "long" })
    document.getElementById("minute").textContent = date.getMinutes()
    document.getElementById("second").textContent = date.getSeconds()

    let hours = date.getHours()
    let ampm = hours >= 12 ? 'PM' : "AM"
    hours = hours % 12;
    hours = hours === 0 ? 12 : hours

    
    document.getElementById("hour").textContent= hours
    document.getElementById("ampm").textContent=ampm
}

setInterval(updateClock, 1000)