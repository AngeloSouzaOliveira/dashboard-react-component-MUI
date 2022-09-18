import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import {deepPurple } from '@mui/material/colors';

export default function LetterAvatars(props) {
    const style= {marginLeft: '0.8rem'}
  return (
    <Stack direction="row" spacing={1} style={style}>
      <Avatar sx={{ bgcolor: deepPurple[400] }}>{props.children}</Avatar>
    </Stack>
  );
}