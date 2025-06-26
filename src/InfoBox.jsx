import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';

export default function InfoBox({info}){
    const INIT_URL="https://media.istockphoto.com/id/1325033552/photo/cloudscape.jpg?s=612x612&w=is&k=20&c=wEswlDuGG8YkhuxL_f6RMOtSfxcHXqQOxpHK4NtB7Xo=";
    
    const HOT_URL ="https://media.istockphoto.com/id/1007768414/photo/blue-sky-with-bright-sun-and-clouds.webp?a=1&b=1&s=612x612&w=0&k=20&c=Dbpa9jxwFTZnW-yyyJccEU_FqhEL3fXqMIP68kbLUFw=";
    const COLD_URL ="https://images.unsplash.com/photo-1745567693772-57c975b2f567?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D";
    const RAIN_URL ="https://images.unsplash.com/photo-1555661592-1a1f89aa345b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHJhaW55JTIwc2t5fGVufDB8fDB8fHww";

    return(
        <div className="InfoBox">
           
            <div className="cardContainer">
             <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140}}
        image={
            info.humidity >80
            ?RAIN_URL
            : info.temp > 18
            ? HOT_URL
            : COLD_URL
        }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}{
            info.humidity >80
            ?<ThunderstormIcon/>
            : info.temp > 18
            ? <WbSunnyIcon/>
            : <AcUnitIcon/>
        }
        </Typography>
        <Typography variant="body2"  color="text.secondary" component={"span"}>
          <p>Temperature={info.temp}&deg;C</p>
          <p>Humidity= {info.humidity}</p>
          <p>Min Temp={info.tempMin}&deg;C</p>
          <p>Max Temp={info.tempMax}&deg;C</p>
          <p>The weather can be described as <i>{info.weather}</i> and it feels like {info.feelsLike}&deg;C</p>

        </Typography>
      </CardContent>
      
    </Card>
    </div>
        </div>
    );
}