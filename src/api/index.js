import axios from 'axios';

export const getPlacesData = async (sw,ne,type) => {
    try{
        const {data:{data}} = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
          {params: {
            bl_latitude: sw.lat,
            tr_latitude: ne.lat,
            bl_longitude: sw.lng,
            tr_longitude: ne.lng,
          },
          headers: {
            'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_TRAVAL_API_KEY,
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
          }
         });

        return data;
    } catch(error){
        console.log(error + "lll");
    }
}


export const getWeatherData = async (lat, lng) => {
  try{
    if(lat & lng){
      const {data} = await axios.get("https://community-open-weather-map.p.rapidapi.com/find",
      {params: {
        lon: '0',
        lat: '0'
      },
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_WEATHER_API_KEY,
        'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com'
      }}
    );
    return data;
    }
  }catch(error){
      console.log(error);
  }
}