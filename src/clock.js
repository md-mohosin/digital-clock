function updateClock() {
    const date = new Date()


    document.getElementById("date").textContent = date.getDate()
    document.getElementById("month").textContent = date.toLocaleDateString("en-GB", { month: 'long' })
    document.getElementById("year").textContent = date.getFullYear()
    document.getElementById("weekday").textContent = date.toLocaleDateString("en-GB", { weekday: "long" })
    document.getElementById("minute").textContent = date.getMinutes()
}

setInterval(updateClock, 1000)