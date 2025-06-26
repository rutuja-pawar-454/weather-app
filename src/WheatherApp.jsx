import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";
import { Box, Typography, Container, Paper } from "@mui/material";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Pune",
    feelsLike: 24.84,
    temp: 25.05,
    tempMin: 25.05,
    tempMax: 25.05,
    humidity: 47,
    weather: "haze",
  });

  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Paper elevation={6} sx={{ p: 3, borderRadius: 4 }}>
        <Typography variant="h4" gutterBottom align="center" color="primary">
          Weather App 🌦️
        </Typography>
        <SearchBox updateInfo={updateInfo} />
        <Box mt={4}>
          <InfoBox info={weatherInfo} />
        </Box>
      </Paper>
    </Container>
  );
}
