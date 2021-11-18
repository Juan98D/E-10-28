import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



export default function Product({product : {id, name, image, description, link}}) {
  return (
    <Card sx={{ maxWidth: 315 }}>
      <CardMedia
        component="img"
        height="240"
        image={image}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            {name}
        </Typography>
        <Typography variant="body2" color="text.secondary" height = "100px">
            {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href = {link} target = "_blank">Adquirir</Button>
      </CardActions>
    </Card>
  );
}
