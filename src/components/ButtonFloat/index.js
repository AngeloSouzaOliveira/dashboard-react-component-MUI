import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NavigationIcon from '@mui/icons-material/Navigation';

const positionStyle = {position: 'absolute', right: '20px', bottom: '10px'}


export default function FloatingActionButtons(props) {
  const propIcon = props.type
  let fab;

  if (propIcon === 'add') {
    fab = <Fab color="primary" aria-label="add"> 
            <AddIcon />
          </Fab>
  } else if (propIcon === 'like') {
    fab = <Fab disabled aria-label="like">
            <FavoriteIcon />
          </Fab>
  } else if (propIcon === 'nav') {
    fab = <Fab variant="extended"> 
            <NavigationIcon /> 
            {props.children} 
          </Fab>
  } else {
    fab = <Fab color="secondary" aria-label="edit"><EditIcon /></Fab>
  }
  return (
    <Box  style={positionStyle} sx={{ '& > :not(style)': { m: 1 } }}>
     {fab}
    </Box>
  );
}