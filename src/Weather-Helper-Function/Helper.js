const getBackground = (color) => {

    const obj = [
        {
            id: "clear sky",
            result: [{ icon: "01d", background: "bg-clearskyday" }, { icon: "01n", background: "bg-clearskynight" }]
        },
        {
            id: "few clouds",
            result: [{ icon: "02d", background: "bg-cloudsday" }, { icon: "02n", background: "bg-cloudsnight" }]
        },
        {
            id: "scattered clouds",
            result: [{ icon: "03d", background: "bg-cloudsday" }, { icon: "03n", background: "bg-cloudsnight" }]
        },
        {
            id: "broken clouds",
            result: [{ icon: "04d", background: "bg-cloudsday" }, { icon: "04n", background: "bg-cloudsnight" }]
        },
        {
            id: "shower rain",
            result: [{ icon: "09d", background: "bg-rainday" }, { icon: "09n", background: "bg-rainnight" }]
        },
        {
            id: "rain",
            result: [{ icon: "10d", background: "bg-rainday" }, { icon: "10n", background: "bg-rainnight" }]
        },
        {
            id: "thunderstorm",
            result: [{ icon: "11d", background: "bg-thunderstormday" }, { icon: "11n", background: "bg-thunderstormnight" }]
        },
        {
            id: "snow",
            result: [{ icon: "13d", background: "snowday" }, { icon: "13n", background: "bg-snownight" }]
        },
        {
            id: "mist",
            result: [{ icon: "50d", background: "mistday" }, { icon: "50n", background: "bg-mistnight" }]
        }

    ]


}

const getDate = () => {

    const dte = new Date();
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const months = ["January", "February", "March", "April", "May", "June", "July",
        "August", "September", "October", "November", "December"];

    const month = months[dte.getMonth()]
    const currentDay = dte.getDate();
    const day = days[dte.getDay()]
    const year = dte.getFullYear();


    return day + ", " + month + " " + currentDay + ", " + year;
}

const floor = (num) => {
    return Math.floor(num) + '°';
}



export { getBackground, getDate, floor };

