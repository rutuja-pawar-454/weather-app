import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import './InfoBox.css';
import { motion, AnimatePresence } from 'framer-motion'; // ⬅️ Imported for animation

export default function InfoBox({ info }) {
  const HOT_URL =
    'https://media.istockphoto.com/id/1007768414/photo/blue-sky-with-bright-sun-and-clouds.webp?a=1&b=1&s=612x612&w=0&k=20&c=Dbpa9jxwFTZnW-yyyJccEU_FqhEL3fXqMIP68kbLUFw=';
  const COLD_URL =
    'https://images.unsplash.com/photo-1745567693772-57c975b2f567?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D';
  const RAIN_URL =
    'https://images.unsplash.com/photo-1555661592-1a1f89aa345b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHJhaW55JTIwc2t5fGVufDB8fDB8fHww';

  const getIcon = () => {
    if (info.humidity > 80) return <ThunderstormIcon sx={{ fontSize: 30, color: '#555' }} />;
    else if (info.temp > 18) return <WbSunnyIcon sx={{ fontSize: 30, color: 'orange' }} />;
    else return <AcUnitIcon sx={{ fontSize: 30, color: 'skyblue' }} />;
  };

  return (
    <div className="InfoBox">
      <div className="cardContainer">
        <AnimatePresence mode="wait">
          <motion.div
            key={info.city} // <-- triggers animation on city change
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Card
              sx={{
                maxWidth: 345,
                borderRadius: '20px',
                background: 'rgba(255, 255, 255, 0.15)',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
                color: '#333',
                margin: 'auto',
              }}
            >
              <CardMedia
                sx={{ height: 140 }}
                image={
                  info.humidity > 80 ? RAIN_URL : info.temp > 18 ? HOT_URL : COLD_URL
                }
                title="Weather Image"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}
                >
                  {info.city} {getIcon()}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  component={'span'}
                  sx={{ lineHeight: 1.6 }}
                >
                  <p>🌡️ Temperature = {info.temp}&deg;C</p>
                  <p>💧 Humidity = {info.humidity}%</p>
                  <p>🔻 Min Temp = {info.tempMin}&deg;C</p>
                  <p>🔺 Max Temp = {info.tempMax}&deg;C</p>
                  <p>
                    🌥️ Description: <i>{info.weather}</i>, feels like {info.feelsLike}&deg;C
                  </p>
                </Typography>
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
