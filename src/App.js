import axios from 'axios';
import { useEffect, useState } from 'react'
import {
  getBackground, getDate, floor, getWeekDay, build
} from './Weather-Helper-Function/Helper';
import Data from './Components/Data';



function App() {


  const apikey = '197d20a9e4425ce99bdbf736f947c8b8';
  {/*useState*/ }
  const [click, updateClick] = useState(false)
  const [val, updateVal] = useState("");
  const [num, updateNum] = useState(0)
  const [weatherdata, updateWeatherData] = useState({
    feelsLike: '',
    humidity: '',
    temp: '',
    description: '',
    icon: '',
    main: '',
    windspeed: '',
    city: '',
    threeDay: [],
    dt: ''
  })





  const reset = () => {
    updateVal("")
  }

  const toggle = () => {
    updateClick(true);
  }

  const flip = click ? 'block' : 'hidden'

  const { feelsLike, humidity, temp, description, icon, main, windspeed, city } = weatherdata;



  const getData = async () => {
    await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${val}&appid=${apikey}&units=imperial`)
      .then(function (res) {
        const { feels_like, humidity, pressure, temp, temp_max, temp_min } = res.data.main;
        const { description, icon, id, main } = res.data.weather[0];
        const { deg, speed } = res.data.wind
        const city = res.data.name;


        console.log(res)
        updateWeatherData({ ...weatherdata, feelsLike: feels_like, humidity: humidity, temp: floor(temp), description: description, icon: icon, main: main, windspeed: speed, city: city })

      })



    reset();
    toggle();


  }

  const getForecast = async () => {
    await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apikey}&units=imperial`)
      .then((res) => {

        updateWeatherData({ ...weatherdata, threeDay: res.data.list })
        console.log(res)
      })

  }

  const clickButton = (e) => {
    const id = e.target.id;

    updateNum(Number(id))

    getForecast();

  }


  const getIcon = icon ? getBackground(icon) : 'bg-weatherblue'
  const textColor = ['01n', '02n', '03n', '04n', '09n', '10n', '11n', '13n', '50n'].includes(icon) ? 'text-white' : 'text-orange-500'


  return (
    <div className={`w-full h-full ${getIcon} ${textColor} bg-cover bg-no-repeat bg-center grid grid-cols-1`}>
      {/*1st section*/}
      <section className='p-2 text-center space-x-2'>
        <input
          type="text"
          className='text-white bg-transparent border-2 border-white placeholder:font-bold placeholder:text-white p-2 rounded-xl placeholder:text-xl outline-none max-md:text-center'
          placeholder='Enter Location'
          value={val}
          onChange={(e) => updateVal(e.target.value)}
        />
        <i className="fa-solid fa-magnifying-glass cursor-pointer text-xl" onClick={getData}></i>
        {/* <button className='border-2 p-2' onClick={getForecast}>Forecast</button> */}
      </section>
      {/*2nd section*/}
      <section className={`${flip} flex items-center justify-center`}>
        <div className='space-y-2'>
          <h1 className='border-2 border-orange-400 rounded-xl p-2 cursor-pointer hover:bg-gray-500' id='3' onClick={clickButton}>3 Day Forecast</h1>
          <h1 className='border-2 border-orange-400 rounded-xl p-2 cursor-pointer hover:bg-gray-500' id='5' onClick={clickButton}>5 Day Forecast</h1>
          <h1 className='border-2 border-orange-400 rounded-xl p-2 cursor-pointer hover:bg-gray-500' id='7' onClick={clickButton}>7 Day Forecast</h1>
          <h1 className='border-2 border-orange-400 rounded-xl p-2 cursor-pointer hover:bg-gray-500' id='10' onClick={clickButton}>10 Day Forecast</h1>
        </div>
      </section>
      {/*3rd section*/}
      <section className='flex justify-center items-center'>
        <div className={`border-2 border-white flex items-center gap-4 p-2 rounded-xl max-md:flex-col ${flip}`}>
          <div className='flex flex-col justify-center gap-2'>
            <p className='capitalize'>{description}</p>
            <img src={`http://openweathermap.org/img/w/${icon}.png`} alt="" className='' />
            <h1 className='text-4xl font-bold'>{city}</h1>
          </div>
          <p className='self-center text-7xl'>{temp}</p>
          <div className='bg-gray-400 opacity-90 p-2 rounded-xl'>
            <p>Humidity: {humidity}</p>
            <p>Wind: {windspeed}</p>
            <p>Feels Like: {feelsLike}</p>
          </div>
        </div>
      </section>
      {/*4th section*/}
      <section className='flex justify-center'>
        <div className='flex gap-2 max-md:flex-col'>

          {weatherdata.threeDay.splice(0, num).map((x, i) => {

            const days = build(num);

            return <Data key={x.main.temp} day={days[i]} temp={x.main.temp} icon={x.weather[0].icon} desc={x.weather[0].main} />

          })}
        </div>
      </section>
    </div>
  );
}

export default App;
