const getBackground = (icon) => {

    const arr = [
        {
            id: "01d",
            pic: "bg-clearskyday"
        },
        {
            id: "01n",
            pic: "bg-clearskynight"
        },
        {
            id: "02d",
            pic: "bg-cloudsday"
        },
        {
            id: "02n",
            pic: "bg-cloudsnight"
        },
        {
            id: "03d",
            pic: "bg-cloudsday"
        },
        {
            id: "03n",
            pic: "bg-cloudsnight"
        },
        {
            id: "04d",
            pic: "bg-cloudsday"
        },
        {
            id: "04n",
            pic: "bg-cloudsnight"
        },
        {
            id: "09d",
            pic: "bg-rainday"
        },
        {
            id: "09n",
            pic: "bg-rainnight"
        },
        {
            id: "10d",
            pic: "bg-rainday"
        },
        {
            id: "10n",
            pic: "bg-rainnight"
        },
        {
            id: "11d",
            pic: "bg-thunderstormday"
        },
        {
            id: "11n",
            pic: "thunderstormnight"
        },
        {
            id: "13d",
            pic: "bg-snowday"
        },
        {
            id: "13n",
            pic: "bg-snownight"
        },
        {
            id: "50d",
            pic: "bg-mistday"
        },
        {
            id: "50n",
            pic: "bg-mistnight"
        }
    ]



    // return arr.find(x => x.id === icon).pic
    // return arr.map(x => x.id === icon ? x.pic : 'bg-blue-500')

    return arr.find((x) => x.id === icon).pic
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

const getDay = (num) => {
    let dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


    return
}


const getWeekDay = (dte) => {
    let dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    return dayNames[new Date(dte * 1000).getDay()]
}

function build(endNum) {

    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


    let start = new Date().getDay() + 1;

    endNum = start + endNum

    return dayNames.slice(start, endNum);
}


export { getBackground, getDate, floor, getWeekDay, build };

