import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
const center = { justifyContent: 'space-evenly'}

export default function MediaCard(props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="100%"
        image={props.src}
        alt={props.alt}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {props.children}
        </Typography>
      </CardContent>
      <CardActions style={center}>
        <Button size="small">Compatilhar</Button>
        <Button size="small">Saiba Mais</Button>
      </CardActions>
    </Card>
  );
}