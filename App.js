import React, {useEffect, useState} from "react";
import * as Location from 'expo-location';
import axios from "axios";
import Loading from "./components/Loading";
import Weather from "./components/Weather";

const API_KEY = '57f1fdc6ec8b0b32fae095b3e3b83b1d';

export default function App() {
  const [state, setState] = useState({isLoading: true});
  const [errorMsg, setErrorMsg] = useState(null);


  useEffect(() => {
    (async () => {

      let {status} = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let {coords: {latitude, longitude}} = await Location.getCurrentPositionAsync({});
      await getWeather(latitude, longitude)
    })();
  }, []);


  const getWeather = async (latitude, longitude) => {
    const {
      data: {
        main: {temp},
        name,
        weather,
      }
    } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);
    setState({
      isLoading: false,
      temp,
      name,
      condition: weather[0].main,
    });
  }

  console.log('Hello:', state)

  return (
    state.isLoading ? <Loading/> : <Weather state={state} />
  );
}
