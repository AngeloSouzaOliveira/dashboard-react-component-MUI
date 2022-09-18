import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Title from '../Title/Title';

const marks = [
    {
        value: 0,
        label: '0',
    },
    {
        value: 5,
        label: '5',
    },
    {
        value: 10,
        label: '10',
    },
    {
        value: 15,
        label: '15',
    },
    {
        value: 20,
        label: '20',
    },
    {
        value: 25,
        label: '25',
    },
    {
        value: 30,
        label: '35',
    },
    {
        value: 35,
        label: '35',
    },
    {
        value: 40,
        label: '40',
    },
    {
        value: 45,
        label: '45',
    },
    {
        value: 50,
        label: '50',
    },
    {
        value: 55,
        label: '55',
    },
    {
        value: 60,
        label: '60',
    },
    {
        value: 65,
        label: '65',
    },
    {
        value: 70,
        label: '70',
    },
    {
        value: 75,
        label: '75',
    },
    {
        value: 80,
        label: '80',
    },
    {
        value: 85,
        label: '85',
    },
    {
        value: 90,
        label: '90',
    },
    {
        value: 95,
        label: '95',
    },
    {
        value: 100,
        label: '100',
    }
  ];

function valuetext(value) {
    return `${value}`;
}

export default function DiscreteSlider() {
  return (
    
    <Box sx={{ width: '100%', marginTop:'2rem' }}>
        <Title>Intervalos de Pedidos</Title>
        <Slider
        aria-label="Always visible"
        defaultValue={5}
        getAriaValueText={valuetext}
        step={5}
        marks={marks}
        valueLabelDisplay="on"
        />
      
    </Box>
  );
}