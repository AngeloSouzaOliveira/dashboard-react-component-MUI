import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from '../Title/Title';
import Rating from '../Rating/index';

function preventDefault(event) {
  event.preventDefault();
}

export default function Deposits() {
  return (
    <React.Fragment>
      <Title>Depósitos recentes</Title>
      <Rating  value='3.0' precision='0.5'></Rating>
      <Typography component="p" variant="h4">
      
        R$ 3.024.00
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        em 15 de Setembro de 2022
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          Ver saldo
        </Link>
      </div>
    </React.Fragment>
  );
}