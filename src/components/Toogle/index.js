import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function ColorToggleButton(props) {
  const [alignment, setAlignment] = React.useState('web');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup
      color="primary"
      value={alignment}
      exclusive
      onChange={handleChange}
      aria-label="Período"
    >
      <ToggleButton value={props.one}>{props.one}</ToggleButton>
      <ToggleButton value={props.two}>{props.two}</ToggleButton>
      <ToggleButton value={props.three}>{props.three}</ToggleButton>
    </ToggleButtonGroup>
  );
}