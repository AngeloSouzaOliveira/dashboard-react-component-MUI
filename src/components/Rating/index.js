import * as React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
const positionStyle = {margin: '0 auto', paddingBottom:'0.5rem'}

export default function HalfRating(props) {
  return (
    <Stack spacing={1} style={positionStyle}>
      <Rating name="half-rating-read" defaultValue={props.value} precision={props.precision} />
    </Stack>
  );
}