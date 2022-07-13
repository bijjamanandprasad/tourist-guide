import React, { useEffect, useState } from "react";
import { CssBaseline, Grid } from "@material-ui/core";

import Header from "../../components/Header/Header";
import List from "../../components/List/List";
import Map from "../../components/Map/Map";

import { getPlacesData, getWeatherData } from "../../api";
import "./styles.css";

import ResponsiveAppBar from "../../components/ResponsiveNavBar/ResponsiveNavBar";

const Home = () => {
  const [places, setPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState([]);
  const [childClicked, setChildClicked] = useState(null);

  const [type, setType] = useState("attractions");
  const [rating, setRating] = useState("");

  const [filteredPlaces, setFilteredPlaces] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  useEffect(() => {
    const filteredPlaces = places.filter((place) => place.rating > rating);
    setFilteredPlaces(filteredPlaces);
  }, [rating]);

  useEffect(() => {

    if (bounds.ne && bounds.sw) {
      setIsLoading(true);

      // getWeatherData(coordinates.lat, coordinates.lng)  
      // .then((data) => {
      //   setWeatherData(data);
      //   console.log(JSON.stringify(data) + "weat");
      // })    

    //   getPlacesData(bounds.sw, bounds.ne, type)
    //   .then((data) => {
    //     setFilteredPlaces([]);
    //     setPlaces(data?.filter((place) => place.name && place.num_reviews > 0));
    //     setIsLoading(false);
    //   });
    }
  }, [type, bounds]);
  
  return (
    <>
      <CssBaseline />
      <Header setCoordinates={setCoordinates} />

      {/* <ResponsiveAppBar /> */}

      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <List
            places={filteredPlaces.length ? filteredPlaces : places}
            childClicked={childClicked}
            isLoading={isLoading}
            rating={rating}
            setRating={setRating}
            type={type}
            setType={setType}
          />
        </Grid>
        <Grid  className="center" item xs={12} md={8} style={{ marginTop: 5 }}>
          <Map
           
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={coordinates}
            places={filteredPlaces.length ? filteredPlaces : places}
            setChildClicked={setChildClicked}
            weatherData = {weatherData}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
