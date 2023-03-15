import axios from 'axios';
import { useState } from 'react'
import { getBackground, getDate } from './Weather-Helper-Function/Helper';
import Data from './Components/Data';



function App() {

  const apikey = '197d20a9e4425ce99bdbf736f947c8b8';
  const [val, updateVal] = useState("");
  const [weatherdata, updateWeatherData] = useState({
    feelsLike: '',
    humidity: '',
    temp: '',
    description: '',
    icon: '',
    main: '',
    windspeed: '',
    city: ''

  })

  const { feelsLike, humidity, temp, description, icon, main, windspeed, city } = weatherdata;


  const getData = async () => {
    await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Memphis&appid=${apikey}`)
      .then(function (res) {
        const { feels_like, humidity, pressure, temp, temp_max, temp_min } = res.data.main;
        const { description, icon, id, main } = res.data.weather[0];
        const { deg, speed } = res.data.wind
        const city = res.data.name;

        // updateWeatherData({ ...weatherdata })

        console.log(res)

      })

  }



  return (
    <div className={`w-full h-full ${getBackground()} bg-cover bg-no-repeat bg-center grid grid-cols-1 grid-rows-3`}>
      <section className='p-2 text-center space-x-2'>
        <input
          type="text"
          className='text-white bg-transparent border-2 border-white placeholder:font-bold placeholder:text-white p-2 rounded-xl placeholder:text-xl outline-none'
          placeholder='Enter Location'
          value={val}
          onChange={(e) => updateVal(e.target.value)}
        />
        <i className="fa-solid fa-magnifying-glass cursor-pointer text-xl" onClick={getData}></i>
      </section>
      <section className='flex justify-center items-center'>
        <div className='border-2 border-white flex gap-4 p-12 rounded-xl'>

          <div className='flex flex-col items-center gap-2'>
            <img src={`http://openweathermap.org/img/w/${icon}.png`} alt="" />
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
      <section className='p-2'>
        <Data />
      </section>
    </div>
  );
}

export default App;
