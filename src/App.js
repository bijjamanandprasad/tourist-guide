import React, { useEffect, useState } from "react";
import { CssBaseline, Grid } from "@material-ui/core";

import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";

import { getPlacesData } from "./api";

const App = () => {
  const [places, setPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState([]);
  const [childClicked, setChildClicked] = useState(null);

  const [isLoading,setIsLoading] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  useEffect(() => {
      // getWeatherData(coords.lat, coords.lng)
      //   .then((data) => setWeatherData(data));
      // getPlacesData(type, bounds.sw, bounds.ne)
      //   .then((data) => {
          //     setPlaces(data.filter((place) => place.name && place.num_reviews > 0));
          //     setFilteredPlaces([]);
          //     setRating('');
          //     setIsLoading(false);
          //   });
          
    setIsLoading(true);
      getPlacesData(bounds.sw, bounds.ne)
      .then((data) => {
        console.log(JSON.stringify(data) + "aaa");
          setPlaces(data);
            setIsLoading(false);
      });
 
  }, [coordinates, bounds]);
  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <List places={places} childClicked = {childClicked} isLoading={isLoading} />
        </Grid>
        <Grid item xs={12} md={8} style={{ marginTop: 5 }}>
          <Map
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={coordinates}
            places={places}
            setChildClicked = {setChildClicked}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default App;
