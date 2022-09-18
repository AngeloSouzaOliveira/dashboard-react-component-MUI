import * as React from 'react';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

export default function Animations(props) {

  return (
    <Box sx={{ width: props.width }}>
        <Skeleton />
        <Skeleton animation="wave" />
        <Skeleton animation="wave" />
    </Box>
  );
}